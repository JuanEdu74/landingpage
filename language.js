document.addEventListener("DOMContentLoaded", function () {
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownList = document.querySelector(".dropdown-list");

    // Verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    applyLanguage(savedLanguage);

    window.toggleDropdown = function () {
        dropdownList.classList.toggle("show");
    };

    window.selectLanguage = function (lang) {
        localStorage.setItem("preferredLanguage", lang);
        applyLanguage(lang);
        dropdownList.classList.remove("show");

        // Enviar el cambio de idioma a navbar y footer
        document.querySelector(".iframe-navbar").contentWindow.postMessage({ language: lang }, "*");
        document.querySelector(".iframe-footer").contentWindow.postMessage({ language: lang }, "*");
    };

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        dropdownSelected.textContent = lang === "en" ? "English" : "Español";

        const contentEn = document.getElementById("content-en");
        const contentEs = document.getElementById("content-es");
        if (contentEn && contentEs) {
            contentEn.style.display = lang === "en" ? "block" : "none";
            contentEs.style.display = lang === "es" ? "block" : "none";
        }

        // Enviar mensaje a los iframes para actualizar navbar y footer
        if (window.parent) {
            window.parent.postMessage({ language: lang }, "*");
        }
    }

    window.addEventListener("message", function (event) {
        if (event.data.language) {
            applyLanguage(event.data.language);
        }
    });
});