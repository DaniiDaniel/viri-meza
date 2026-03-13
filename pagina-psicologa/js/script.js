// Navegación suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Menú móvil toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Formulario de contacto
const formulario = document.getElementById("formulario-contacto");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Crear mensaje para WhatsApp
    const numeroWhatsApp = "5521709049";
    const mensajeWhatsApp = `Hola, mi nombre es ${nombre}.%0A%0A${mensaje}%0A%0ACorreo: ${email}%0ATeléfono: ${telefono}`;

    // Abrir WhatsApp con el mensaje
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
      "_blank",
    );

    // Limpiar formulario
    formulario.reset();

    // Mostrar mensaje de confirmación
    alert(
      "¡Gracias por tu mensaje! Te redireccionaremos a WhatsApp para continuar la conversación.",
    );
  });
}

// Animación de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animación a las tarjetas y secciones
document
  .querySelectorAll(".enfoque-item, .especialidad-card, .formacion-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Efecto de navbar al hacer scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.08)";
  }

  lastScroll = currentScroll;
});

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  console.log("Página cargada correctamente");

  // Agregar año actual al footer si es necesario
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll(".current-year");
  yearElements.forEach((el) => {
    el.textContent = currentYear;  
  });
});
// Acordeón de Preguntas Frecuentes
document.querySelectorAll('.faq-pregunta').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Cerrar todos los items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir el clickeado si no estaba activo
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});
// Secciones plegables
document.querySelectorAll('.seccion-header').forEach(button => {
    button.addEventListener('click', () => {
        const seccion = button.parentElement;
        const isActive = seccion.classList.contains('active');
        
        // Cerrar todas las secciones
        document.querySelectorAll('.seccion-plegable').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir la clickeada si no estaba activa
        if (!isActive) {
            seccion.classList.add('active');
        }
    });
});