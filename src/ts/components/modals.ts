export function initModals() {
    const detailButtons = document.querySelectorAll('.btn-details');
    const modal = document.querySelector('.modal') as HTMLElement;
    const modalContent = modal?.querySelector('.modal-content') as HTMLElement;

    // Abrir modal y copiar contenido
    detailButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal(); // Cierra cualquier modal abierto
            const card = btn.closest('.card-event');
            const cardModalContent = card?.querySelector('.hidden-modal-content') as HTMLElement;
            if (modal && modalContent && cardModalContent) {
                modalContent.innerHTML = cardModalContent.innerHTML;
                modal.classList.add('active');
                // Asigna el evento de cierre al botón .close recién insertado
                const closeBtn = modalContent.querySelector('.close');
                closeBtn?.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    closeModal();
                });
            }
        });
    });

    // Cerrar modal al hacer click fuera del contenido
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Función para cerrar el modal global
    function closeModal() {
        modal?.classList.remove('active');
        if (modalContent) modalContent.innerHTML = '';
    }
}