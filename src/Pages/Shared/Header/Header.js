import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar style={{backgroundColor:'#91c2ae'}} collapseOnSelect sticky='top' expand="lg" variant='dark'>
                <Container>
                <Navbar.Brand className=' fs-3 fw-bold' as={Link} to="/"><span style={{color: '#31795c'}}>FR</span> PHOTOGRAPHY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className=' fs-5' href="home#services">Services</Nav.Link>
                    <Nav.Link className=' fs-5' href="home#blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link className=' fs-5' as={Link} to="/about">About</Nav.Link>
                    {
                        user ?
                        <Nav.Link className=' fs-5' onClick={handleSignOut} as={Link} to="/login">Sign Out</Nav.Link>
                        :   
                        <Nav.Link className=' fs-5' as={Link} to="/login">
                        Login
                    </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    );
};

export default Header;