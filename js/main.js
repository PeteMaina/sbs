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

// Enhanced logo interactions
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.magic-logo');
    
    if (logo) {
        // Add click animation
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add hover effects
        logo.addEventListener('mouseenter', function() {
            this.classList.add('glow');
        });

        logo.addEventListener('mouseleave', function() {
            this.classList.remove('glow');
        });

        // Pulsing animation for attention
        setInterval(() => {
            logo.classList.toggle('glow');
        }, 4000);
    }

    // Smooth scroll for navigation links (accounting for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
    });
});