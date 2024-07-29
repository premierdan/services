// document.addEventListener('DOMContentLoaded', () => {
//     // Example interactive functionality: popup message
//     const popup = document.createElement('div');
//     popup.id = 'popup';
//     popup.textContent = 'Welcome to Ptechloop Ltd!';
//     document.body.appendChild(popup);

//     setTimeout(() => {
//         popup.style.display = 'none';
//     }, 3000);
// });







document.addEventListener('DOMContentLoaded', () => {
    // Example interactive functionality: popup message
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.textContent = 'Welcome to Ptechloop Ltd!';
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);

    // Highlight current navigation item
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation (example for a contact form, assuming it exists)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            let valid = true;

            if (!name.value.trim()) {
                valid = false;
                alert('Name is required');
            }
            if (!email.value.trim() || !validateEmail(email.value)) {
                valid = false;
                alert('Valid email is required');
            }
            if (!message.value.trim()) {
                valid = false;
                alert('Message is required');
            }

            if (valid) {
                form.submit();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Toggle navigation menu on small screens
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});







// script.js

// Toggle menu visibility on small screens
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {

    alert('Yes')
    navLinks.classList.toggle('show');

});

// Smooth scroll for navigation links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Popup message function
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500);
        }, 3000);
    }, 100);
}

// Example usage of showPopup function
// showPopup('Welcome to Ptechloop Ltd.!');



