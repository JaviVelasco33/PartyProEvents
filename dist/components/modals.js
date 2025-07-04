export function initModals() {
    const detailButtons = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.modal');
    detailButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllModals();
            const card = btn.closest('.card-event');
            const modal = card === null || card === void 0 ? void 0 : card.querySelector('.modal');
            if (modal) {
                modal.classList.add('active');
            }
        });
    });
    modals.forEach((modal) => {
        const closeBtn = modal.querySelector('.close');
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.classList.remove('active');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    document.addEventListener('click', (e) => {
        const anyModalOpen = document.querySelector('.modal.active');
        if (anyModalOpen) {
            if (!e.target.closest('.modal')) {
                closeAllModals();
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }, true);
    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
}
//# sourceMappingURL=modals.js.map