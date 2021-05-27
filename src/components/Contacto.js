import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import Titulo from './Titulo';

import '../style/Contacto.css';
import '../style/index.css';


class Contacto extends Component {
    // constructor(){
    //     super();

    // }

    render() {
        return(
            <div className="contacto" id="contacto">
                <Titulo titleText="contacto" />
                <Container>
                    <Row>
                        <Col>
                            <h5>No dudes en contactar conmigo para cualquier duda o  cuestión</h5>
                        </Col>
                    </Row>
                    <Row className="contacto-content">
                        <ScrollAnimation animateIn="slideInLeft">
                            <Col className="info-block wow">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faPhone} /></div>
                                <div className="info-text">
                                    <span><strong>Móvil</strong></span>
                                    <a href="tel: +34663176344">+34 663176344</a>
                                </div>
                            </Col>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="slideInUp">
                            <Col className="info-block wow ">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faEnvelope} /></div>
                                <div className="info-text">
                                    <span><strong>Email</strong></span>
                                    <a href="mailto: sararellano@gmail.com">sararellano@gmail.com</a>
                                </div>
                            </Col>
                        </ScrollAnimation>
                        {/* <ScrollAnimation animateIn="slideInRight">
                            <Col className="info-block wow">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faGlobe} /></div>
                                <div className="info-text">
                                    <span><strong>Web</strong></span>
                                    <a href="https://sararellano.github.io/sararellano">sararellano.github.io/sararellano</a>
                                </div>
                            </Col>
                        </ScrollAnimation> */}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contacto;
