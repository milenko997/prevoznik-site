'use client';

import { useRef } from 'react';
import useInViewAnimation from '@/hooks/useInViewAnimation';
import styles from './contact.module.scss';

const Contact = () => {
    const itemsRef = useRef<HTMLElement[]>([]);

    useInViewAnimation(itemsRef);

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div className="section-header section-header-light">
                    <h2 className="section-title">Kontaktirajte nas</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        Pozovite nas za besplatnu procenu
                    </p>
                </div>

                <div className={styles.contactContent}>
                    <div 
                        ref={(el) => {
                            if (el) itemsRef.current[0] = el;
                        }}
                        className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>

                            <div className={styles.contactDetails}>
                                <span className={styles.contactLabel}>Telefon</span>
                                <a href="tel:+381665175385" className={`${styles.contactValue} ${styles.phoneLink}`}>
                                    +381 66 517 53 85
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>

                            <div className={styles.contactDetails}>
                                <span className={styles.contactLabel}>Lokacija</span>
                                <span className={styles.contactValue}>Novi Sad</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>

                            <div className={styles.contactDetails}>
                                <span className={styles.contactLabel}>Radno vreme</span>
                                <span className={styles.contactValue}>Pon - Sub: 06:00 - 16:00</span>
                            </div>
                        </div>
                    </div>

                    <div 
                        ref={(el) => {
                            if (el) itemsRef.current[1] = el;
                        }}
                        className={styles.contactCta}>
                        <p className={styles.ctaText}>
                            Potrebna vam je naša usluga?
                        </p>

                        <a href="tel:+381665175385" className={styles.ctaButton}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>

                            Pozovite odmah
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
