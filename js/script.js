document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE MENU TOGGLE ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHT ---
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    // Close mobile menu when a nav link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && navLinks) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // 100px offset to trigger active state slightly before reaching top
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 3. CONTACT FORM SUBMISSION HANDLER ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            // Get form values
            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            
            // Display confirmation alert
            alert(`Thank you ${name ? name : ''}, Rimsha will get back to you soon!`);
            
            // Clear form fields
            this.reset();
        });
    }

});
