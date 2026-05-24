import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import jsFisio from '../images/jsfisio.jpg';
import GEAR from '../images/gear-audiovisuals.png';
import navalpie from '../images/navalpie.png';

import '../style/Portfolio.css';
import '../style/index.css';
import '../style/Titulo.css';

const PROJECTS = [
    {
        key: 'js',
        img: jsFisio,
        alt: 'JS Fisioterapia',
        title: 'JS Fisioterapia',
        descKey: 'js',
        descDefault: 'Physiotherapy service at DreamFit gyms.',
        url: 'http://www.jsfisioterapia.com/',
        chips: ['Drupal', 'SASS', 'JS Vanilla'],
    },
    {
        key: 'gear',
        img: GEAR,
        alt: 'Gear Audiovisuals',
        title: 'Gear Audiovisuals',
        descKey: 'gear',
        descDefault: 'Photography & audiovisual company website.',
        url: 'http://gear-audiovisuals.es',
        chips: ['SASS', 'HTML5', 'CSS3'],
    },
    {
        key: 'navalpie',
        img: navalpie,
        alt: 'Navalpie Podología',
        title: 'Navalpie',
        descKey: 'navalpie',
        descDefault: 'Podiatry clinic — Navalcarnero.',
        url: 'https://navalpie.com',
        chips: ['WordPress', 'CSS3', 'JS'],
    },
];

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio" id="portfolio">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="portfolio" data-value="title">Portfolio</h4>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="portfolio-grid">
                                    {PROJECTS.map((project) => (
                                        <a
                                            key={project.key}
                                            className="portfolio-card"
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="portfolio-card-img"
                                                src={project.img}
                                                alt={project.alt}
                                            />
                                            <div className="portfolio-card-body">
                                                <h3 className="portfolio-card-title">{project.title}</h3>
                                                <p
                                                    className="portfolio-card-desc"
                                                    data-section="portfolio"
                                                    data-value={project.descKey}
                                                >
                                                    {project.descDefault}
                                                </p>
                                                <div className="portfolio-card-footer">
                                                    <div className="chip-row">
                                                        {project.chips.map(c => (
                                                            <span key={c} className="chip">{c}</span>
                                                        ))}
                                                    </div>
                                                    <span className="portfolio-link">
                                                        Visit ↗
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Portfolio;
