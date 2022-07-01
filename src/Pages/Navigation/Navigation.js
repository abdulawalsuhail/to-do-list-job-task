import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand href="/">Task App</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link className='text-dark'><Link className='text-dark' to="/todo">TO-DO</Link></Nav.Link>
                            <Nav.Link className='text-dark'><Link className='text-dark' to="/completedTask">Completed Tasks</Link></Nav.Link>
                            <Nav.Link className='text-dark' ><Link className='text-dark' to="/calendar">Calendar</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;