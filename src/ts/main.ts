//components
import { initReviewsSlider } from './components/reviewsSlider.js';
import { initFilterSystem } from './components/eventFilter.js';
import { initModals } from './components/modals.js';
// import { ContactForm } from './components/contactForm';

//interfaces
// import { Event, Review, Service } from './types/index';

document.addEventListener('DOMContentLoaded', () => {
    initReviewsSlider();
    initFilterSystem();
    initModals();
});