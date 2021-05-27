import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Titulo from './Titulo';

import '../style/Experiencia.css';
import '../style/index.css';


class Experiencia extends Component {
    // constructor(){
    //     super();

    // }





    render() {
        return (
            <div className="experiencia" id="experiencia">
                <Titulo titleText="experiencia" />
                <Container>

                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="slideInRight">
                                <div className="experiencia-card">
                                    <strong>Programadora frontend junior</strong> - Selectra
                                    <br />
                                    <span><em>Octubre 2019 - Actualidad</em></span>
                                    <br />
                                    <span>Uso de un Design System propio con el uso de PUG, SASS y JS Vanilla. Otros: Twig, Drupal, Docker, Sketch, inVision, NPM - <a href="https://selectra.info/" rel="noopener noreferrer" target="_blank">Selectra</a> </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="slideInLeft">
                                <div className="experiencia-card">
                                    <strong>Programadora frontend</strong> - Freelance
                                    <br />
                                    <span><em>Junio 2019 - Actualidad</em></span>
                                    <br />
                                    <span>Realización de varias páginas webs, como <a href="http://www.jsfisioterapia.com/" rel="noopener noreferrer" target="_blank">Js Fisioterapia</a> </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn='slideInRight'>
                                <div className="experiencia-card">
                                    <strong>Programadora frontend junior</strong> - Waavi Studios. S.L
                                    <br />
                                    <span><em>Febrero 2018 - Noviembre 2018</em></span>
                                    <br />
                                    <span>Realización de páginas webs usando <strong>React.js</strong> y <strong>Vue.js</strong>, CSS con SASS y FlexBox, Git, Node.js, Sketch, Zeplin y DialogFlow para crear bots conversacionales. </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Experiencia;
