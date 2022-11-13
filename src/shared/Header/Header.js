import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.error(error)
            });

    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className='text-decoration-none'>
                    <Image style={{ width: "50px" }} className='rounded-circle mx-2 mb-2' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photography-logo%2C-camera-logo%2C-modern-camera-design-template-61a629a6b006a5d93947e93c81f16ce4.jpg?ts=1660982220'></Image>
                    <Navbar.Brand className="text-warning fs-2">Click with Jack</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Link to='/' className='text-decoration-none m-2'>Home</Link>
                        <Link to='/blog' className='text-decoration-none m-2'>Blog</Link>
                    </Nav>

                    {
                        user?.uid ?
                            <Nav>
                                <Link className='text-decoration-none mx-2' to='/review'>My reviews</Link>
                                <Link className='text-decoration-none mx-2' to='/services/add'>Add service</Link>
                                <Link onClick={handleSignOut} className='text-decoration-none' to='/login'>Log Out</Link>
                            </Nav>
                            :
                            <Nav>
                                <Link className='text-decoration-none mx-2' to='/register'>Register</Link>
                                <Link className='text-decoration-none mx-2' to='/login'>Log In</Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;