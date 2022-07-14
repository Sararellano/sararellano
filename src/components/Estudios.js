import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

// import Titulo from './Titulo';

import '../style/Estudios.css';
import '../style/index.css';
import '../style/Titulo.css';

import bootcamp from '../images/certificadoUdemy.jpeg'


class Estudios extends Component {
    // constructor(){
    //     super();

    // }


    render() {
        return(
			<div className="estudios" id="estudios">
				<Container>
					<Row>
						<Col>
							<ScrollAnimation animateIn="fadeIn">
								<div className="title">
									<h4 data-section="studies" data-value="title"> Estudios </h4>
								</div>
							</ScrollAnimation>
						</Col>
					</Row>
				</Container>
                {/* <Titulo titleText="estudios" /> */}
                <Container>
                    <Col>
                        <Row className="estudios-description">
                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="degree"><strong>Licenciatura Publicidad y RRPP</strong> - <em>Universidad Rey Juan Carlos I, Madrid</em></span>
                                    2007 - 2013
                                </div>
                            </div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="mckinsey"><strong>Programación Front-end</strong> - Programa Superior <em>Netmind / Avalado por McKinsey (640h)</em></span>
                                    2017 - 2018
                                </div>
                            </div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="react"><strong>Curso React.js</strong> - <em>Online</em></span>
                                    2019
                                </div>
                            </div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="vue"><strong>Curso Vue.js</strong> - <em>Online</em></span>
                                    2019
                                </div>
                            </div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="js-adv"><strong>Curso JavaScript Avanzado</strong> - <em>Telefónica Universitas</em></span>
                                    2019
                                </div>
                            </div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="js-vanilla"><strong>Varios cursos sobre JS Vanilla</strong> - <em>Udemy</em></span>
                                    2020
                                </div>
							</div>

                            <div className="col-sm-12 info-block wow fadeInRight">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <a href={bootcamp} target="_blank" rel="noopener noreferrer"><span data-section="studies" data-value="bootcamp"><strong>Web Development Bootcamp</strong> - <em>Udemy</em></span></a>
                                    2021
                                </div>
							</div>

                            <div className="col-sm-12 info-block wow fadeInLeft">
                                <div className="info-icon hvr-trim"> <FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                                <div className="info-text">
                                    <span data-section="studies" data-value="ci"><strong>Github Actions - Continuos Integration (CI)</strong> - <em>Youtube</em></span>
                                    2022
                                </div>
                            </div>

                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Estudios;