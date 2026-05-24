import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

import '../style/Contacto.css';
import '../style/index.css';
import '../style/Titulo.css';

class Contacto extends Component {
    render() {
        return (
            <div className="contacto" id="contacto">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="contact" data-value="title">Contact</h4>
                                </div>
                                <p className="contact-lead" data-section="contact" data-value="description">
                                    Open to remote opportunities — feel free to reach out.
                                </p>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="contacto-content">
                                    <a className="contact-block" href="mailto:sararellano@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                        <span>sararellano@gmail.com</span>
                                    </a>
                                    <a
                                        className="contact-block"
                                        href="https://github.com/sararellano"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                                        <span>github.com/sararellano</span>
                                    </a>
                                    <a
                                        className="contact-block"
                                        href="https://linkedin.com/in/sararellano"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                                        <span>linkedin.com/in/sararellano</span>
                                    </a>
                                    <a
                                        className="contact-block"
                                        href="https://sararellano.medium.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faMedium} className="contact-icon" />
                                        <span>Medium</span>
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contacto;
