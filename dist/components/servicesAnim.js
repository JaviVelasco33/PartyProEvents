export function initServicesAnim() {
    function getAnims() {
        const isMobile = window.innerWidth <= 1024;
        const isDesktop = window.innerWidth >= 1024;
        const animsMobile = [
            "slideInDown-Opa 0.5s linear forwards",
            "slideInDown-Opa 0.75s linear forwards",
            "slideInDown-Opa 1s linear forwards",
            "slideInDown-Opa 1.25s linear forwards",
            "slideInDown-Opa 1.5s linear forwards"
        ];
        const animsDesktop = [
            "entryServC1 2s linear forwards",
            "entryServC2 2s linear forwards",
            "entryServC3 2s linear forwards",
            "entryServC4 2s linear forwards",
            "entryServC5 2s linear forwards"
        ];
        return isMobile ? animsMobile : (isDesktop ? animsDesktop : animsMobile);
    }
    function entryAnim() {
        const servicesSec = document.getElementById("services");
        const servCards = [1, 2, 3, 4, 5].map(id => document.querySelector(`.card-service[data-id="${id}"]`));
        if (!servicesSec || servCards.some(card => !card))
            return;
        let currentAnims = getAnims();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentAnims = getAnims();
                    servCards.forEach((card, i) => {
                        card.style.animation = "none";
                        void card.offsetWidth;
                        card.style.animation = currentAnims[i];
                    });
                }
                else {
                    servCards.forEach((card, i) => {
                        card.style.animation = "none";
                        void card.offsetWidth;
                        card.style.animation = currentAnims[i] + " reverse";
                    });
                }
            });
        }, { threshold: 0.2 });
        observer.observe(servicesSec);
        window.addEventListener('resize', () => {
            currentAnims = getAnims();
            servCards.forEach((card, i) => {
                if (servicesSec.getBoundingClientRect().top < window.innerHeight &&
                    servicesSec.getBoundingClientRect().bottom > 0) {
                    card.style.animation = "none";
                    void card.offsetWidth;
                    card.style.animation = currentAnims[i];
                }
                else {
                    card.style.animation = "none";
                }
            });
        });
    }
    entryAnim();
}
//# sourceMappingURL=servicesAnim.js.map