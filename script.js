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

// Parallax Effect for Project Cards
const projectCards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const speed = card.getAttribute('data-parallax-speed');
        const cardPos = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPos < windowHeight) {
            const translateY = (windowHeight - cardPos) * speed;
            card.style.transform = `translateY(-${translateY}px)`;
        }
    });
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