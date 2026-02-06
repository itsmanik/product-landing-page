// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // In a real application, you would send this to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you for subscribing with email: ${email}\nYou'll receive updates and exclusive offers soon!`);
        this.reset();
    });
}

// Pricing Card Selection
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('h3').textContent;
        const price = this.closest('.pricing-card').querySelector('.price').textContent;
        
        alert(`You selected: ${plan} (${price})\nThis would redirect to checkout in a real application.`);
        
        // Highlight the selected card (for demo)
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        const selectedCard = this.closest('.pricing-card');
        selectedCard.style.boxShadow = '0 15px 40px rgba(58, 134, 255, 0.3)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            selectedCard.style.boxShadow = '';
        }, 2000);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.feature-card, .pricing-card, .review-card').forEach(card => {
    observer.observe(card);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .feature-card, .pricing-card, .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate-in, 
    .pricing-card.animate-in, 
    .review-card.animate-in {
       
