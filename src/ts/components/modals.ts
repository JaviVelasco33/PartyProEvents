export function initModals() {
    const detailButtons = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.modal');

    detailButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            closeAllModals();
            const card = btn.closest('.card-event');
            const modal = card?.querySelector('.modal');
            if (modal) {
                // Open modal
                modal.classList.add('active');
                // setBodyModalState(true);
            }
        });
    });

    modals.forEach((modal) => {
        const closeBtn = modal.querySelector('.close');
        closeBtn?.addEventListener('click', () => {
            // Close modal
            modal.classList.remove('active');
            // setBodyModalState(false);
        });
    });

    // document.addEventListener('click', (e) => {
    //     const anyModalOpen = document.querySelector('.modal.active');
    //     if (anyModalOpen) {
    //         if (!(e.target as HTMLElement).closest('.modal-content')) {
    //             closeAllModals();
    //         }
    //     }
    // });

    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }

    function setBodyModalState(isOpen: boolean) {
        document.body.classList.toggle('modal-open', isOpen);
    }
}