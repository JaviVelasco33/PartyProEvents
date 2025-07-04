export function initReviewsSlider() {
    const items = document.querySelectorAll('.rev-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.btn-slider.prev');
    const nextBtn = document.querySelector('.btn-slider.next');
    let current = 0;

    function showItem(index: number) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            indicators[i].classList.remove('active');
        });

        items[index].classList.add('active');
        indicators[index].classList.add('active');
        current = index;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = (current - 1 + items.length) % items.length;
            showItem(newIndex);
        });

        nextBtn.addEventListener('click', () => {
            let newIndex = (current + 1) % items.length;
            showItem(newIndex);
        });
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            showItem(i);
        });
    });

    showItem(0);
}