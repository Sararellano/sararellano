import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Inicio from './Inicio'
import SobreMi from './SobreMi'
import Skills from './Skills'
import Estudios from './Estudios'
import Experiencia from './Experiencia'
import Portfolio from './Portfolio'
import Contacto from './Contacto'


import '../style/Menu.css';
import '../style/index.css';


class Menu extends Component {
    // constructor(){
    //     super();

    // }


    showSettings (event) {
        event.preventDefault();
    }


    render() {
        return(
            <div>
                <Row>
                    <Col className="top-nav">
                        <input id="menu-toggle" type="checkbox" />
                        <label className="menu-button-container" htmlFor="menu-toggle">
                            <div className="menu-button" />
                        </label>
                        <ul className="menu">
                            <li><a href="#Inicio"><span>Inicio</span></a></li>
                            <li><a href="#SobreMi"><span>Sobre mi</span></a></li>
                            <li><a href="#Skills"><span>Skills</span></a></li>
                            <li><a href="#Estudios"><span>Estudios</span></a></li>
                            <li><a href="#Experiencia"><span>Experiencia</span></a></li>
                            <li><a href="#Portfolio"><span>Portfolio</span></a></li>
                            <li><a href="#Contacto"><span>Contacto</span></a></li>
                        </ul>
                    </Col>
                </Row>



                <div className="content">
                    <Inicio />
                    <SobreMi />
                    <Skills />
                    <Estudios />
                    <Experiencia />
                    <Portfolio />
                    <Contacto />
                </div>
            </div>
        );
    }
}

export default Menu;