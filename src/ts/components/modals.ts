export function initModals() {
    // Create references to all the elements we need
    const detailButtons = document.querySelectorAll('.btn-details');
    const modals = document.querySelectorAll('.modal');

    // Open modal and block background
    detailButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // Prevent the event from bubbling up
            e.stopPropagation();
            // Close all modals
            closeAllModals();
            // Get the card and modal elements
            const card = btn.closest('.card-event');
            // Get the modal element
            const modal = card?.querySelector('.modal');
            // If the modal element exists, add the active class and block the background
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    // Close modal with the X button
    modals.forEach((modal) => {
        // Get the close button
        const closeBtn = modal.querySelector('.close');
        closeBtn?.addEventListener('click', (e) => {
            // Prevent the event from bubbling up
            e.stopPropagation();
            // Remove the active class and unblock the background
            modal.classList.remove('active');
        });
        // Close modal when clicking outside of the content
        modal.addEventListener('click', (e) => {
            // If the click target is the modal, remove the active class and unblock the background
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Block interaction with the background while a modal is open
    document.addEventListener('click', (e) => {
        // If a modal is open, check if the click target is not inside the modal
        const anyModalOpen = document.querySelector('.modal.active');
        if (anyModalOpen) {
            if (!(e.target as HTMLElement).closest('.modal')) {
                closeAllModals();
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }, true);

    // Close all modals
    function closeAllModals() {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
}