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


