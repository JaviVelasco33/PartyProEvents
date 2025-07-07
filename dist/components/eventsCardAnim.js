export function initEventsCardAnim() {
    const eventSec = document.getElementById('events');
    if (!eventSec)
        return;
    const cards = [
        document.querySelector('.card-event[data-id="1"]'),
        document.querySelector('.card-event[data-id="2"]'),
        document.querySelector('.card-event[data-id="3"]'),
    ];
    function lerp(a, b, t) {
        return a + (b - a) * t;
    }
    function updateCards() {
        if (!eventSec || !cards.every(card => card))
            return;
        const rect = eventSec.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let start = windowHeight;
        let end = windowHeight * 0.3;
        let progress = (rect.top - end) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        const states = [
            { y: -400, rot: 20, marginLeft: 0, marginRight: -0, z: 2 },
            { y: -400, rot: 20, marginLeft: -80, marginRight: -80, z: 3 },
            { y: -400, rot: 20, marginLeft: -0, marginRight: 0, z: 4 },
        ];
        const normal = [
            { y: 0, rot: 0, marginLeft: 0, marginRight: 0, z: 1 },
            { y: 0, rot: 0, marginLeft: 0, marginRight: 0, z: 1 },
            { y: 0, rot: 0, marginLeft: 0, marginRight: 0, z: 1 },
        ];
        cards.forEach((card, i) => {
            if (!card)
                return;
            if (rect.bottom < 0 || rect.top > windowHeight) {
                card.style.pointerEvents = 'none';
            }
            else {
                card.style.pointerEvents = 'auto';
            }
            card.style.setProperty('--card-y', lerp(normal[i].y, states[i].y, progress) + 'px');
            card.style.setProperty('--card-rot', lerp(normal[i].rot, states[i].rot, progress) + 'deg');
            card.style.setProperty('--card-margin-left', lerp(normal[i].marginLeft, states[i].marginLeft, progress) + 'px');
            card.style.setProperty('--card-margin-right', lerp(normal[i].marginRight, states[i].marginRight, progress) + 'px');
            card.style.setProperty('--card-z', lerp(normal[i].z, states[i].z, progress).toString());
        });
    }
    window.addEventListener('scroll', updateCards);
    window.addEventListener('resize', updateCards);
    updateCards();
}
//# sourceMappingURL=eventsCardAnim.js.map