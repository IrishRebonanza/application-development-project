document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('user-type').value;

    const userData = { username, password, userType };

    // Store user data (mock database)
    localStorage.setItem(username, JSON.stringify(userData));

    // Redirect based on user type
    if (userType === 'landlord') {
        window.location.href = 'landlord-dashboard.html';
    } else {
        window.location.href = 'boarder-dashboard.html';
    }
});

// Handle login link
document.getElementById('login-link').addEventListener('click', function () {
    // Implement login functionality or redirect to login page
    alert('Login functionality to be implemented.');
});
