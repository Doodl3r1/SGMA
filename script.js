document.getElementById('agent-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Form submission intercepted!");

    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        console.log("Response received:", response);
        if (response.ok) {
            console.log("Form submitted successfully!");
            messageDiv.innerHTML = '<p style="color: gold;">Thank you! We will contact you soon.</p>';
            form.reset();
        } else {
            console.log("Form submission failed!");
            messageDiv.innerHTML = '<p style="color: red;">Oops! Something went wrong. Please try again.</p>';
        }
    })
    .catch(error => {
        console.log("Error:", error);
        messageDiv.innerHTML = '<p style="color: red;">Oops! Something went wrong. Please try again.</p>';
    });
});