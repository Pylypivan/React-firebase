import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/utils';
 
import Logo from './../../img/logo.png';


const Header = (props)=> {

    const {currentUser} = props;

    return (
        <header className = 'header'>
            <div className = 'wrap'>
                <div className = 'logo'>
                    <Link to = '/'>  
                    <img src = {Logo} alt = 'Simple Logo'/> 
                    </Link>
                </div>
                
                  <div className = 'callAllActions'>

                      {currentUser && (
                          <ul>
                              <li>
                                  <span className = 'logOut' onClick = {()=> auth.signOut()} > LogOut </span>
                              </li>
                          </ul>
                      )}

                      {!currentUser &&(
                             <ul>
                             <li>
                                 <Link to = '/registration' >
                                      Register
                                 </Link>
                             </li>
                             <li>
                                 <Link to = '/login' >
                                      Login
                                 </Link>
                             </li>
                         </ul>
                      )}
                        
                  </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
}

export default Header;