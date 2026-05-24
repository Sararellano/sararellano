import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import '../style/Inicio.css';
import '../style/index.css';

import downloadCV_EN from '../images/CV-SaraArellano-EN.pdf';
import downloadCV_ES from '../images/CV-SaraArellano-ES.pdf';
import flagEN from '../images/gb.svg';
import flagES from '../images/es.svg';

class Inicio extends Component {
    render() {
        return (
            <div className="hero" id="inicio">
                <div className="hero-content">
                    <span className="hero-greeting">Hello, World! I'm</span>
                    <h1 className="hero-name">&lt; Sara Arellano /&gt;</h1>
                    <h2 className="hero-role">
                        Senior Frontend Developer&nbsp;
                        <span className="role-accent">/</span>
                        &nbsp;Full-Stack capable
                    </h2>
                    <p className="hero-tagline">Remote · Seville, Spain</p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">57→100</span>
                            <span className="stat-label">PageSpeed score</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">80+</span>
                            <span className="stat-label">Sites maintained</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Departments served</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Devs mentored</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a className="btn-primary" href={downloadCV_EN} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDownload} />
                            <img src={flagEN} alt="EN" className="btn-flag" />
                            CV EN
                        </a>
                        <a className="btn-secondary" href={downloadCV_ES} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDownload} />
                            <img src={flagES} alt="ES" className="btn-flag" />
                            CV ES
                        </a>
                        <a
                            className="btn-icon"
                            href="https://github.com/sararellano"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            className="btn-icon"
                            href="https://linkedin.com/in/sararellano"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            className="btn-icon"
                            href="https://sararellano.medium.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Medium"
                        >
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;
