'use client';

import { useRef } from 'react';
import useInViewAnimation from '@/hooks/useInViewAnimation';
import styles from './gallery.module.scss';

const Gallery = () => {
    const galleryItems = [
        {
            title: 'Utovar materijala',
            large: true,
            img: '/bager.jpeg',
            alt: 'Bager utovaruje kamion'
        },
        {
            title: 'Iskopavanje',
            img: '/bager-kamion-front.jpeg',
            alt: 'Bager na gradilištu'
        },
        {
            title: 'Mini bager',
            img: '/bager-side.jpeg',
            alt: 'Mini bager'
        },
        {
            title: 'Transport',
            img: '/bager-kamion-side.jpeg',
            alt: 'Kamioni na gradilištu'
        },
        {
            title: 'Naša oprema',
            large: true,
            img: '/hero-bg.jpeg',
            alt: 'Bager i kamion'
        },
        {
            title: 'Gradilište',
            img: '/kamioni.jpeg',
            alt: 'Gradilište'
        }
    ];

    const itemsRef = useRef<HTMLElement[]>([]);

    useInViewAnimation(itemsRef);

    return (
        <section className={styles.gallery} id="gallery">
            <div className="container">

                <div className="section-header">
                    <h2 className="section-title">Galerija</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        Pogledajte naše radove i opremu
                    </p>
                </div>

                <div className={styles.galleryGrid}>
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.title}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className={`${styles.galleryItem} ${item.large ? styles.galleryItemLarge : ''}`}
                        >
                            <img src={item.img} alt={item.alt} />

                            <div className={styles.galleryOverlay}>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Gallery;
