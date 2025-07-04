export function initFilterSystem() {
    const filterSelect = document.querySelector('.select-filter') as HTMLSelectElement;
    const eventCards = document.querySelectorAll('.card-event');

    function filterEvents(filterValue: string) {
        eventCards.forEach(card => {
            const types = card.getAttribute('data-type')?.split(' ') || [];
            if (filterValue === 'all' || types.includes(filterValue)) {
                card.classList.remove('hidden');
            }
            else {
                card.classList.add('hidden');
            }
        });
    }

    filterSelect.addEventListener('change', (e) => {
        const value = (e.target as HTMLSelectElement).value;
        filterEvents(value);
    });

    filterEvents('all');
}