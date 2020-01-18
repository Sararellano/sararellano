import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import '../style/Titulo.css';
import '../style/index.css';


class Titulo extends Component {
    // constructor(){
    //     super();

    // }





    render() {
        return(
            <Container>
               <Row>
                   <Col>
                    <ScrollAnimation animateIn="fadeIn">
                            <div className="title">
                                <h4> {this.props.titleText} </h4>
                            </div>
                        </ScrollAnimation>
                   </Col>
               </Row>
            </Container>
        );
    }
}

Titulo.propTypes = {
    titleText: PropTypes.string
}

export default Titulo;