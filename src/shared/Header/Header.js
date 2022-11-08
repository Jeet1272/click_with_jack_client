import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Image src=''></Image>
                <Navbar.Brand className="text-warning fs-2" href="#home">Click with Jack</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link className="mx-5" href="#pricing">Blog</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Weddings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Marketing
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Special Event
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Register</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;