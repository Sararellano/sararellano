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
                                    <strong>Frontend y Drupal developer junior</strong> - <a href="https://selectra.info/" rel="noopener noreferrer" target="_blank">Selectra</a>
                                    <br />
                                    <span><em>Octubre 2019 - Actualidad</em></span>
                                    <br />
                                    <span>Uso de un Design System propio con el uso de PUG, SASS y JS Vanilla. Otros: Drupal, Twig, PHP (basic), Docker (basic), NPM, Webpack, Sketch, inVision, Figma  </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="slideInLeft">
                                <div className="experiencia-card">
                                    <strong>Developer</strong> - Freelance
                                    <br />
                                    <span><em>Junio 2019 - Actualidad</em></span>
                                    <br />
                                    <span>Realización y diseño de varias páginas webs, como <a href="https://navalpie.com/" rel="noopener noreferrer" target="_blank">Navalpie</a> </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn='slideInRight'>
                                <div className="experiencia-card">
                                    <strong>Frontend developer junior</strong> - Waavi Studios. S.L
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
