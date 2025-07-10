export function initContactForm() {
    const form = document.querySelector('.contact-form');

    // Real time validation
    function realTimeCheck(){    
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                // Ensures the right input type
                const field = input as HTMLInputElement | HTMLTextAreaElement;
                // Check if the input is valid
                if (!field.checkValidity() || field.value.trim() === "") {
                    // If not valid, add the error class and remove it after a delay
                    field.classList.add('input-error');
                    setTimeout(() => {
                        field.classList.remove('input-error');
                    }, 3000);
                }
                // If valid, remove the error class
                else {
                    field.classList.remove('input-error');
                }
            });
        });
    }

    // Submit validation
    function submitFeedback() {
        if (!form) return;

        form.addEventListener("submit", (e) => {
            // Prevent the default form submission
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                // Ensures the right input type
                const field = input as HTMLInputElement | HTMLTextAreaElement;
                // Check if the input is valid
                if (!field.checkValidity() || field.value.trim() === "") {
                    // If not valid, add the error class and remove it after a delay
                    field.classList.add('input-error');
                    setTimeout(() => {
                        field.classList.remove('input-error');
                    }, 3000);
                    valid = false;
                }
                // If valid, remove the error class
                else {
                    field.classList.remove('input-error');
                }
            });
            if (!valid) return;
            
            // Show success message after a delay
            setTimeout(() => {
                showSuccessMessage();
            }, 100);
        });
    }
    
    // Show success message
    function showSuccessMessage() {
        console.log("mensaje");
        // Remove any existing message
        const oldMsg = document.querySelector('.form-success-msg');
        if (oldMsg) oldMsg.remove();

        // Create a new message element
        const msg = document.createElement('div');
        msg.className = 'form-success-msg';
        msg.textContent = '¡Gracias por contactar PartyPro Events! Le responderemos lo antes posible.';
        document.body.appendChild(msg);

        // Delete the message after 2 seconds
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }

    realTimeCheck();
    submitFeedback();
}
