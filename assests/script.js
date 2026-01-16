/* ================= HEADER FUNCTIONALITY ================= */

/* Active menu highlight on scroll */
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav a");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    let current = "";
    const headerHeight = header.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 10;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/* ================= MOBILE MENU TOGGLE ================= */

const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ================= AUTO CLOSE MENU ON LINK CLICK ================= */

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
