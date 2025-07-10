export function initModals() {
    const detailButtons = document.querySelectorAll('.btn-details');
    const modal = document.querySelector('.modal');
    const modalContent = modal === null || modal === void 0 ? void 0 : modal.querySelector('.modal-content');
    detailButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
            const card = btn.closest('.card-event');
            const cardModalContent = card === null || card === void 0 ? void 0 : card.querySelector('.hidden-modal-content');
            if (modal && modalContent && cardModalContent) {
                modalContent.innerHTML = cardModalContent.innerHTML;
                modal.classList.add('active');
                const closeBtn = modalContent.querySelector('.close');
                closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    closeModal();
                });
            }
        });
    });
    modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    function closeModal() {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove('active');
        if (modalContent)
            modalContent.innerHTML = '';
    }
}
//# sourceMappingURL=modals.js.map