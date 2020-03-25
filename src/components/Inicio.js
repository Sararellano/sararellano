import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../style/Inicio.css';
import '../style/index.css';

import downloadCV from '../images/CV-SaraArellano.pdf'


class Inicio extends Component {
    // constructor(){
    //     super();

    // }





    render() {
        return(
            <div className="Inicio" id="Inicio">
                <Row>
                    <div className="main">
                        <section id="home" className="home">
                            <div className="home-overlay"></div>
                            <div className="home-content">
                                <div className="home-intro">
                                    <Col>
                                        <h2>Hello World! I'm</h2>
                                        <h1>Sara Arellano</h1>
                                        <h3>Frontend Developer</h3>
                                        <a className="download-link download-btn" href={downloadCV} target="_blank" rel="noopener noreferrer">Download CV</a>
                                        <div className="scroll-down">
                                            <a href="#SobreMi">
                                                <div className="scroll-icon">
                                                    <div className="chevron"></div>
                                                    <div className="chevron"></div>
                                                    <div className="chevron"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </section>
                    </div>
                </Row>                
            </div>
        );
    }
}

export default Inicio;