// Simple smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact page specific interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking for contact methods
    const contactButtons = document.querySelectorAll('.contact-btn, .footer-section a');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const method = this.textContent.trim() || this.getAttribute('href');
            console.log(`Contact method used: ${method}`);
            // Here you could add analytics tracking
        });
    });

    // Smooth scroll for roadmap section
    const roadmapLinks = document.querySelectorAll('a[href="#roadmap"]');
    roadmapLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#roadmap').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});