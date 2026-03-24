// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    // Active Nav Links
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove Toggle Icon & Navbar When Click Navbar Link
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form, .edu-panels', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .timeline-item:nth-child(odd)', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .timeline-item:nth-child(even)', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Computer Science Student', 'Python Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Animate Skill Bars on Scroll
const skillBoxes = document.querySelectorAll('.skills-box');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let progressLines = entry.target.querySelectorAll('.progress-line span');
            progressLines.forEach(line => {
                line.style.transform = 'scaleX(1)';
            });
        }
    });
}, { threshold: 0.5 });

skillBoxes.forEach(box => {
    observer.observe(box);
});
