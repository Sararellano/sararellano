import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Titulo from './Titulo';
import jsFisio from '../images/jsfisio.jpg'
import GEAR from '../images/gear-audiovisuals.png'
import navalpie from '../images/navalpie.png'

import '../style/Portfolio.css';
import '../style/index.css';


class Portfolio extends Component {
    // constructor(){
    //     super();

    // }

    render() {
        return (
            <div className="portfolio" id="portfolio">
                <Titulo titleText="portfolio" />
                <Container>
                    <Row>
                        <Col className="portfolio-col">
                            <div className="ih-item square colored effect4">
                                <a href="http://www.jsfisioterapia.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="img"><img src={jsFisio} alt="Fisioterapia gimnasios Dreamfit" /></div>
                                    <div className="mask1"></div>
                                    <div className="mask2"></div>
                                    <div className="info">
                                        <h3>JS Fisioterapia</h3>
                                        <p>Fisioterapia en los gimnasios DreamFit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="portfolio-col">
                            <div className="ih-item square colored effect4">
                                <a href="http://gear-audiovisuals.es" target="_blank" rel="noopener noreferrer">
                                    <div className="img"><img src={GEAR} alt="Empresa audiovisual" /></div>
                                    <div className="mask1"></div>
                                    <div className="mask2"></div>
                                    <div className="info">
                                        <h3>Gear Audiovisuals</h3>
                                        <p>Fotografía - Empresa Gear Audiovisuals</p>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col className="portfolio-col">
                            <div className="ih-item square colored effect4">
                                <a href="https://navalpie.com" target="_blank" rel="noopener noreferrer">
                                    <div className="img"><img src={navalpie} alt="clinica podologica Navalpie" /></div>
                                    <div className="mask1"></div>
                                    <div className="mask2"></div>
                                    <div className="info">
                                        <h3>Navalpie</h3>
                                        <p>Navalpie - Clínica podología Navalcarnero</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Portfolio;
