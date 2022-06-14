import React, { Component } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import Titulo from './Titulo';

import '../style/Skills.css';
import '../style/index.css';


class Skills extends Component {
    // constructor(){
    //     super();

    // }


    render() {
        return(
            <div className="skills" id="skills">
                <Titulo titleText="skills" />
                <Container>
                    <Row>
                        <Col> <h3>Conocimientos</h3></Col>
                    </Row>
                    <Row>
					<Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={100} label={"HTML/CSS"} className="bar1" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={100} label={"Responsive Design"} className="bar2" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={75} label={"NPM"} className="bar3" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={90} label={"SASS preprocessor"} className="bar4" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={70} label={"Node.js"} className="bar5" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={60} label={"JS Vanilla"} className="bar6" />
                            </ScrollAnimation>
                        </Col>
					</Row>
					<Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={75} label={"Gulp"} className="bar7" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={30} label={"PHP"} className="bar8" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={70} label={"Drupal"} className="bar9" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={85} label={"Git"} className="bar10" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col> <h3>Soft-Skills</h3></Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={100} label={"Trabajo en equipo"} className="bar9" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={100} label={"Creatividad"} className="bar10" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={100} label={"Atención al detalle"} className="bar11" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={100} label={"Resolver problemas"} className="bar12" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInLeft">
                                <ProgressBar now={100} label={"Comunicación"} className="bar13" />
                            </ScrollAnimation>
                        </Col>
                        <Col md={2}></Col>
                        <Col sm={12} md={5}>
                            <ScrollAnimation animateIn="slideInRight">
                                <ProgressBar now={100} label={"Aprender rápidamente"} className="bar14" />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Skills;
