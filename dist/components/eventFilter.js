export function initFilterSystem() {
    const filterSelect = document.querySelector('.select-filter');
    const eventCards = document.querySelectorAll('.card-event');
    function filterEvents(filterValue) {
        eventCards.forEach(card => {
            var _a;
            const types = ((_a = card.getAttribute('data-type')) === null || _a === void 0 ? void 0 : _a.split(' ')) || [];
            if (filterValue === 'all' || types.includes(filterValue)) {
                card.classList.remove('hidden');
            }
            else {
                card.classList.add('hidden');
            }
        });
    }
    filterSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        filterEvents(value);
    });
    filterEvents('all');
}
//# sourceMappingURL=eventFilter.js.map