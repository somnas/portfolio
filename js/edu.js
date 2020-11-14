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
        // Get end date
        let endDate = new Date("Jun 15, 2022 12:00:00").getTime();

        // Update timer every 1 second
        setInterval(tick, 1000);

        function tick() {
        // Get current time
        let now = new Date().getTime();
        // Get the difference in time to get time left until reaches 0
        let t = endDate - now;

        // Check if time is above 0
        if (t > 0) {
            
            // Setup days, hours, seconds and minutes            
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            // prefix any number below 10 with a "0" E.g. 1 = 01
            if (days < 10) { days = "0" + days; }            
            
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) { hours = "0" + hours; }
            
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            if (mins < 10) { mins = "0" + mins; }
            
            let secs = Math.floor((t % (1000 * 60)) / 1000);
            if (secs < 10) { secs = "0" + secs; }

            // Create time string
            let time = `${days} : ${hours} : ${mins} : ${secs}`;

            // Send timer to page
            document.getElementById("countdown").innerText = time;
        }
    }
})

