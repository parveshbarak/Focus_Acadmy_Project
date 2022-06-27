import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';


const SignIn = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('email') && localStorage.getItem('password')) setIsLoggedIn(true);
  },[]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setIsLoggedIn(true)
  }

  return (
    <MDBContainer>        
      {isLoggedIn && (
        <Navigate to="/home" />
      )}
        <form className='fix-center' onSubmit={submitHandler}>
        <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
            <a href='#!'>Forgot password?</a>
            </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' block>
            Sign in
        </MDBBtn>
        </form>
    </MDBContainer>
  );
}

export default SignIn;