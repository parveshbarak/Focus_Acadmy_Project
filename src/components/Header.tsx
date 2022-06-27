import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { getUnpackedSettings } from 'http2';

const Header = () => {
    return (
        <>
          <MDBNavbar light bgColor='light'>
            <MDBContainer>
              <MDBNavbarBrand tag="span" className='mb-0 h1'>Focus Acadmy</MDBNavbarBrand>
            </MDBContainer>
          </MDBNavbar>
        </>
      );
}

export default Header;