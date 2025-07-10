export function initContactForm() {
    const form = document.querySelector('.contact-form');
    function realTimeCheck() {
        if (!form)
            return;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                const field = input;
                if (!field.checkValidity() || field.value.trim() === "") {
                    field.classList.add('input-error');
                    setTimeout(() => {
                        field.classList.remove('input-error');
                    }, 3000);
                }
                else {
                    field.classList.remove('input-error');
                }
            });
        });
    }
    function submitFeedback() {
        if (!form)
            return;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                const field = input;
                if (!field.checkValidity() || field.value.trim() === "") {
                    field.classList.add('input-error');
                    setTimeout(() => {
                        field.classList.remove('input-error');
                    }, 3000);
                    valid = false;
                }
                else {
                    field.classList.remove('input-error');
                }
            });
            if (!valid)
                return;
            setTimeout(() => {
                showSuccessMessage();
            }, 100);
        });
    }
    function showSuccessMessage() {
        console.log("mensaje");
        const oldMsg = document.querySelector('.form-success-msg');
        if (oldMsg)
            oldMsg.remove();
        const msg = document.createElement('div');
        msg.className = 'form-success-msg';
        msg.textContent = '¡Gracias por contactar PartyPro Events! Le responderemos lo antes posible.';
        document.body.appendChild(msg);
        setTimeout(() => {
            msg.remove();
        }, 2000);
    }
    realTimeCheck();
    submitFeedback();
}
//# sourceMappingURL=contactForm.js.map