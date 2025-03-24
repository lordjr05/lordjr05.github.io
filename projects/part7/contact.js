document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        formMessage.textContent = 'All fields are required.';
        formMessage.className = 'message error';
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'message error';
        return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
        const response = await fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            formMessage.textContent = 'Thank you for contacting us!';
            formMessage.className = 'message success';
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('There was an issue with sending your message.');
        }
    } catch (error) {
        formMessage.textContent = 'An error occurred. Please try again later.';
        formMessage.className = 'message error';
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
