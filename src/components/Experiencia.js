import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import '../style/Experiencia.css';
import '../style/index.css';
import '../style/Titulo.css';

class Experiencia extends Component {
    render() {
        return (
            <div className="experiencia" id="experiencia">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="experience" data-value="title">Experience</h4>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="timeline">

                        {/* Selectra — Current Stack */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">
                                            <span data-section="experience" data-value="exp1title">Frontend Developer</span>
                                            {' · '}
                                            <a href="https://selectra.info/" target="_blank" rel="noopener noreferrer">Selectra</a>
                                        </h4>
                                        <span className="timeline-date" data-section="experience" data-value="exp1date">Oct 2019 — Present</span>
                                    </div>
                                    <div className="timeline-body">
                                        <ul data-section="experience" data-value="exp1bullets">
                                            <li>I worked on the frontend development of internal CMS powering <strong>80+ sites</strong> across <strong>50+ departments</strong> on flat-file architecture (Blade, Alpine.js, Tailwind v4)</li>
                                            <li><strong>Core Web Vitals</strong>: lifted PageSpeed from <strong>57 → 100</strong> on key sites (kelwatt.fr and others)</li>
                                            <li>Python script that batch-injected width/height into thousands of Blade templates, eliminating structural layout shift</li>
                                            <li>Git pre-commit hook (via <code>prepare</code> script) to prevent CLS regressions</li>
                                            <li>External API integrations: <strong>Anthropic Claude API</strong>, Google Search Console, Semrush</li>
                                            <li>Observability: Sentry, Datadog; testing: Playwright; linting: Laravel Pint</li>
                                            <li>Mentored <strong>5 junior developers</strong>; led technical interviews and designed evaluation exercises</li>
                                        </ul>
                                        <div className="chip-row">
                                            {['Laravel 12', 'Alpine.js', 'Tailwind v4', 'Blade', 'PHP 8.3', 'Docker', 'GitHub Actions', 'Python'].map(t => (
                                                <span key={t} className="chip">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Selectra — Agrippa / Drupal era */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">
                                            <span data-section="experience" data-value="exp2title">Frontend &amp; Drupal Developer</span>
                                            {' · '}
                                            <a href="https://selectra.info/" target="_blank" rel="noopener noreferrer">Selectra — Agrippa</a>
                                        </h4>
                                        <span className="timeline-date" data-section="experience" data-value="exp2date">Oct 2019 — 2024</span>
                                    </div>
                                    <div className="timeline-body">
                                        <ul data-section="experience" data-value="exp2bullets">
                                            <li>Co-built Selectra's in-house <strong>Design System</strong> from scratch following Atomic Design (atoms → templates) using SASS/SCSS, Twig and Vanilla JS</li>
                                            <li>Custom <strong>Drupal 10 module</strong> development in PHP 8.3 (services, DI, events) and Twig theming with Gulp + Webpack build pipelines</li>
                                            <li>Sustained <strong>Lighthouse score ≥ 90/100</strong> across all owned pages</li>
                                            <li>E2E testing on Acquia Cloud + multi-arch Docker (x86/ARM)</li>
                                        </ul>
                                        <div className="chip-row">
                                            {['Drupal 10', 'PHP 8.3', 'SASS/SCSS', 'Twig', 'Atomic Design', 'BEM', 'Acquia Cloud'].map(t => (
                                                <span key={t} className="chip">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Waavi */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">
                                            <span data-section="experience" data-value="exp3title">Junior Frontend Developer</span>
                                            {' · '}
                                            Waavi Studios
                                        </h4>
                                        <span className="timeline-date" data-section="experience" data-value="exp3date">Feb 2018 — Nov 2018</span>
                                    </div>
                                    <div className="timeline-body">
                                        <ul data-section="experience" data-value="exp3bullets">
                                            <li>Web projects with <strong>React.js</strong>, Node.js, Yarn and SASS. Delivered the ESME landing page among other work</li>
                                            <li>First experience building conversational bots with <strong>DialogFlow</strong></li>
                                        </ul>
                                        <div className="chip-row">
                                            {['React.js', 'Vue.js', 'Node.js', 'SASS', 'DialogFlow', 'Git'].map(t => (
                                                <span key={t} className="chip">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>

                    {/* Featured achievement */}
                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="achievement-card">
                            <p className="achievement-label" data-section="experience" data-value="achievement-label">
                                Featured Achievement
                            </p>
                            <h4 className="achievement-title" data-section="experience" data-value="achievement-title">
                                Core Web Vitals Optimization — Selectra CMS · 2025–2026
                            </h4>
                            <div className="achievement-body">
                                <ul data-section="experience" data-value="achievement-desc">
                                    <li><strong>Context:</strong> PageSpeed stuck at ~57/100 on key sites (kelwatt.fr), dragged down by structural CLS from images without declared dimensions</li>
                                    <li><strong>Solution:</strong> Python script that walked the monorepo and batch-processed thousands of Blade templates, injecting width/height on every {'<img>'} tag; complemented with manual above-the-fold fixes</li>
                                    <li><strong>Prevention:</strong> Git pre-commit hook via <code>prepare</code> script in package.json to block regressions</li>
                                    <li><strong>Outcome:</strong> PageSpeed <span className="achievement-number">57 → 100</span>. Approach is replicable across the full monorepo</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Container>
            </div>
        );
    }
}

export default Experiencia;
