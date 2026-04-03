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
                    Kamion 5m<sup>3</sup> | Bager 4t
                </h3>

                <h3 className={styles.heroSubtitle}>
                    Odvoz šuta | Prevoz građevinskog materijala
                </h3>

                <h3 className={styles.heroSubtitle}>
                    Sve vrste iskopa: kanal | bazen | temelj | septička jama
                </h3>

                <h3 className={styles.heroSubtitle}>
                    Nivelacija terena | ravnanje
                </h3>

                <h3 className={styles.heroSubtitle}>
                    Razbijanje svih vrsta betona pikamerom(čekić)
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
