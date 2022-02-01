
import React from "react";
import './assets/styles/header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = ({ currentPage, handlePageChange }) => {
    return (<header>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about"
                            onClick={() => handlePageChange('about')}
                            className={currentPage === 'about' ? 'nav-link active me-3' : 'nav-link me-3'}
                        >about</Nav.Link>
                        <Nav.Link href="#projects"
                            onClick={() => handlePageChange('work')}
                            className={currentPage === 'work' ? 'nav-link active me-3' : 'nav-link me-3'}
                        >work</Nav.Link>
                        <Nav.Link href="#contact"
                            onClick={() => handlePageChange('contact')}
                            className={currentPage === 'contact' ? 'nav-link active me-3' : 'nav-link me-3'}>contact</Nav.Link>
                        {/* <Nav.Link
                            href="./assets/resume.pdf"
                            download
                        >resume</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className="position-relative overflow-hidden p-3 p-md-5 text-center" id="banner">
            <div className="col-md-5 p-lg-5 mx-auto my-5 text-end">
                <h1
                    className="text-white">
                    arianna banks
                </h1>
            </div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    </header>
    )
}

export default Navigation;
