import React, { useState } from 'react';



const Register = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    //handle onSubmit Form
const registerSubmit=(e)=>{
console.log(email, password)
e.preventDefault();
}
// hanlding form input value
const emailField= e=>{
   setEmail(e.target.value)
}
const passwordFiled=(e)=>{
    setPassword(e.target.value)
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
            <input type="submit" value="Sign Up" name="Sign Up" />
            </form>
        </div>
    );
};
// 
export default Register;