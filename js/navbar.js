const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});