document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Buttons (Simulated Ordering)
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Thanks for choosing Crust & Co! This button is ready to link to a checkout system.");
        });
    });

    // 2. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Mobile Navigation Menu Toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const visibility = primaryNav.getAttribute('data-visible');
            
            if (visibility === "false" || !visibility) {
                primaryNav.setAttribute('data-visible', true);
                navToggle.setAttribute('aria-expanded', true);
            } else {
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }
});
