// Countdown Timer
const eventDate = new Date("June 30, 2025 09:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "<p>Event Started!</p>";
    }
}, 1000);


// Registration Form
// Registration Form
document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Clear any previous responses
    document.getElementById("registration-success").innerText = "";
    
    // Display the success message
    document.getElementById("registration-success").innerText = "Thank you for registering!";
    
    // Clear the form fields
    this.reset();
});


// Light/Dark Mode Toggle
document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});