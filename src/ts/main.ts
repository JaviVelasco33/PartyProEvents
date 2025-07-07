//components
import { initReviewsSlider } from './components/reviewsSlider.js';
import { initFilterSystem } from './components/eventFilter.js';
import { initModals } from './components/modals.js';
import { initContactForm } from './components/contactForm.js';
import { initAnimations } from './components/animations.js';
import { initEventsCardAnim } from './components/eventsCardAnim.js';

document.addEventListener('DOMContentLoaded', () => {
    initReviewsSlider();
    initFilterSystem();
    initModals();
    initContactForm();
    initAnimations();
    initEventsCardAnim();
});