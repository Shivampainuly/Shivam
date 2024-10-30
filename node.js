// Trailing Cursor Script
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('trailing-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Form Submission Scripts
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let mailtoLink = `mailto:your-email@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});

<script>
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('trailing-cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
</script>

document.getElementById('chatbox-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('chat-name').value;
    let email = document.getElementById('chat-email').value;
    let message = document.getElementById('chat-message').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    let chatMailtoLink = `mailto:your-email@gmail.com?subject=Chat from ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}%0D%0A${encodeURIComponent(message)}`;
    window.location.href = chatMailtoLink;
});
