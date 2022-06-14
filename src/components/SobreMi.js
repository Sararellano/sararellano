import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Titulo from './Titulo'


import '../style/SobreMi.css';
import '../style/index.css';


class SobreMi extends Component {
    // constructor(){
    //     super();

    // }





    render() {
        return(
            <div className="sobreMi" id="sobreMi">
                <Titulo titleText="Sobre Mi" />
                <Container>
                    <Row className="sobreMi-content">
                        <ScrollAnimation animateIn="slideInLeft">
                            <Col sm={12} md={3}>
                                <div className="profile-pic"></div>
                            </Col>
                        </ScrollAnimation>
                        <Col sm={12} md={9}>
                            <Row className="sobreMi-info">
                                <ScrollAnimation animateIn="slideInRight">
                                    <Col>
                                        <div className="info-block wow">
                                            <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faEnvelope} /></div>
                                            <div className="info-text">
                                                <span><strong>Email</strong></span>
                                                <a href="mailto:sararellano@gmail.com"> sararellano@gmail.com </a>
                                            </div>
                                        </div>

                                        <div className="info-block wow">
                                            <div className="info-icon hvr-trim"><FontAwesomeIcon icon={faPhone} /></div>
                                            <div className="info-text">
                                                <span><strong>Teléfono</strong></span>
                                                +34 663176344
                                            </div>
                                        </div>
                                    </Col>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="slideInRight">
                                    <Col>
                                        <div className=" info-block wow ">
                                            <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faGlobe} /></div>
                                            <div className="info-text">
                                                <span><strong>Medium</strong></span>
                                                <a href="https://sararellano.medium.com/"> https://sararellano.medium.com/ </a>
                                            </div>
                                        </div>
                                        <div className=" info-block wow ">
                                            <div className="info-icon hvr-trim"><FontAwesomeIcon icon={faMapMarker} /> </div>
                                            <div className="info-text">
                                                <span><strong>Ubicación</strong></span>
                                                Madrid, España
                                            </div>
                                        </div>
                                    </Col>
                                </ScrollAnimation>
                            </Row>
                            <Row className="description">
                                <p>Soy Sara Arellano, programadora <strong>Front-end</strong> especializada en <strong> JavaScript Vanilla, CSS con SASS  </strong>como preprocesador y <strong>Drupal</strong>.</p>
								<p>Soy una apasionada por aprender nuevas funcionalidades y por seguir retándome a mi misma.</p>
								<p>Siempre haciendo que mi trabajo sea escalable y genérico para que pueda ser reutilizado. También, por supuesto, pensando siempre en mobile first, en diseños responsive y en mejorar la UX.</p>
                                <p>Me gusta mucho poder ayudar a mis compañeros y, a la vez, aprender de ellos.</p>
                                <br />
                                <p>A parte de la programación, mis otros hobbies son los animales y mi clarinete.</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SobreMi;
