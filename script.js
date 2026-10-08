// Menú Hamburguesa Responsivo
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace en móviles
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
}));

// Funcionalidad interactiva para los pilares griegos
function togglePillar(element) {
    // Alterna la clase active en el pilar seleccionado
    const wasActive = element.classList.contains('active');
    
    // Opcional: si prefieres que solo uno esté abierto a la vez, descomenta la línea siguiente:
    // document.querySelectorAll('.pillar-card').forEach(p => p.classList.remove('active'));

    if (!wasActive) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

// Funcionalidad de Acordeón para Gestión y Tramitología
function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Cierra todos los acordeones antes de abrir otro (efecto acordeón limpio)
    document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
    });

    // Si no estaba abierto, lo abrimos
    if (!isActive) {
        item.classList.add('active');
    }
}
