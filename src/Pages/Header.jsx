import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-tertiary" style={{color:'white',backgroundColor:'transparent'}}>
      <Container fluid>
        <Navbar.Brand href="#" ><Link to={'/'} className='d-flex ' style={{color:'white',textDecoration:'none',justifyContent:'center',alignItems:'center' ,}} ><i className="fa-solid fa-dumbbell" style={{color:'white',marginRight:'10px',fontSize:'30px'}}></i><h4 style={{fontFamily:' "Oswald", "serif"'}}>Fix Your Body</h4></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <Nav.Link href="#"  ><Link to={'/workouts'} style={{color:'white',textDecoration:'none'}} >Workouts</Link></Nav.Link>
        <Nav.Link href="#"><Link to={'/diatplan'} style={{color:'white',textDecoration:'none'}}>Daily Chart</Link></Nav.Link>
        <Nav.Link href="#"><Link to={'/history'} style={{color:'white',textDecoration:'none'}}>History</Link></Nav.Link>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header