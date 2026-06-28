import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

import '../style/Skills.css';
import '../style/index.css';
import '../style/Titulo.css';

const SKILL_GROUPS = [
    {
        label: 'Frontend',
        skills: [
            'React 19',
            'Next.js 15 (App Router)',
            'TypeScript',
            'JavaScript ES6+',
            'React Hooks',
            'Server Components',
            'Tailwind v4',
            'SASS/SCSS',
            'HTML5 / CSS3',
            'Alpine.js',
            'Vite 7',
            'Webpack',
            'Atomic Design',
            'BEM',
            'Chart.js',
            'Blade',
            'Twig',
            'Gulp',
        ],
    },
    {
        label: 'AI & APIs',
        skills: [
            'Claude API',
            'OpenAI API',
            'Prompt Engineering',
            'MapLibre GL',
            'Vercel',
        ],
    },
    {
        label: 'Backend',
        skills: ['PHP 8.3', 'Laravel 12', 'Drupal 10', 'Python 3', 'Composer'],
    },
    {
        label: 'Infra / DevOps',
        skills: ['Docker', 'Laravel Sail', 'Git / GitHub', 'GitHub Actions', 'Acquia Cloud', 'Cloudflare R2', 'AWS SDK', 'Kubernetes', 'Bash / Zsh'],
    },
    {
        label: 'Testing & Quality',
        skills: ['Playwright', 'React Testing Library', 'PHPStan', 'Sentry', 'Datadog'],
    },
];

class Skills extends Component {
    render() {
        return (
            <div className="skills" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="title">
                                    <h4 data-section="skills" data-value="title">Skills</h4>
                                </div>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <div className="skill-groups">
                        {SKILL_GROUPS.map((group) => (
                            <ScrollAnimation key={group.label} animateIn="fadeInUp">
                                <div className="skill-group">
                                    <h5>{group.label}</h5>
                                    <div className="chip-row">
                                        {group.skills.map((skill) => (
                                            <span key={skill} className="chip">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Skills;
