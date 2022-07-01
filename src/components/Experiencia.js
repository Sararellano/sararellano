import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

// import Titulo from './Titulo';

import '../style/Experiencia.css';
import '../style/index.css';
import '../style/Titulo.css';

class Experiencia extends Component {
    // constructor(){
    //     super();

    // }

    render() {
        return (
            <div className="experiencia" id="experiencia">
				{/* <Titulo titleText="experiencia" /> */}
				<Container>
					<Row>
						<Col>
							<ScrollAnimation animateIn="fadeIn">
								<div className="title">
									<h4 data-section="experience" data-value="title"> Estudios </h4>
								</div>
							</ScrollAnimation>
						</Col>
					</Row>
				</Container>
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="slideInRight">
                                <div className="experiencia-card">
                                    <strong data-section="experience" data-value="exp1title">Frontend y Drupal Developer Junior</strong> - <a href="https://selectra.info/" rel="noopener noreferrer" target="_blank">Selectra</a>
                                    <br />
                                    <span data-section="experience" data-value="exp1date"><em>Octubre 2019 - Actualidad</em></span>
									<br />
									<span data-section="experience" data-value="exp1descrp1"> Cuando entré en Selectra no sabía nada sobre Drupal y después de unos pocos días ya estaba creando componentes en Twig, JS Vanilla y SASS. También he contribuido en la creación de un Design System propio de Selectra donde usamos BEM, Atomic Design y todos los componentes son reutilizables.</span>
									<br />
									<span data-section="experience" data-value="exp1descrp2"> He implementado medidas para mejorar el SEO y con mi equipo hemos conseguido que nuestras páginas no bajen del 90/100.
									También soy responsable de 1 junior developer y estoy enseñando los principios de la programación a compañeros Service Engineers.
									Además de la programación, participo en entrevistas para captar nuevos programadores y en la creación de ejercicios para comprobar el nivel de los mismos.
                                    <strong>Technical Stack:</strong> SASS, JS vanilla, Gulp, NPM, Node.js, Twig, Pug, Drupal, PHP (basic), Docker (basic), Webpack, Sketch, inVision, Figma  </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="slideInLeft">
                                <div className="experiencia-card">
                                    <strong>Web Developer</strong> - Freelance
                                    <br />
                                    <span><em data-section="experience" data-value="exp2date">Junio 2019 - Actualidad</em></span>
                                    <br />
                                    <span data-section="experience" data-value="exp2descrp">Realización y diseño de varias páginas webs, como <a href="https://navalpie.com/" rel="noopener noreferrer" target="_blank">Navalpie</a> </span>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn='slideInRight'>
                                <div className="experiencia-card">
                                    <strong>Accout Manager</strong> - Waavi Studios. S.L
                                    <br />
                                    <span><em data-section="experience" data-value="exp3date">Noviembre 2018 - Abril 2019</em></span>
                                    <br />
                                    <span data-section="experience" data-value="exp3descrp">Quería saber más acerca del trabajo comercial y me dieron la oportunidad de comenzar como account manager. Me dediqué a la captación de nuevos clientes y del mantenimiento de los actuales. Al ser programadora, comprendía el lenguaje y las necesidades delos programadores y conseguí "traducir el lenguaje" del cliente en acciones reales para los programadores.</span>
                                </div>
                            </ScrollAnimation>
                        </Col>
					</Row>
					<Row>
                        <Col>
                            <ScrollAnimation animateIn='slideInLeft'>
                                <div className="experiencia-card">
                                    <strong>Frontend Developer Junior</strong> - Waavi Studios. S.L
                                    <br />
                                    <span><em data-section="experience" data-value="exp4date">Febrero 2018 - Noviembre 2018</em></span>
                                    <br />
                                    <span data-section="experience" data-value="exp4descrp">Realización de páginas webs usando <strong>React.js</strong> y <strong>Vue.js</strong>, CSS con SASS y FlexBox, Yarn, Git, Node.js, Sketch, Zeplin y DialogFlow para crear bots conversacionales. </span>
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
