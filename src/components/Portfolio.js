import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Titulo from './Titulo';
import jsFisio from '../images/jsfisio.jpg'
import GEAR from '../images/gear-audiovisuals.jpg'

import '../style/Portfolio.css';
import '../style/index.css';


class Portfolio extends Component {
    // constructor(){
    //     super();

    // }

    render() {
        return(
            <div className="Portfolio" id="Portfolio">
                <Titulo titleText="Portfolio" />
                <Container>
                    <Row>
                        <Col className="Portfolio-col">
                            <div className="ih-item square colored effect4">
                                <a href="http://www.jsfisioterapia.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="img"><img src={jsFisio} alt="img" /></div>
                                    <div className="mask1"></div>
                                    <div className="mask2"></div>
                                    <div className="info">
                                        <h3>JS Fisioterapia</h3>
                                        <p>Fisioterapia en los gimnasios DreamFit</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        
                        <Col className="Portfolio-col">
                            <div className="ih-item square colored effect4">
                                <a href="http://gear-audiovisuals.es" target="_blank" rel="noopener noreferrer">
                                    <div className="img"><img src={GEAR} alt="img" /></div>
                                    <div className="mask1"></div>
                                    <div className="mask2"></div>
                                    <div className="info">
                                        <h3>Gear Audiovisuals</h3>
                                        <p>Fotografía - Empresa Gear Audiovisuals</p>
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