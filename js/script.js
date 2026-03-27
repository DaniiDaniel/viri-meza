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

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Formulario de contacto
const formulario = document.getElementById("formulario-contacto");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const motivo = document.getElementById("motivo").value;

    if (!nombre || !email || !telefono || !motivo) {
      alert("Por favor completa todos los campos");
      return;
    }

    const numeroWhatsApp = "525521709049";
    const mensajeWhatsApp = encodeURIComponent(
      `Hola, mi nombre es ${nombre}.\n\n` +
        `Motivo de consulta:\n${motivo}\n\n` +
        `Datos de contacto:\n` +
        `Correo: ${email}\n` +
        `Teléfono: ${telefono}`,
    );

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
    window.open(urlWhatsApp, "_blank");

    formulario.reset();
    alert("¡Gracias por tu mensaje! Te hemos redirigido a WhatsApp.");
  });
}

// Animación general de aparición al hacer scroll
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

  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll(".current-year");
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
});

// Acordeón de Preguntas Frecuentes
document.querySelectorAll(".faq-pregunta").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

// Secciones plegables
document.querySelectorAll(".seccion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const seccion = button.parentElement;
    const isActive = seccion.classList.contains("active");

    document.querySelectorAll(".seccion-plegable").forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      seccion.classList.add("active");
    }
  });
});

// Testimonios — Aparición editorial (fade + slide + stagger)
const testimonios = document.querySelectorAll(".testimonio");

const testimoniosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200);
      }
    });
  },
  { threshold: 0.2 },
);

testimonios.forEach((testimonio) => testimoniosObserver.observe(testimonio));

// Slider vertical de testimonios con hover, límites y rebote
const list = document.querySelector(".testimonios-list");
const arrowDown = document.getElementById("testimonios-down");
const arrowUp = document.getElementById("testimonios-up");
const viewport = document.querySelector(".testimonios-viewport");

if (list && arrowDown && arrowUp && viewport) {
  let offset = 0;
  let scrollInterval = null;

  const totalHeight = list.scrollHeight;
  const viewportHeight = viewport.offsetHeight;
  const maxOffset = Math.max(0, totalHeight - viewportHeight);

  function stopScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  }

  function startScrollDown() {
    stopScroll();
    scrollInterval = setInterval(() => {
      if (Math.abs(offset) < maxOffset) {
        offset -= 1;
        list.style.transform = `translateY(${offset}px)`;
      } else {
        list.classList.add("rebote");
        list.style.transform = `translateY(${offset + 10}px)`;
        setTimeout(() => {
          list.style.transform = `translateY(${offset}px)`;
          list.classList.remove("rebote");
        }, 150);
        stopScroll();
      }
    }, 10);
  }

  function startScrollUp() {
    stopScroll();
    scrollInterval = setInterval(() => {
      if (offset < 0) {
        offset += 1;
        list.style.transform = `translateY(${offset}px)`;
      } else {
        list.classList.add("rebote");
        list.style.transform = `translateY(${offset - 10}px)`;
        setTimeout(() => {
          list.style.transform = `translateY(${offset}px)`;
          list.classList.remove("rebote");
        }, 150);
        stopScroll();
      }
    }, 10);
  }

  arrowDown.addEventListener("mouseenter", startScrollDown);
  arrowDown.addEventListener("mouseleave", stopScroll);

  arrowUp.addEventListener("mouseenter", startScrollUp);
  arrowUp.addEventListener("mouseleave", stopScroll);
}


