// Scroll Animations
ScrollReveal().reveal('.animated', {
    delay: 200,
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200
});

// Cursor Animation
document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

var cursor = document.querySelector('.cursor');
document.addEventListener('mouseover', function() {
    cursor.classList.add('active');
});

document.addEventListener('mouseout', function() {
    cursor.classList.remove('active');
});

function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform login validation and processing here
  
  // Redirect to dashboard.html on successful login
  window.location.href = "dashboard.html";
}

// Function to handle sign-up form submission
function handleSignUp(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform sign-up validation and processing here
  
  // Redirect to success.html on successful sign-up
  window.location.href = "success.html";
}

// Get the login form element
const loginForm = document.getElementById("login-form");

// Add event listener to the login form submit event
loginForm.addEventListener("submit", handleLogin);

// Get the sign-up form element
const signUpForm = document.getElementById("signup-form");

// Add event listener to the sign-up form submit event
signUpForm.addEventListener("submit", handleSignUp);
