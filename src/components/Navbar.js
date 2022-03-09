import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { POST_ROUTE } from '../utils/consts';


const NavBar = ()=>{


  return (
    <Navbar bg="dark" variant='dark'>
      <Container>
        <NavLink style={{color:"white"}} to={POST_ROUTE}>Test</NavLink>
        
      </Container>
    </Navbar>
  )
};


export default NavBar;
