import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const Navigate = useNavigate()
  const savedEamil = localStorage.getItem('email')
  const savedPassword = localStorage.getItem('password')

  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    Navigate('/')
  }

  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false)
  return (
    <>
      <MDBNavbar sticky expand='lg' light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>Focus Acadmy</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            </MDBNavbarNav>
            {(savedEamil && savedPassword) && <MDBBtn color='primary' className='d-flex input-group w-auto' onClick={logoutHandler}> Logout </MDBBtn>}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
