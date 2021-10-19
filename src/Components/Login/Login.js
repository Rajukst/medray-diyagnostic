import React from 'react';
import { Button } from 'react-bootstrap';

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

import './Login.css'
const Login = () => {
  const {emailPasswordSignIn, handlePass,handleUser}= useAuth()
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
            <form onSubmit={emailPasswordSignIn} >
            <label htmlFor="email">Enter Your email:</label>
            <input onBlur={handleUser} type="email" name="email" id="" placeholder="enter your email"  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input onBlur={handlePass}  type="password" name="password" id="" placeholder="enter your password"  />
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