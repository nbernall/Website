document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const links = document.querySelectorAll(".sidebar ul li a");

    // Mostrar/ocultar menú en pantallas pequeñas
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // Resaltar enlace activo al hacer clic
    links.forEach((link) => {
        link.addEventListener("click", () => {
            links.forEach((link) => link.classList.remove("active"));
            link.classList.add("active");

            // Cerrar menú después de hacer clic (pantallas pequeñas)
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("open");
            }
        });
    });

    // Cambiar automáticamente la clase activa al desplazarse
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

