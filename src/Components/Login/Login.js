import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   
    return (
        <div>
            <h1 className="mb-5">Please Login</h1>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
      
      <input placeholder="enter your email" defaultValue="" {...register("example")} />
        <br /><br />
      <input placeholder="enter your password" {...register("exampleRequired", { required: true })} />
        <br /> <br />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      <br /><br />
      <Button onClick={loggedIn} >Sign With Google</Button>
    </form>
    <Link  to="/register">New User? SignUp Here.</Link>
        </div>
    );
};

export default Login;