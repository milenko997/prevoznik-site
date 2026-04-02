import Link from 'next/link';
import styles from './hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>BAR-KOP</h2>

                <h1 className={styles.heroTagline}>
                    Pouzdane usluge prevoza i iskopavanja
                </h1>

                <h3 className={styles.heroSubtitle}>
                    Kamion 5t | Bager 4t | Odvoz šuta
                </h3>

                <Link href="tel:+381665175385" className={styles.heroBtn}>
                    Pozovite nas
                </Link>
            </div>

            <div className={styles.heroScroll}>
                <span>Saznajte više</span>
                <div className={styles.scrollArrow} />
            </div>
        </section>
    );
};

export default Hero;
