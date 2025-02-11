document.addEventListener("DOMContentLoaded", () => {
    const timeSelect = document.getElementById("time");
    for (let hour = 4; hour <= 9; hour++) {
        timeSelect.innerHTML += `<option value="${hour}:00">${hour}:00 PM</option>`;
        if (hour !== 9) {
            timeSelect.innerHTML += `<option value="${hour}:30">${hour}:30 PM</option>`;
        }
    }

    // Guest counter functionality
    let guestCount = 1;
    const guestCountDisplay = document.getElementById("guest-count");
    document.getElementById("increase").addEventListener("click", () => {
        if (guestCount < 10) { // Limit to 10 guests
            guestCount++;
            guestCountDisplay.textContent = guestCount;
        }
    });

    document.getElementById("decrease").addEventListener("click", () => {
        if (guestCount > 1) { // Minimum 1 guest
            guestCount--;
            guestCountDisplay.textContent = guestCount;
        }
    });

    // Submit button functionality
    document.getElementById("reservation-form").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("success-message").style.display = "block";
    });
});
