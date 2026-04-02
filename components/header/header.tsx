'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';

const Header = () => {
    const navLinks = [
        { label: 'Početna', href: '#hero' },
        { label: 'O nama', href: '#about' },
        { label: 'Usluge', href: '#services' },
        { label: 'Galerija', href: '#gallery' },
        { label: 'Zašto mi', href: '#why-us' },
        { label: 'Kontakt', href: '#contact', cta: true }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = (target as HTMLElement).offsetTop - offset;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }

        setIsOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <a href="#hero" className={styles.navLogo}>
                    <img src="/logo.jpeg" alt="logo" />
                </a>

                <button
                    className={`${styles.navToggle} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`${styles.navLink} ${link.cta ? styles.navLinkCta : ''}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
