import styles from './whyUs.module.scss';

const WhyUs = () => {
    const whyUsConst = [
        {
            title: 'Brza usluga',
            desc: 'Dolazimo na vreme i posao završavamo efikasno bez nepotrebnog čekanja.',
            icon: (
                <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </>
            )
        },
        {
            title: 'Povoljne cene',
            desc: 'Konkurentne cene bez skrivenih troškova. Transparentnost je naš prioritet.',
            icon: (
                <>
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </>
            )
        },
        {
            title: 'Pouzdana oprema',
            desc: 'Redovno održavana mehanizacija garantuje kvalitetan rad bez zastoja.',
            icon: (
                <>
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </>
            )
        },
        {
            title: 'Iskusan operater',
            desc: 'Dugogodišnje iskustvo u radu sa mehanizacijom i građevinskim materijalima.',
            icon: (
                <>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </>
            )
        },
        {
            title: 'Lokalna firma',
            desc: 'Radimo lokalno što znači brži dolazak i bolje poznavanje terena.',
            icon: (
                <>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </>
            )
        },
        {
            title: 'Garancija kvaliteta',
            desc: 'Svaki posao obavljamo savesno i profesionalno do potpunog zadovoljstva klijenta.',
            icon: (
                <>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </>
            )
        }
    ];

    return (
        <section className={styles.whyUs} id="why-us">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Zašto izabrati nas</h2>
                    <div className="section-line"></div>
                </div>

                <div className={styles.whyUsGrid}>
                    {whyUsConst.map((item) => (
                        <div key={item.title} className={styles.whyItem}>
                            <div className={styles.whyIcon}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    {item.icon}
                                </svg>
                            </div>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs;
