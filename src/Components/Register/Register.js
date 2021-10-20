import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';



const Register = () => {

    const {emailPasswordSign}= useAuth()

const registerSubmit=(e)=>{
    emailPasswordSign()
e.preventDefault();
}
// hanlding form input value

    return (
        <div>
            <h1>Please Register</h1>

             <form>
            <label htmlFor="name">Enter Your Name:</label>
            <input type="text" name="firstName" id="" placeholder="enter your name" />
            <br /><br />
            <label htmlFor="email">Enter Your email:</label>
            <input type="email" name="email" id="" placeholder="enter your email"  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input type="password" name="password" id="" placeholder="enter your password"  />
            <br /><br />
            <label htmlFor="mobile"> Mobile Number:</label>
            <input type="text" name="mobile" id="" placeholder="enter your mobile number"  />
            <br /><br />
            <input type="submit" value="Sign Up" name="Sign Up" />
            </form>
        </div>
    );
};
// 
export default Register;