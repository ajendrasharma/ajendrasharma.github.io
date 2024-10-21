// scripts.js

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Modal Functionality
const modal = document.getElementById('contactModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-button');

// Open the modal when "Get in Touch" button is clicked
openModalButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
