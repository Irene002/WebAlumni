import { useEffect } from 'react';

const AnimationSlideDown = (id) => {
    useEffect(() => {
        const element = document.getElementById(id);

        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-down');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [id]);
};

export default AnimationSlideDown;