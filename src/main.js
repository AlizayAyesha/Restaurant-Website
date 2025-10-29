document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navLinks");

mobileMenuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link, .nav-btn").forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const navHeight = document.querySelector(".navbar").offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(
        "section[id], header[id], footer[id]"
    );
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
