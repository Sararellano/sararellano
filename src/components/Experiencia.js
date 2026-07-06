import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import '../style/Experiencia.css';
import '../style/index.css';
import '../style/Titulo.css';

const SELECTRA_CHIPS = [
    'Laravel 12',
    'Alpine.js',
    'Tailwind v4',
    'Blade',
    'PHP 8.3',
    'Docker',
    'GitHub Actions',
    'Python',
    'Drupal 10',
    'SASS/SCSS',
    'Twig',
    'Atomic Design',
    'BEM',
    'Acquia Cloud',
    'Playwright',
    'Sentry',
    'Datadog',
];

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

                        {/* Selectra — unified */}
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="timeline-item">
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h4 className="timeline-title">
                                            <span data-section="experience" data-value="selectra-title">Frontend Developer — Selectra</span>
                                        </h4>
                                        <span className="timeline-date" data-section="experience" data-value="selectra-date">Oct 2019 — June 2026</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="timeline-company">
                                            <a href="https://selectra.info/" target="_blank" rel="noopener noreferrer">selectra.info</a>
                                        </p>

                                        <h5 className="timeline-phase" data-section="experience" data-value="selectra-phase1">
                                            Laravel CMS &amp; Performance
                                        </h5>
                                        <ul data-section="experience" data-value="selectra-bullets1">
                                            <li>Lead frontend development of internal <strong>CMS</strong> powering <strong>80+ sites</strong> across <strong>50+ departments</strong> on flat-file architecture (<strong>Blade</strong>, <strong>Alpine.js</strong>, <strong>Tailwind v4</strong>)</li>
                                            <li><strong>Core Web Vitals</strong>: lifted <strong>PageSpeed</strong> from <strong>57 → 100</strong> on key sites (<strong>kelwatt.fr</strong> and others)</li>
                                            <li><strong>Python script</strong> that batch-injected <strong>width/height</strong> into thousands of <strong>Blade templates</strong>, eliminating structural <strong>layout shift</strong></li>
                                            <li><strong>Git pre-commit hook</strong> (via <code>prepare</code> script) to prevent <strong>CLS regressions</strong></li>
                                            <li>External API integrations: <strong>Anthropic Claude API</strong>, <strong>Google Search Console</strong>, <strong>Semrush</strong></li>
                                            <li><strong>Observability</strong>: Sentry, Datadog; <strong>testing</strong>: Playwright; <strong>linting</strong>: Laravel Pint</li>
                                            <li>Mentored <strong>5 junior developers</strong>; led <strong>technical interviews</strong> and designed <strong>evaluation exercises</strong></li>
                                        </ul>

                                        <h5 className="timeline-phase" data-section="experience" data-value="selectra-phase2">
                                            Drupal &amp; Design System
                                        </h5>
                                        <ul data-section="experience" data-value="selectra-bullets2">
                                            <li>Co-built Selectra&apos;s in-house <strong>Design System</strong> from scratch following <strong>Atomic Design</strong> (atoms → templates) using <strong>SASS/SCSS</strong>, <strong>Twig</strong> and <strong>Vanilla JS</strong></li>
                                            <li>Custom <strong>Drupal 10 module</strong> development in <strong>PHP 8.3</strong> (services, DI, events) and <strong>Twig theming</strong> with <strong>Gulp + Webpack</strong> build pipelines</li>
                                            <li>Sustained <strong>Lighthouse score ≥ 90/100</strong> across all owned pages</li>
                                            <li><strong>E2E testing</strong> on <strong>Acquia Cloud</strong> + multi-arch <strong>Docker</strong> (x86/ARM)</li>
                                        </ul>

                                        <div className="chip-row">
                                            {SELECTRA_CHIPS.map(t => (
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
                                            <span data-section="experience" data-value="exp3title">Frontend Developer</span>
                                            {' · '}
                                            Waavi Studios
                                        </h4>
                                        <span className="timeline-date" data-section="experience" data-value="exp3date">Feb 2018 — Nov 2018</span>
                                    </div>
                                    <div className="timeline-body">
                                        <ul data-section="experience" data-value="exp3bullets">
                                            <li>Web projects with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Yarn</strong> and <strong>SASS</strong>. Delivered the <strong>ESME landing page</strong> among other work</li>
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
                                    <li>Scaled a <strong>Design System</strong> (<strong>Atomic Design + BEM</strong>) into the standard adopted by <strong>every product team</strong>, not just my own</li>
                                    <li>Automated the update of <strong>thousands of templates</strong> with <strong>Python</strong> that were previously edited one by one, by hand</li>
                                    <li>Built <strong>internal tooling</strong> to automate development tasks across our <strong>multi-site monorepo</strong> spanning <strong>50+ international domains</strong></li>
                                    <li>Mentored <strong>5 junior developers</strong>, several of whom now <strong>lead their own projects</strong></li>
                                    <li>Outside of work, I build my own <strong>AI-powered tools</strong> to keep learning (see <a href="#portfolio">Projects &amp; Portfolio</a>)</li>
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
