document.addEventListener("DOMContentLoaded", () => {
    let toggleBtn = document.getElementById("toggle-button");
    let closeBtn = document.getElementById("close-button");
    let navLinks = document.getElementsByClassName("nav-links")[0];
    let logo = document.getElementById("logo");
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
        eduText.classList.toggle("active");       
    })
})

