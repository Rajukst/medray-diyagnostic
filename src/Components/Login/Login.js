import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Login.css'
const Login = () => {
  
  const location= useLocation()
  const history= useHistory()
  const redirectURL= location.state?.from || '/'
  const {signWithGoogle}= useAuth();
    const loggedIn=()=>{
      signWithGoogle()
      .then(result=>{
        history.push(redirectURL)
    })
    }
    
    return (
        <div>
            <h1 className="mb-5">Please Login</h1>
            <form>
            <label htmlFor="email">Enter Your email:</label>
            <input type="email" name="email" id="" placeholder="enter your email"  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input type="password" name="password" id="" placeholder="enter your password"  />
            <br /><br />
            
            <br /><br />
            <input type="submit" value="Sign In" name="Sign In" />
            <br /><br />
            </form>
      <Button onClick={loggedIn} >Sign With Google</Button>
      <br /><br />
    <Link  to="/register">New User? SignUp Here.</Link>
        </div>
    );
};

export default Login;