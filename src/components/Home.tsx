import React, { useEffect, useState } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('email') && localStorage.getItem('password'))
      setIsLoggedIn(true)
  }, [localStorage,isLoggedIn])

  return (
    <>
      {!isLoggedIn && <Navigate to='/' />}
      <h1>Welcome to home!!</h1>
    </>
  )
}
export default Home
