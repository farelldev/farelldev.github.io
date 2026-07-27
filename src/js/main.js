const button = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden-section").forEach((el) => {
    observer.observe(el);
});