import styles from './gallery.module.scss';

const Gallery = () => {
    const galleryItems = [
        {
            title: 'Utovar materijala',
            large: true,
            img: 'https://images.unsplash.com/photo-1763349148643-9b21e1cefe50?crop=entropy&cs=srgb&fm=jpg&w=800&q=80',
            alt: 'Bager utovaruje kamion'
        },
        {
            title: 'Iskopavanje',
            img: 'https://images.unsplash.com/photo-1622082679766-c5912d9416eb?crop=entropy&cs=srgb&fm=jpg&w=600&q=80',
            alt: 'Bager na gradilištu'
        },
        {
            title: 'Mini bager',
            img: 'https://images.unsplash.com/photo-1759950345011-ee5a96640e00?crop=entropy&cs=srgb&fm=jpg&w=600&q=80',
            alt: 'Mini bager'
        },
        {
            title: 'Transport',
            img: 'https://images.unsplash.com/photo-1653924333410-0dda83ae490c?crop=entropy&cs=srgb&fm=jpg&w=600&q=80',
            alt: 'Kamioni na gradilištu'
        },
        {
            title: 'Naša oprema',
            large: true,
            img: 'https://images.unsplash.com/photo-1737535228679-71c84fa778d3?crop=entropy&cs=srgb&fm=jpg&w=800&q=80',
            alt: 'Bager i kamion'
        },
        {
            title: 'Gradilište',
            img: 'https://images.unsplash.com/photo-1774867559682-e856ab83a7db?crop=entropy&cs=srgb&fm=jpg&w=600&q=80',
            alt: 'Gradilište'
        }
    ];

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
                    {galleryItems.map((item) => (
                        <div
                            key={item.title}
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
