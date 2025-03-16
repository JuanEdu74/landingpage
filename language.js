document.addEventListener("DOMContentLoaded", function () {
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownList = document.querySelector(".dropdown-list");

    // Verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    applyLanguage(savedLanguage);

    // Función para alternar el menú desplegable
    window.toggleDropdown = function () {
        dropdownList.classList.toggle("show");
    };

    // Función para seleccionar el idioma y guardarlo en localStorage
    window.selectLanguage = function (lang) {
        localStorage.setItem("preferredLanguage", lang);
        applyLanguage(lang);
        dropdownList.classList.remove("show");
    };

    // Aplicar el idioma en el contenido de la página
    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        dropdownSelected.textContent = lang === "en" ? "English" : "Español";

        // Mostrar el contenido correcto según el idioma
        document.getElementById("content-en").style.display = lang === "en" ? "block" : "none";
        document.getElementById("content-es").style.display = lang === "es" ? "block" : "none";

        // Actualizar chatbot
        updateChatbotLanguage(lang);
    }

    function updateChatbotLanguage(lang) {
        document.getElementById("chat-title").textContent = lang === "en" ? "ChatBot" : "ChatBot";
        document.getElementById("welcome-en").style.display = lang === "en" ? "block" : "none";
        document.getElementById("welcome-es").style.display = lang === "es" ? "block" : "none";
    }
});
