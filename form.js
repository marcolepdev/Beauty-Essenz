document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const formMessage = document.querySelector('#form-message');
    
    let hasError = false;
    
    if (!name || !email || !message || !email.includes('@')) {
        formMessage.textContent = 'Please fill in all mandatory fields.';
        hasError = true;
    } else {
        formMessage.textContent = 'Message sent correctly!';
        formMessage.style.color = 'green';
    }
    
    if (!hasError) {
        document.querySelector('#contact-form').reset();
    }
});
