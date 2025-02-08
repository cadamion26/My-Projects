// Get the form element 
const form = document.querySelector('form');

// Add event listener for form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add your form handling logic here, for example:
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Display an alert to show the form was submitted (just for demo)
    alert('Thank you, ${name}! Your message has been received. We will reply to ${email}.');

    // Optionally, clear the form after submission
    form.reset();
});