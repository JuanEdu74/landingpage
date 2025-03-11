document.addEventListener("DOMContentLoaded", function () {
    // --- Código existente para items de características ---
    const featureItems = document.querySelectorAll(".feature-item");
    const featureDetails = document.querySelector(".feature-details");
  
    featureItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remueve la clase "active" de todos
        featureItems.forEach((el) => el.classList.remove("active"));
        // Agrega "active" solo al clickeado
        this.classList.add("active");
        // Muestra el texto dinámico (usando data-text en el HTML)
        featureDetails.textContent = this.dataset.text;
      });
    });
  
    // --- Código existente para el footer ---
    const footerContent = document.getElementById("footer-content");
    const toggleButton = document.getElementById("toggle-footer");
  
    // Mostrar u ocultar con botón
    toggleButton.addEventListener("click", function () {
      if (footerContent.classList.contains("hidden")) {
        footerContent.classList.remove("hidden");
        toggleButton.textContent = "Ocultar información";
      } else {
        footerContent.classList.add("hidden");
        toggleButton.textContent = "Mostrar información";
      }
    });
  
    // Mostrar el footer cuando el usuario llega al final de la página
    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        footerContent.classList.remove("hidden");
        toggleButton.textContent = "Ocultar información";
      }
    });
  
    // --- Nuevo: Activación dinámica de animaciones al hacer scroll ---
    const animElements = document.querySelectorAll(
      ".fadeIn, .slideInUp, .slideInLeft, .slideInRight"
    );
    const observerOptions = { threshold: 0.2 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          // Remueve la clase para que la animación se pueda reiniciar al volver a entrar
          entry.target.classList.remove("animate");
        }
      });
    }, observerOptions);
  
    animElements.forEach((el) => observer.observe(el));
  });
  