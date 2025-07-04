//components
import { initReviewsSlider } from './components/reviewsSlider';
import { initFilterSystem } from './components/eventFilter';
import { initModals } from './components/modals';
import '../scss/main.scss';
// import { ContactForm } from './components/contactForm';

//interfaces
// import { Event, Review, Service } from './types/index';

document.addEventListener('DOMContentLoaded', () => {
    initReviewsSlider();
    initFilterSystem();
    initModals();
});