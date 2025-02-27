// JavaScript básico para manejar el envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Pronto nos comunicaremos contigo.');
    this.reset();
});