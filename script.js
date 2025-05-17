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

// Project Modal
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalGithub = document.getElementById('modal-github');
const closeModal = document.querySelector('.close-modal');

const projectDetails = {
    'survey-polinema': {
        title: 'Sistem Survei Kepuasan Pelanggan Polinema',
        description: 'Mengembangkan aplikasi web untuk mengelola survei kepuasan pemangku kepentingan Politeknik Negeri Malang guna meningkatkan kualitas layanan. Sistem ini mencakup pengumpulan jawaban responden dan pembuatan laporan hasil survei untuk analisis lebih lanjut. Proyek ini menggunakan PHP, HTML, CSS, JavaScript, MySQL, dan template UI AdminLTE.',
        image: 'images/survey-polinema-screenshot.png',
        github: 'https://github.com/rozaqi02/SISTEM-SURVEY-KEPUASAN-PELANGGAN-POLINEMA'
    },
    'jti-simpen': {
        title: 'JTI-SIMPEN (Sistem Informasi Kompensasi)',
        description: 'Membangun sistem berbasis web dan mobile untuk pengelolaan kompensasi mahasiswa, meliputi pengajuan, pemilihan pekerjaan, validasi, dan pelacakan status secara real-time. Sistem ini mempermudah pemantauan kompensasi dengan pengalaman pengguna yang efisien, menggunakan Laravel, MySQL, API development, dan desain UI/UX.',
        image: 'images/jti-simpen-screenshot.png',
        image: 'images/jti-simpen-screenshot2.png',
        image: 'images/jti-simpen-screenshot3.png',
        image: 'images/jti-simpen-screenshot4.png',
        image: 'images/jti-simpen-screenshot5.png',
        github: 'https://github.com/rozaqi02/JTI_SIMPEN'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectDetails[projectId];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.image;
        modalGithub.href = project.github;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
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