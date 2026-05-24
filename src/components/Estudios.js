import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import '../style/Estudios.css';
import '../style/index.css';
import '../style/Titulo.css';

const EDUCATION = [
    {
        key: 'ci',
        title: 'CI/CD with GitHub Actions',
        institution: 'Online training',
        year: '2022',
    },
    {
        key: 'bootcamp',
        title: 'Web Development Bootcamp',
        institution: 'Udemy (certified)',
        year: '2021',
    },
    {
        key: 'js-adv',
        title: 'Advanced JavaScript',
        institution: 'Telefónica Universitas',
        year: '2019',
    },
    {
        key: 'mckinsey',
        title: 'Frontend Development — Higher programme (640h)',
        institution: 'Netmind / McKinsey',
        year: '2017–2018',
    },
    {
        key: 'degree',
        title: 'BA in Advertising & Public Relations',
        institution: 'Universidad Rey Juan Carlos I, Madrid',
        year: '2007–2013',
    },
];

class Estudios extends Component {
    render() {
        return (
            <div className="estudios" id="estudios">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="studies" data-value="title">Education</h4>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="education-list">
                                    {EDUCATION.map((item) => (
                                        <div className="education-item" key={item.key}>
                                            <div className="education-text">
                                                <strong>{item.title}</strong>
                                                <em>{item.institution}</em>
                                            </div>
                                            <span className="education-year">{item.year}</span>
                                        </div>
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

export default Estudios;
