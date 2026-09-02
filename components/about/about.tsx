'use client';

import { useRef } from 'react';
import useInViewAnimation from '@/hooks/useInViewAnimation';
import styles from './about.module.scss';

const About = () => {
  const itemsRef = useRef<HTMLElement[]>([]);

  useInViewAnimation(itemsRef);

  return (
    <section className={styles.about} id='about'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title'>O nama</h2>
          <div className='section-line' />
        </div>

        <div className={styles.aboutContent}>
          <div
            ref={(el) => {
              if (el) itemsRef.current[0] = el;
            }}
            className={styles.aboutText}
          >
            <p className={styles.aboutLead}>
              <strong>Bar Kop</strong> je lokalna firma sa sedištem u Petrovaradinu koja pruža
              profesionalne usluge prevoza građevinskog materijala i iskopavanja već dugi niz
              godina.
            </p>

            <p>
              Naše višegodišnje iskustvo na terenu, maksimalna pouzdanost i efikasnost čine nas
              pravim izborom za sve vaše građevinske potrebe. Specijalizovani smo za sve vrste
              zemljanih radova — od preciznih iskopa za temelje, bazene, kanale i septičke jame, do
              nivelacije terena, ravnanja i rušenja objekata uz odvoz šuta. Naša primarna lokacija
              je Petrovaradin, ali redovno pokrivamo ceo Novi Sad, okolna mesta, kao i širu
              teritoriju po dogovoru sa klijentima.
            </p>

            <p>
              Efikasnost u radu garantujemo modernom mehanizacijom: koristimo bager od 4 tone za
              zahtevne iskope i rad na nepristupačnim terenima, kao i kiper kamion zapremine 5m³
              (nosivosti do 5 tona). Spremni smo kako za manje privatne zahvate u dvorištu, tako i
              za obimnije radove na većim gradilištima.
            </p>
          </div>

          <div className={styles.aboutStats}>
            <div
              ref={(el) => {
                if (el) itemsRef.current[1] = el;
              }}
              className={styles.statItem}
            >
              <span className={styles.statIcon}>
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' />
                </svg>
              </span>
              <span className={styles.statNumber}>
                5m<sup>3</sup>
              </span>
              <span className={styles.statLabel}>Nosivost kamiona</span>
            </div>

            <div
              ref={(el) => {
                if (el) itemsRef.current[2] = el;
              }}
              className={styles.statItem}
            >
              <span className={styles.statIcon}>
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <circle cx='12' cy='12' r='10' />
                  <path d='M12 6v6l4 2' />
                </svg>
              </span>
              <span className={styles.statNumber}>4t</span>
              <span className={styles.statLabel}>Bager</span>
            </div>

            <div
              ref={(el) => {
                if (el) itemsRef.current[3] = el;
              }}
              className={styles.statItem}
            >
              <span className={styles.statIcon}>
                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
                  <polyline points='22 4 12 14.01 9 11.01' />
                </svg>
              </span>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Pouzdanost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
