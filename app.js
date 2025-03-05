// JavaScript básico para manejar el envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
   // event.preventDefault();
   setTimeout(function() {
    alert('¡Gracias por contactarnos! Pronto nos comunicaremos contigo.');
   },2000);
    //this.reset();
    return true
});

const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav-links")

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links_visible");

    if (navLinks.classList.contains("nav-links_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.5]  // Reducido para mayor sensibilidad
    };

    const observer = new IntersectionObserver((entries) => { // Crea un nuevo Intersection Observer que recibe un callback con las entradas
        let activeSection = null;  // Variable para guardar la sección más visible

        // Encontrar la sección más visible
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si no hay sección activa o esta sección está más visible
                if (!activeSection || entry.intersectionRatio > activeSection.intersectionRatio) {
                    activeSection = entry;
                }
            }
        });

        // Actualizar enlaces de navegación
        if (activeSection) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const correspondingLink = document.querySelector(
                `.nav-links a[href="#${activeSection.target.id}"]`
            );
            
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach(section => observer.observe(section));
});
