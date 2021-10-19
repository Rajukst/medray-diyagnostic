import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';



const Register = () => {

    const {emailPasswordSign}= useAuth()

const registerSubmit=(e)=>{
    emailPasswordSign()
e.preventDefault();
}
// hanlding form input value
const emailField= e=>{
   console.log(e.target.value)
}
const passwordFiled=(e)=>{
    console.log(e.target.value)
    }
    return (
        <div>
            <h1>Please Register</h1>

             <form onSubmit={registerSubmit} >
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" name="firstName" id="" placeholder="enter your name" />
            <br /><br />
            <label htmlFor="email">Enter Your email:</label>
            <input onBlur={emailField} type="email" name="email" id="" placeholder="enter your email"  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input onBlur={passwordFiled}  type="password" name="password" id="" placeholder="enter your password"  />
            <br /><br />
            <label htmlFor="mobile"> Mobile Number:</label>
            <input type="text" name="mobile" id="" placeholder="enter your mobile number"  />
            <br /><br />
            <input onClick={registerSubmit} type="submit" value="Sign Up" name="Sign Up" />
            </form>
        </div>
    );
};
// 
export default Register;