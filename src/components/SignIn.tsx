import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const Navigate = useNavigate()
  const savedEamil = localStorage.getItem('email')
  const savedPassword = localStorage.getItem('password')
  useEffect(() => {
    if(savedEamil && savedPassword) Navigate('/home')
  },[Navigate, savedEamil, savedPassword]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    Navigate('/home')
  }

  return (
    <MDBContainer>
        <form onSubmit={submitHandler} className="padform">
        <MDBInput className='mb-4 w-50' type='email' id='form1Example1' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
        <MDBInput className='mb-4 w-50' type='password' id='form1Example2' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

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