function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var errorElement = document.getElementById("error");

    // Simple validation
    if (username.trim() === "") {
        errorElement.innerText = "Please enter your username";
        return false;
    }
    if (email.trim() === "") {
        errorElement.innerText = "Please enter your email";
        return false;
    }
    if (!isValidEmail(email)) {
        errorElement.innerText = "Please enter a valid email address";
        return false;
    }
    if (password.trim() === "") {
        errorElement.innerText = "Please enter your password";
        return false;
    }
    if (!isValidPassword(password)) {
        errorElement.innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        return false;
    }
    if (!isValidPhoneNumber(phone)) {
        errorElement.innerText = "Please enter a valid phone number";
        return false;
    }

    // If all validations pass, return true to submit the form
    return true;
}

function isValidEmail(email) {
    // Simple email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Password validation using regex
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

function isValidPhoneNumber(phone) {
    // Phone number validation using regex (10 digits only)
    var phoneRegex = /^\d{10}$/;

    // Additional formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
    var additionalFormatsRegex = /^(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;

    return phoneRegex.test(phone) || additionalFormatsRegex.test(phone);
}

// Password strength check
var passwordInput = document.getElementById("password");
var passwordStrength = document.getElementById("passwordStrength");

passwordInput.addEventListener("input", function() {
    var password = passwordInput.value;
    var strengthText = "";
    var strengthColor = "";

    if (password.length < 8) {
        strengthText = "Poor";
        strengthColor = "red";
    } else if (password.length < 10) {
        strengthText = "Medium";
        strengthColor = "orange";
    } else {
        strengthText = "Strong";
        strengthColor = "green";
    }

    passwordStrength.innerText = "Strength: " + strengthText;
    passwordStrength.style.color = strengthColor;
});