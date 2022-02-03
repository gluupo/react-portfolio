import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import pdf from '../nav/assets/resume.pdf';
import './assets/styles/footer.css'

import { FaPortrait, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => (
    <Container className="footer sm-mt-1">
        <Col xs={12}>
            <Row center="xs" className="justify-content-between">
                <Col xs={3} lg={3} className="contactInfo text-center">
                    <div className="contactInfo-box justify-content-between">
                        <div>
                            <a href={pdf}>
                                <FaPortrait size={33} />
                            </a>
                        </div>
                        <div>
                            <p>resume</p>
                        </div>
                    </div>
                </Col>
                <Col xs={3} lg={3} className="contactInfo text-center">
                    <div className="contactInfo-box justify-content-between">
                        <div>
                            <a href="mailto:ariannasbanks@gmail.com" target='_blank' rel="noreferrer">
                                <FaMailBulk size={33} />
                            </a>
                        </div>
                        <div>
                            <p>email</p>
                        </div>
                    </div>
                </Col>
                <Col xs={3} lg={3} className="contactInfo text-center">
                    <div className="contactInfo-box justify-content-between">
                        <div>
                            <a href="https://www.linkedin.com/in/ariannabanks/" target='_blank' rel="noreferrer" className="text-muted">
                                <FaLinkedin size={33} />
                            </a>
                        </div>
                        <div>
                            <p>linkedin</p>
                        </div>
                    </div>
                </Col>
                <Col xs={3} lg={3} className="contactInfo text-center">
                    <div className="contactInfo-box">
                        <div>
                            <a href="https://github.com/gluupo" target='_blank' rel="noreferrer">
                                <FaGithub size={33} />
                            </a>
                        </div>
                        <div>
                            <p>github</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    </Container>
);

export default Footer;