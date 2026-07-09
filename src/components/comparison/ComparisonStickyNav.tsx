"use client";

import React, { useState, useEffect } from 'react';


const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'performance', label: 'Performance' },
    { id: 'outputs', label: 'Outputs' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'workflows', label: 'Workflows' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' }
];

export function ComparisonStickyNav() {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for sticky nav height

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    const absoluteTop = window.scrollY + top;
                    const absoluteBottom = window.scrollY + bottom;

                    if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for nav
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-4 z-40 w-full flex justify-center px-4 mb-16 pointer-events-none">
            <nav className="bg-surface/80 backdrop-blur-md border border-border shadow-md rounded-full px-2 py-2 flex items-center gap-1 overflow-x-auto max-w-full pointer-events-auto hide-scrollbar">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                            activeSection === section.id
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-secondary'
                        }`}
                    >
                        {section.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}
