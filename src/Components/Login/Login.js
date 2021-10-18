import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'
const Login = () => {
  const {signWithGoogle}= useFirebase()
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
      <Button onClick={signWithGoogle} >Sign With Google</Button>
    </form>
    <Link  to="/register">New User? SignUp Here.</Link>
        </div>
    );
};

export default Login;