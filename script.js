// Toggle media display for publications
function toggleMedia(publicationId) {
    const mediaContainer = document.getElementById(publicationId);
    const button = event.target.closest('.media-button');
    
    if (mediaContainer.classList.contains('active')) {
        mediaContainer.classList.remove('active');
        button.querySelector('span:last-child').textContent = 'View Media';
    } else {
        // Close all other media containers
        document.querySelectorAll('.media-container.active').forEach(container => {
            container.classList.remove('active');
        });
        document.querySelectorAll('.media-button').forEach(btn => {
            btn.querySelector('span:last-child').textContent = 'View Media';
        });
        
        // Open the clicked one
        mediaContainer.classList.add('active');
        button.querySelector('span:last-child').textContent = 'Hide Media';
    }
}

// Modal for full-size images
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.classList.add('active');
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('close')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for anchor links
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

// Add loading placeholder for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                border-radius: 8px;
                font-weight: 500;
            `;
            placeholder.textContent = 'Image placeholder - Add your media file';
            this.parentNode.insertBefore(placeholder, this);
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.publication-card, .project-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

