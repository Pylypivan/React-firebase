import React, {Component} from 'react';
import './signIn.css';
import Button from '../forms/button/button';
import { signInWithGoogle } from '../../firebase/utils';



export default class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    };

    
    render() {
        return (
            <div className = 'signIn'>
            <div className = 'wrap'>
                 <h2>
                     LogIn
                 </h2>

                 <div className = 'forwWrap'>
                     <form onSubmit = {this.handleSubmit} >  
                      <div className = 'socialSignIn'>
                          <div className = 'row'>
                              <Button onClick = {signInWithGoogle}>
                                  Sign in with Google
                              </Button>
                          </div>
                      </div>
                      </form>
                 </div>
            </div>
        </div>
        )
    }
} 
  