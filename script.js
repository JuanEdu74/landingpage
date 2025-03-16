document.addEventListener("DOMContentLoaded", function () {
    // --- Código existente para items de características ---
    const featureItems = document.querySelectorAll(".feature-item");
    const featureDetails = document.querySelector(".feature-details");

    featureItems.forEach((item) => {
        item.addEventListener("click", function () {
            featureItems.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");
            featureDetails.textContent = this.dataset.text;
        });
    });

    // --- Código existente para el footer ---
    const footerContent = document.getElementById("footer-content");
    const toggleButton = document.getElementById("toggle-footer");

    toggleButton.addEventListener("click", function () {
        if (footerContent.classList.contains("hidden")) {
            footerContent.classList.remove("hidden");
            toggleButton.textContent = "Ocultar información";
        } else {
            footerContent.classList.add("hidden");
            toggleButton.textContent = "Mostrar información";
        }
    });

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            footerContent.classList.remove("hidden");
            toggleButton.textContent = "Ocultar información";
        }
    });

    // --- 🔥 Nuevo: Activación de animaciones al hacer scroll ---
    const animElements = document.querySelectorAll(".animate-on-scroll");
    
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.2 // Se activa cuando el 20% del elemento está en pantalla
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate"); // Reinicia animación al salir de vista
            }
        });
    }, observerOptions);

    animElements.forEach((el) => observer.observe(el));
});
