const themeToggle = document.getElementById("theme-toggle");


// =========================
// DARK MODE
// =========================

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.classList.add("dark-active");
    } else {
        themeToggle.classList.remove("dark-active");
    }

});


// =========================
// SIDEBAR NAVIGATION
// =========================

const contentArea = document.querySelector(".site-content");
const navLinks = document.querySelectorAll(".sidebar-nav-link");
const sections = document.querySelectorAll(
    ".site-content section[id]"
);


// =========================
// CLICK NAVIGATION
// =========================

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const scrollPosition = contentArea.scrollTop;

        if (scrollPosition >= sectionTop - 250) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}


// =========================
// LISTEN TO RIGHT-SIDE SCROLL
// =========================

contentArea.addEventListener(
    "scroll",
    updateActiveNavigation
);


// Run once when page loads

updateActiveNavigation();

// CUSTOM CURSOR
const customCursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    customCursor.style.left = cursorX + "px";
    customCursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

// CURSOR HOVER EFFECT
const hoverElements = document.querySelectorAll(
    "a, button, .sidebar-nav-link, .project-card, .skill-item"
);

hoverElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        customCursor.classList.add("cursor-hover");
        cursorDot.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", function () {
        customCursor.classList.remove("cursor-hover");
        cursorDot.classList.remove("cursor-hover");
    });
});