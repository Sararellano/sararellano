import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Inicio from './Inicio';
import SobreMi from './SobreMi';
import Skills from './Skills';
import Estudios from './Estudios';
import Experiencia from './Experiencia';
import Portfolio from './Portfolio';
import Contacto from './Contacto';

import '../style/Menu.css';
import '../style/index.css';

import flagES from '../images/es.svg';
import flagEN from '../images/gb.svg';

class Menu extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="top-nav">
                        <span className="nav-logo">&lt;SA/&gt;</span>
                        <input id="menu-toggle" type="checkbox" />
                        <label className="menu-button-container" htmlFor="menu-toggle">
                            <div className="menu-button" />
                        </label>
                        <ul className="menu">
                            <li><a href="#inicio" data-section="menu" data-value="inicio">Intro</a></li>
                            <li><a href="#sobreMi" data-section="menu" data-value="sobre-mi">About</a></li>
                            <li><a href="#skills" data-section="menu" data-value="skills">Skills</a></li>
                            <li><a href="#experiencia" data-section="menu" data-value="experiencia">Experience</a></li>
                            <li><a href="#estudios" data-section="menu" data-value="estudios">Education</a></li>
                            <li><a href="#portfolio" data-section="menu" data-value="portfolio">Portfolio</a></li>
                            <li><a href="#contacto" data-section="menu" data-value="contacto">Contact</a></li>
                            <li className="menu__flags" id="flags">
                                <div className="menu__flags--wrapper" data-language="es">
                                    <img src={flagES} alt="Spanish" />
                                </div>
                                <div className="menu__flags--wrapper js-active" data-language="en">
                                    <img src={flagEN} alt="English" />
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className="content">
                    <Inicio />
                    <SobreMi />
                    <Skills />
                    <Experiencia />
                    <Estudios />
                    <Portfolio />
                    <Contacto />
                </div>
            </div>
        );
    }
}

export default Menu;
