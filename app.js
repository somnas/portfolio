document.addEventListener("DOMContentLoaded", () => {
    let toggleBtn = document.getElementById("toggle-button");
    let closeBtn = document.getElementById("close-button");
    let navLinks = document.getElementsByClassName("nav-links")[0];
    let logo = document.getElementById("logo");
    let textCont = document.getElementsByClassName("text-content")[0];
    let imgCont = document.getElementsByClassName("img-content")[0];

    toggleBtn.addEventListener("click", () => {
        closeBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        logo.classList.toggle("active");
        textCont.classList.toggle("active");
        imgCont.classList.toggle("active");
    })

    closeBtn.addEventListener("click", () => {
        closeBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        logo.classList.toggle("active");
        textCont.classList.toggle("active");
        imgCont.classList.toggle("active");
    })
})