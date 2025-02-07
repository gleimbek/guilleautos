// Efecto de desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidad del modal para la galería y proyectos
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close');

    // Mostrar el modal para imágenes de la galería
    document.querySelectorAll('.galeria-img, .proyecto-img').forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    // Cerrar el modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Validación del formulario de contacto y envío a WhatsApp
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir que el formulario recargue la página

    // Captura los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const celular = document.getElementById('phone').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verifica que todos los campos estén completos
    if (!nombre || !email || !celular || !mensaje) {
        alert('Por favor, completa todos los campos del formulario.');
        return; // Detiene la ejecución si hay campos vacíos
    }

    // Construye el mensaje para WhatsApp
    const mensajeWhatsApp = `
        *Nombre:* ${nombre}
        *Correo Electrónico:* ${email}
        *Celular:* ${celular}
        *Mensaje:* ${mensaje}
    `;

    // Codifica el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // Reemplaza "YOUR_PHONE_NUMBER" con tu número de WhatsApp (incluye el código de país, ejemplo: +521234567890)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5493547449716&text=${mensajeCodificado}`;

    // Abre WhatsApp en una nueva ventana o app
    window.open(whatsappUrl, '_blank');

    // Resetea el formulario después de enviar el mensaje
    document.getElementById('formulario-contacto').reset();

    // Muestra un mensaje de confirmación
    alert(`Gracias por tu mensaje, ${nombre}. Nos pondremos en contacto contigo pronto.`);
});