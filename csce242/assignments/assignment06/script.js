// Toggle menu for small screens
function toggleMenu() {
    const menu = document.querySelector(".menu-items");
    const arrow = document.querySelector(".arrow");
    menu.classList.toggle("show-menu");
    arrow.classList.toggle("rotate-arrow");
}

// Show selected exercise section
function showSection(sectionId) {
    document.querySelectorAll('.exercise').forEach(section => {
        section.classList.add("hidden"); // Hide all sections
    });
    document.getElementById(sectionId).classList.remove("hidden"); // Show selected section
}

// Display transportation image
function showTransportImage() {
    const input = document.getElementById("transportInput").value.toLowerCase();
    const transportImg = document.getElementById("transportImg");

    const images = {
        "bike": "images/bike.jpeg",
        "scooter": "images/scooter.jpeg",
        "car": "images/car.jpeg",
        "skateboard": "images/skateboard.jpeg"
    };

    if (images[input]) {
        transportImg.src = images[input];
        transportImg.style.display = "block"; // Show image
    } else {
        transportImg.style.display = "none"; // Hide if input is invalid
    }
}

// Change heart color
function changeHeartColor(color) {
    document.getElementById("heart").style.backgroundColor = color;
}

// Ensure Exercise 1 (Traveling) is shown by default
document.addEventListener("DOMContentLoaded", function () {
    showSection('travel'); // Show Exercise 1 on page load
});
