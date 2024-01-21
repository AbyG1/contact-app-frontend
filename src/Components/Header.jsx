import logo from "../assets/contacts.png"
import React from 'react';
import "./Header.css"

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
        <MDBNavbar className="navbar">
        <MDBContainer fluid>
          <MDBNavbarBrand className="navtext" >
            <img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            />
                Contact App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>


    </>
  )
}

export default Header