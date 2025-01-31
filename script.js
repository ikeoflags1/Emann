document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("successMessage");

    if (!name || !email || !message) {
        successMessage.textContent = "Please fill in all fields before submitting.";
        successMessage.style.color = "red";
        return;
    }

    successMessage.textContent = "Thank you for your message, " + name + "! I'll get back to you soon.";
    successMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});
