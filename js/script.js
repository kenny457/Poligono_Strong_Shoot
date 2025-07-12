document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar todos los enlaces de navegación y todas las secciones de contenido
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Función para mostrar una sección específica y actualizar el enlace activo
    function showSection(sectionId) {
        // Ocultar todas las secciones
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección deseada
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Asegurarse de que el scroll vaya al inicio de la sección
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Actualizar la clase 'active' en los enlaces de navegación
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Si el href del enlace coincide con el sectionId actual, añadir 'active'
            if (link.getAttribute('href') === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // 2. Manejar los clics en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace (saltar a la ancla)

            const sectionId = this.getAttribute('href'); // Obtiene el #id del enlace (ej: #servicios)
            showSection(sectionId); // Llama a la función para mostrar la sección
        });
    });

    // 3. Mostrar la sección "Inicio" por defecto al cargar la página
    // Esto es útil si el usuario llega a la URL principal sin un #hash
    // También maneja el caso de recarga de página con un hash en la URL
    const initialHash = window.location.hash; // Obtiene el hash de la URL (ej: #servicios)

    if (initialHash) {
        // Si hay un hash en la URL, intenta mostrar esa sección
        showSection(initialHash);
    } else {
        // Si no hay hash, muestra la sección de inicio por defecto
        showSection('#inicio');
    }
});