document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. MENÚ HAMBURGUESA MÓVIL
       ========================================== */
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('active');
            });
        });
    }

    /* ==========================================
       2. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
       ========================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* ==========================================
       3. CONTROL DE ENLACES ACTIVOS SEGÚN SCROLL
       ========================================== */
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    /* ==========================================
       4. VALIDACIÓN PROFESIONAL DEL FORMULARIO
       ========================================== */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreInput = document.getElementById('nombre');
            const emailInput = document.getElementById('email');
            const telefonoInput = document.getElementById('telefono');
            const mensajeInput = document.getElementById('mensaje');
            const successAlert = document.getElementById('formSuccessMessage');

            let isValid = true;

            // Nombre
            if (nombreInput.value.trim() === '') {
                nombreInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                nombreInput.parentElement.classList.remove('error');
            }

            // Correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('error');
            }

            // Teléfono
            const phoneClean = telefonoInput.value.replace(/\D/g, '');
            if (phoneClean.length < 10) {
                telefonoInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                telefonoInput.parentElement.classList.remove('error');
            }

            // Mensaje
            if (mensajeInput.value.trim() === '') {
                mensajeInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                mensajeInput.parentElement.classList.remove('error');
            }

            // Éxito
            if (isValid) {
                successAlert.style.display = 'block';
                contactForm.reset();

                setTimeout(() => {
                    successAlert.style.display = 'none';
                }, 6000);
            }
        });
    }
});