import { useEffect } from 'react';

type Options = {
    threshold?: number;
    rootMargin?: string;
};

const useInViewAnimation = (
    refs: React.RefObject<HTMLElement[]>,
    options: Options = {}
) => {
    useEffect(() => {
        if (!refs.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;

                        el.style.transitionDelay = `${index * 0.1}s`;
                        el.classList.add('visible');

                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px'
            }
        );

        refs.current.forEach((el) => {
            if (el) {
                el.classList.add('fadeIn');
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [refs, options]);
};

export default useInViewAnimation;
