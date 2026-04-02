import styles from './footer.module.scss';

const Footer = () => {
    const services = [
        'Prevoz materijala',
        'Iskopavanje bagerom',
        'Iskopavanje bazena',
        'Septičke jame',
        'Rušenje objekata',
        'Odvoz šuta',
        'Razbijanje betona'
    ];

    const schedule = [
        { day: 'Ponedeljak - Petak', time: '06:00 - 16:00' },
        { day: 'Subota', time: '06:00 - 16:00' },
        { day: 'Nedelja', time: 'Neradni dan' }
    ];

    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.footerGrid}>

                    {/* ABOUT */}
                    <div className={`${styles.footerCol} ${styles.footerAbout}`}>
                        <div className={styles.footerLogo}>PREVOZNIK</div>

                        <p className={styles.footerDesc}>
                            Vaš pouzdan partner za prevoz građevinskog materijala i sve vrste iskopavanja.
                            Kvalitetna usluga, fer cene, zadovoljni klijenti.
                        </p>

                        <div className={styles.footerEquipment}>
                            <span className={styles.equipmentBadge}>Kamion 5t</span>
                            <span className={styles.equipmentBadge}>Bager 4t</span>
                        </div>
                    </div>

                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Usluge</h4>

                        <ul className={styles.footerLinks}>
                            {services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Radno vreme</h4>

                        <ul className={styles.footerSchedule}>
                            {schedule.map((item) => (
                                <li key={item.day}>
                                    <span>{item.day}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>

                        <p className={styles.footerNote}>
                            *Za hitne slučajeve pozovite nas
                        </p>
                    </div>

                    <div className={styles.footerCol}>
                        <h4 className={styles.footerTitle}>Kontakt</h4>

                        <div className={styles.footerContact}>
                            <div className={styles.footerContactItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <a href="tel:+381641234567">+381 64 123 4567</a>
                            </div>

                            <div className={styles.footerContactItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>Novi Sad i okolina</span>
                            </div>
                        </div>

                        <a href="tel:+381641234567" className={styles.footerCtaBtn}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Pozovite nas
                        </a>
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <p>© 2026 Prevoznik. Sva prava zadržana. <span>Website napravio <a href="https://milenkoilic.dev/" target='_blank'>Milenko Ilić</a></span></p>
                    <p className={styles.footerTagline}>
                        Pouzdano. Brzo. Kvalitetno.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
