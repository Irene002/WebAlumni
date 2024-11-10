import { useEffect } from 'react';

const AnimationInView = (id, delay = 0) => {
    useEffect(() => {
        const element = document.getElementById(id);

        if (!element) return;
        element.style.animationDelay = `${delay}s`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [id, delay]);
};

export default AnimationInView;