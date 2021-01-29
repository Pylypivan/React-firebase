import React, {Component} from 'react';
import './signUp.css';
import FormInput from '../forms/form-input/formInput';
import Button from '../forms//button/button';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confrimPassword: ''
};

export default class SignUp extends Component {

     constructor(props) {
         super(props);
         this.state = {
             ...initialState
         };
         this.handleChange = this.handleChange.bind(this);
     }
     

     handleChange(e) {
         const {name,value} = e.target;

         this.setState({
             [name] : value
         });
     }

     
     
    render() {
        const { displayName,email,password,confrimPassword } = this.state;

        return (
            <div className ='signUp' >
                 <div className = 'wrap'>
                        <h2> 
                            SignUp
                        </h2>

                        <form>      
                            <FormInput
                            type = 'text'
                            name = 'displayName'
                            value = {displayName}
                            placeholder = 'Full name'
                            onChange = {this.handleChange}
                            />
                        </form>

                        <form>    
                            <FormInput
                            type = 'email'
                            name = 'email'
                            value = {email}
                            placeholder = 'Email'
                            onChange = {this.handleChange}
                            />
                        </form>

                        <form>  
                            <FormInput
                            type = 'password'
                            name = 'password'
                            value = {password}
                            placeholder = 'Password'
                            onChange = {this.handleChange}
                            />
                        </form>

                        <form>  
                            <FormInput 
                            type = 'password'
                            name = 'confrimPassword'
                            value = {confrimPassword}
                            placeholder = 'ConfrimPassword'
                            onChange = {this.handleChange}
                            />
                        </form> 

                        <Button type = 'submit'>
                             Register
                        </Button>

                       
                 </div>
            </div>
        )
    }
}