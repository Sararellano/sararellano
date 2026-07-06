import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

import '../style/SobreMi.css';
import '../style/index.css';
import '../style/Titulo.css';

class SobreMi extends Component {
    render() {
        return (
            <div className="sobreMi" id="sobreMi">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="about-me" data-value="title">About me</h4>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row className="sobreMi-content">
                        <Col sm={12} md={3} className="profile-col">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="profile-pic"></div>
                            </ScrollAnimation>
                        </Col>
                        <Col sm={12} md={9} className="bio-col">
                            <ScrollAnimation animateIn="fadeInRight">
                                <div
                                    className="description"
                                    data-section="about-me"
                                    data-value="description"
                                >
                                    <p>
										<strong>Fullstack</strong> Engineer with 8+ years of experience leading the <strong>frontend</strong> of large-scale CMS platforms (80+ sites, 50+ international domains) at Selectra. Specialized in <strong>JavaScript/TypeScript, React, Next.js, PHP, Drupal and Laravel</strong>, with a recent focus on integrating <strong>AI (Claude API, OpenAI API)</strong> into real products to automate workflows and generate personalized content.
                                    </p>
                                    <p>
										My background combines advertising with software development, giving me a strong eye for documentation and user-centered product thinking.
                                    </p>
                                </div>

                                <div className="contact-chips">
                                    <a href="mailto:sararellano@gmail.com" className="contact-chip">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        sararellano@gmail.com
                                    </a>
                                    <a
                                        href="https://github.com/sararellano"
                                        className="contact-chip"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                        github.com/sararellano
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/sararellano"
                                        className="contact-chip"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                        linkedin.com/in/sararellano
                                    </a>
                                    <a
                                        href="https://sararellano.medium.com/"
                                        className="contact-chip"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faMedium} />
                                        Medium
                                    </a>
                                    <span className="contact-chip plain">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span data-section="about-me" data-value="city">Seville, Spain · Remote</span>
                                    </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SobreMi;
