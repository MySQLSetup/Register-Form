document.getElementById('serverForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting right away

    const gmailField = document.getElementById('gmail');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(gmailField.value)) {
        gmailField.style.borderColor = 'red';
        alert("Please enter a valid Gmail address.");
        return;
    }

    // Password confirmation validation
    if (password !== confirmPassword) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
        alert("Passwords do not match.");
        return;
    }

    // Show loading spinner
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'flex'; // Show spinner

    // Simulate a delay to show the spinner for 2 seconds
    setTimeout(() => {
        // Hide spinner
        spinner.style.display = 'none';

        // Show confirmation modal
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'flex';
    }, 300000); // Delay of 2 seconds (2000ms)
});

// Close confirmation modal after clicking finish
document.getElementById('finishButton').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
    window.location.href = 'https://imageproxyb.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/13830bf7e966d9b3e91383aef4ddbf4e7686fe748dff517cdd13ed80280831a2_1.jpg'; // Replace this URL with your redirect URL

});
