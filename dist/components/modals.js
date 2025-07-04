export function initModals() {
    const detailButtons = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.modal');
    detailButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
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
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });
    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
    function setBodyModalState(isOpen) {
        document.body.classList.toggle('modal-open', isOpen);
    }
}
//# sourceMappingURL=modals.js.map