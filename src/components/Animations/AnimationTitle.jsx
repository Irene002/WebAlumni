import { useEffect } from 'react';

const AnimationTitle = (id, delay = 0) => {
    useEffect(() => {
        const element = document.getElementById(id);

        if (!element) return;
        element.style.animationDelay = `${delay}s`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-title');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [id, delay]);
};

export default AnimationTitle;