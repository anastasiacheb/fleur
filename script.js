const hamburger = document.querySelector(".hamburger-main");
const navMenu = document.querySelector(".button-menu");
const close = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

close.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

/* 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
 addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
 })   
    )
    */