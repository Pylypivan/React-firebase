import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {auth, handlUserProfile} from './firebase/utils';


import 'firebase/firestore';


//pages
import Registration from './component/pages/registration/registration';
import HomePage from './component/pages/homePage/home-page';
import Login from './component/pages/login/login';

//styles
import './index.css';

//lay
import MainLayout from './lay/mainLayout';
import HomePageLayout from './lay/homePageLayout';



const initiaState = {  
   currentUser: null 
};


export default class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       ...initiaState  
     };
 
   }
   authListner = null;

   componentDidMount() {
      this.authListner = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await handlUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
          });
        }
          this.setState({
            ...initiaState
          });
      });
   }

   componentWillUnmount() {
         this.authListner();
   }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
      
        <Switch>
          <Route exact path="/" render={() => (
            <HomePageLayout currentUser = {currentUser} >
              <HomePage />
            </HomePageLayout>
            )} />
          
          <Route path="/registration" render={() => (
            <MainLayout currentUser = {currentUser}>
              <Registration />
            </MainLayout>
             )} />
  
          <Route path="/login" 
              render={() => currentUser ? <Redirect to = '/' /> : (
              <MainLayout currentUser = {currentUser}>
                <Login />
              </MainLayout>
            )} />
            </Switch>
            </div>
          )
  }
}
