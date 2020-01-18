import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faCalendar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Titulo from './Titulo'


import '../style/SobreMi.css';
import '../style/index.css';


class SobreMi extends Component {
    // constructor(){
    //     super();

    // }





    render() {
        return(
            <div className="SobreMi" id="SobreMi">
                <Titulo titleText="Sobre Mi" />  
                <Container>
                    <Row className="SobreMi-content">
                        <ScrollAnimation animateIn="slideInLeft">
                            <Col sm={12} md={3}>
                                <div className="profile-pic"></div>
                            </Col>
                        </ScrollAnimation>
                        <Col sm={12} md={9}>
                            <Row className="SobreMi-info">
                                <ScrollAnimation animateIn="slideInRight">
                                    <Col>
                                        <div className="info-block wow">
                                            <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faEnvelope} /></div>
                                            <div className="info-text">
                                                <span><strong>Email</strong></span>
                                                sararellano@gmail.com
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
                                            <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faCalendar} /></div>
                                            <div className="info-text">
                                                <span><strong>Nacimiento</strong></span>
                                                28 Octubre 1990
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
                                <p>Soy Sara Arellano, programadora <strong>Front-end</strong>, especializada y con experiencia en <strong>React.js</strong> y <strong>Vue.js</strong></p>
                                <p>Soy una apasionada por aprender nuevas funcionalidades y por seguir retándome a mi misma.</p>
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