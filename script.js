document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        phoneNo: document.getElementById('phoneNo').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        country: document.getElementById('country').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
    };

    try {
        // Send data to the backend
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the unique ID returned by the backend
        document.getElementById('uniqueID').textContent = data.uniqueID;
        document.getElementById('uniqueIDDisplay').classList.remove('hidden');

        // Optional: Clear the form after submission
        document.getElementById('registrationForm').reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    }
});