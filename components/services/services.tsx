import styles from './services.module.scss';

const services = [
    {
        title: 'Prevoz materijala',
        desc: 'Prevoz peska, šljunka, cementa, cigle i ostalog građevinskog materijala kamionom nosivosti do 5 tona.',
        icon: (
            <>
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
            </>
        )
    },
    {
        title: 'Iskopavanje bagerom',
        desc: 'Profesionalno iskopavanje bagerom od 4 tone za temelje, podrume, kanale i sve vrste zemljanih radova.',
        icon: (
            <>
                <path d="M2 20h20"/>
                <path d="M5 20v-4l3-8h2l1 4"/>
                <path d="M11 12h6l2 4v4"/>
                <circle cx="8" cy="20" r="2"/>
                <circle cx="16" cy="20" r="2"/>
                <path d="M17 8l2-4h2"/>
            </>
        )
    },
    {
        title: 'Iskopavanje bazena',
        desc: 'Precizno iskopavanje za bazene svih veličina uz profesionalni pristup i pažljivo planiranje.',
        icon: (
            <>
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </>
        )
    },
    {
        title: 'Septičke jame',
        desc: 'Iskopavanje za septičke jame uz poštovanje svih standarda i propisa za vodosnabdevanje.',
        icon: (
            <>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2v4"/>
                <path d="M12 18v4"/>
                <path d="M4.93 4.93l2.83 2.83"/>
                <path d="M16.24 16.24l2.83 2.83"/>
            </>
        )
    },
    {
        title: 'Rušenje objekata',
        desc: 'Kompletno rušenje kuća i svih vrsta građevinskih objekata uz bezbedno uklanjanje materijala.',
        icon: (
            <>
                <path d="M3 21h18"/>
                <path d="M5 21V7l8-4v18"/>
                <path d="M19 21V11l-6-4"/>
                <path d="M9 9v.01"/>
                <path d="M9 12v.01"/>
                <path d="M9 15v.01"/>
                <path d="M9 18v.01"/>
            </>
        )
    },
    {
        title: 'Odvoz šuta',
        desc: 'Brz i efikasan odvoz građevinskog otpada, šuta i smeća sa gradilišta na deponiju.',
        icon: (
            <>
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
            </>
        )
    },
    {
        title: 'Razbijanje betona',
        desc: 'Probijanje i razbijanje betona pikamerom za renoviranje, proširenje ili uklanjanje struktura.',
        icon: (
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        )
    },
    {
        title: 'Utovar i istovar',
        desc: 'Profesionalne usluge utovara i istovara materijala sa pažljivim rukovanjem vašom robom.',
        icon: (
            <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
            </>
        )
    },
    {
        title: 'Svi ostali poslovi',
        desc: 'Imate poseban zahtev? Bez brige! Možemo da odradimo bilo koji posao koji vam je potreban. Pozovite nas i dogovorićemo se.',
        special: true,
        icon: (
            <>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8"/>
                <path d="M8 12h8"/>
            </>
        )
    },
];

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div className="section-header section-header-light">
                    <h2 className="section-title">Naše usluge</h2>
                    <div className="section-line" />
                    <p className="section-subtitle">
                        Kompletna ponuda za vaše građevinske potrebe
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`${styles.serviceCard} ${service.special ? styles.serviceCardSpecial : ''}`}
                        >
                            <div
                                className={`${styles.serviceIcon} ${service.special ? styles.serviceIconSpecial : ''}`}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    {service.icon}
                                </svg>
                            </div>

                            <h3 className={styles.serviceTitle}>
                                {service.title}
                            </h3>

                            <p className={styles.serviceDesc}>
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
