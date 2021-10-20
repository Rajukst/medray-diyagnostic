import React from 'react';
import useFirebase from '../Hooks/useFirebase';



const Register = () => {
const {handleUser, handlePass, handleUserName, userMobile, emailPasswordSignUp, regError}= useFirebase()
    return (
        <div>
            <h1>Please Register</h1>

             <form onSubmit={emailPasswordSignUp}>
            <label htmlFor="name">Enter Your Name:</label>
            <input onBlur={handleUserName} type="text" name="Name" id="" placeholder="enter your name" />
            <br /><br />
            <label htmlFor="email">Enter Your email:</label>
            <input onBlur={handleUser} type="email" name="email" id="" placeholder="enter your email" required  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input onBlur={handlePass} type="password" name="password" id="" placeholder="enter your password" required  />
            <br /><br />
            <label htmlFor="mobile"> Mobile Number:</label>
            <input onBlur={userMobile} type="text" name="mobile" id="" placeholder="enter your mobile number"  />
            <br /><br />
            <div className="text-danger" >{regError}</div>
            <br /><br />
            <input type="submit" value="Sign Up" name="Sign Up" />
           
            </form>
        </div>
    );
};
// 
export default Register;