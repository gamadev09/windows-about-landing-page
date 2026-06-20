document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content p');
    const heroButtons = document.querySelector('.hero-actions');
    const heroHighlights = document.querySelector('.hero-highlights');
    const heroVisual = document.querySelector('.hero-visual');

    if (!heroTitle || !heroText || !heroButtons || !heroHighlights || !heroVisual) return;

    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(18px)';
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(18px)';
    heroButtons.style.opacity = '0';
    heroButtons.style.transform = 'translateY(18px)';
    heroHighlights.style.opacity = '0';
    heroHighlights.style.transform = 'translateY(18px)';
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'translateX(24px)';

    const reveal = (element, delay) => {
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) translateX(0)';
        }, delay);
    };

    reveal(heroTitle, 150);
    reveal(heroText, 400);
    reveal(heroButtons, 650);
    reveal(heroHighlights, 900);
    reveal(heroVisual, 300);
});
