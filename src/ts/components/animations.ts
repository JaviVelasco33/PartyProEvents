export function initAnimations() {
    const animObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const element = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    element.style.animationPlayState = 'running';
                } else {
                    element.style.animationPlayState = 'paused';
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px',
        }
    );

    const animatedElements = document.querySelectorAll<HTMLElement>('.animated');

    animatedElements.forEach((element) => {
        element.style.animationPlayState = 'paused';
        animObserver.observe(element);
    });

    console.log('Animations initialized and observer set up.');
}