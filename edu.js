document.addEventListener("DOMContentLoaded", () => {
    let toggleBtn = document.getElementById("toggle-button");
    let closeBtn = document.getElementById("close-button");
    let navLinks = document.getElementsByClassName("nav-links")[0];
    let logo = document.getElementById("logo");
    let textCont = document.getElementsByClassName("landing-text")[0];
    let imgCont = document.getElementsByClassName("landing-img")[0];
    let eduText = document.getElementsByClassName("edu-text")[0];

    toggleBtn.addEventListener("click", () => {
    closeBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
    logo.classList.toggle("active");    
    eduText.classList.toggle("active");    
    })

    closeBtn.addEventListener("click", () => {
        closeBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
        logo.classList.toggle("active");        
    })
})

