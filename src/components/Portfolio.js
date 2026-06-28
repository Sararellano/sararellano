import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import selectraKelwatt from '../images/portfolio/selectra-kelwatt.webp';
import selectraInfo from '../images/portfolio/selectra-info.webp';
import balizas from '../images/portfolio/balizas-v16.webp';
import personalHistorian from '../images/portfolio/personal-historian.webp';
import aiJobAgent from '../images/portfolio/ai-job-agent.webp';

import '../style/Portfolio.css';
import '../style/index.css';
import '../style/Titulo.css';

const PROJECTS = [
    {
        key: 'selectra-kelwatt',
        img: selectraKelwatt,
        alt: 'Kelwatt.fr — Selectra',
        title: 'Kelwatt.fr',
        descKey: 'selectra-kelwatt',
        descDefault: 'Core Web Vitals optimization: PageSpeed 57→100. Frontend on flat-file CMS (Blade, Alpine.js, Tailwind v4).',
        chips: ['Tailwind v4', 'Alpine.js', 'Core Web Vitals', 'Blade'],
        status: 'live',
        links: [
            { labelKey: 'visit', labelDefault: 'Visit ↗', url: 'https://kelwatt.fr' },
        ],
    },
    {
        key: 'selectra-info',
        img: selectraInfo,
        alt: 'Selectra.info',
        title: 'Selectra.info',
        descKey: 'selectra-info',
        descDefault: 'Corporate site within Selectra ecosystem (80+ sites). UI design by me (layout, components, and visual experience). Design System, performance, sustained maintenance.',
        chips: ['UI Design', 'Design System', 'SASS/SCSS', 'Drupal', 'Lighthouse 90+'],
        status: 'live',
        links: [
            { labelKey: 'visit', labelDefault: 'Visit ↗', url: 'https://selectra.info' },
        ],
    },
    {
        key: 'balizas',
        img: balizas,
        alt: 'Balizas V16 Spain map',
        title: 'Balizas V16 — Spain',
        descKey: 'balizas',
        descDefault: 'Real-time map of active V16 emergency beacons in Spain. Region filters, clustering, 60s refresh. Featured on Tiny Tool Town.',
        chips: ['Next.js 15', 'React 19', 'TypeScript', 'MapLibre GL', 'Tailwind 4'],
        status: 'live',
        links: [
            { labelKey: 'visit', labelDefault: 'Visit ↗', url: 'https://balizas-v16-pink.vercel.app/' },
            { labelKey: 'tinytooltown', labelDefault: 'Tiny Tool Town ↗', url: 'https://www.tinytooltown.com/tools/balizasspain/' },
        ],
    },
    {
        key: 'personal-historian',
        img: personalHistorian,
        alt: 'Personal Historian',
        title: 'Personal Historian',
        descKey: 'personal-historian',
        descDefault: 'AI-guided journaling: one reflective question per day that builds a personal biography. Private by design.',
        chips: ['Next.js', 'React', 'TypeScript', 'Claude API', 'Vercel'],
        status: 'in-progress',
        links: [
            { labelKey: 'visit', labelDefault: 'Visit ↗', url: 'https://ai-personal-historian.vercel.app/' },
        ],
    },
    {
        key: 'ai-job-agent',
        img: aiJobAgent,
        alt: 'AI Job Agent',
        title: 'AI Job Agent',
        descKey: 'ai-job-agent',
        descDefault: 'Fullstack SaaS that generates tailored CV and cover letter from a job posting URL or description. Prompt engineering with Claude + OpenAI.',
        chips: ['Next.js', 'React', 'TypeScript', 'Claude API', 'OpenAI API'],
        status: 'in-progress',
        links: [
            { labelKey: 'visit', labelDefault: 'Visit ↗', url: 'https://ai-job-agent-chi.vercel.app/' },
        ],
    },
];

class Portfolio extends Component {
    renderStatusBadge(status) {
        if (status === 'in-progress') {
            return (
                <span
                    className="portfolio-badge portfolio-badge--in-progress"
                    data-section="portfolio"
                    data-value="status-in-progress"
                >
                    In progress
                </span>
            );
        }

        if (status === 'live') {
            return (
                <span
                    className="portfolio-badge portfolio-badge--live"
                    data-section="portfolio"
                    data-value="status-live"
                >
                    Live
                </span>
            );
        }

        return null;
    }

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
                                        <article key={project.key} className="portfolio-card">
                                            <div className="portfolio-card-media">
                                                <img
                                                    className="portfolio-card-img"
                                                    src={project.img}
                                                    alt={project.alt}
                                                />
                                                {this.renderStatusBadge(project.status)}
                                            </div>
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
                                                    <div className="portfolio-links">
                                                        {project.links.map((link) => (
                                                            <a
                                                                key={link.url}
                                                                className="portfolio-link"
                                                                href={link.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                data-section="portfolio"
                                                                data-value={link.labelKey}
                                                            >
                                                                {link.labelDefault}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
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
