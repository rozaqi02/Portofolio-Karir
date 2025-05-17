// Typing Effect for Header
const typingText = "Ahmad Abror Rozaqi Fatoni";
let i = 0;
const typingElement = document.querySelector(".typing-effect");

function typeWriter() {
    if (i < typingText.length) {
        typingElement.innerHTML = typingText.substring(0, i + 1);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Fade-in and Scale-up Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    observer.observe(card);
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});