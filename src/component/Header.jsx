import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { BsCart3 } from "react-icons/bs";
const Header = () => {

    const Logoutfn = () => {

        let nathing = '';
        console.log("value null");
        localStorage.setItem('current-user-data', nathing)

    }

    return (
        <>
            <Navbar bg="black" variant="dark" className='py-3' >
                <Container>
                    <Navbar.Brand href="/home">e Commeres </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='fs-5 active' href='/dashbord'>Dashbord</Nav.Link>
                    </Nav>
                    <Nav.Link className='fs-5 text-white me-3' href='/cart'><BsCart3 /> Cart</Nav.Link>
                    <Nav.Link className='fs-6 text-white' onClick={Logoutfn} href='/login'>Log Out</Nav.Link>
                </Container>
            </Navbar>
        </>
    );

}

export default Header