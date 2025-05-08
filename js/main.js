// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        toggle.addEventListener('click', () => {
            item.classList.toggle('active');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });

    // Contact Form Submission (Success Message)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
        });
    }

    // Cookie Consent
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptBtn = document.querySelector('.cookie-accept');
    acceptBtn.addEventListener('click', () => {
        cookieConsent.style.display = 'none';
        localStorage.setItem('cookieAccepted', 'true');
    });

    // Hide cookie banner if already accepted
    if (localStorage.getItem('cookieAccepted') === 'true') {
        cookieConsent.style.display = 'none';
    }
});
