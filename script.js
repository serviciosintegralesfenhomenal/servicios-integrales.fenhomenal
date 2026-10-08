// Menú Hamburguesa Responsivo
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Animación de aparición al hacer scroll (Scroll Reveal)
window.addEventListener('scroll', revealSections);

function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('active');
        }
    });
}

// Ejecutar al cargar para mostrar elementos visibles iniciales
revealSections();

// Efecto activo en pestañas de navegación al hacer scroll
const sections = document.querySelectorAll('section, div#home');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Pilares Griegos Interactivos
function togglePillar(element) {
    const wasActive = element.classList.contains('active');
    document.querySelectorAll('.pillar-card').forEach(p => p.classList.remove('active'));
    if (!wasActive) {
        element.classList.add('active');
    }
}

// Acordeón Fluido para Gestión y Tramitología
function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}
