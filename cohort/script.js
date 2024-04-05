document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the email input value
        var email = document.getElementById('email').value;

        // Show a confirmation message
        var message = document.createElement('p');
        message.textContent = 'You are successfully subscribed!';
        message.style.color = 'green';
        form.appendChild(message);

        // Optional: Clear the email input after submission
        document.getElementById('email').value = '';
    });
});
