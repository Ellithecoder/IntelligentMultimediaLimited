const images = [
    'images/slide2.jpg', 
    'images/slide1.jpg', 
    'images/slide5.jpg', 
    'images/slide3.jpg'
];

let currentIndex = 0;
const heroBackground = document.querySelector('.hero-background');

// Function to change background image
function changeBackground() {
    heroBackground.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Set initial background image
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Highlight navigation links on scroll
window.addEventListener('scroll', highlightNav);

function highlightNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust based on your fixed header height
            behavior: 'smooth'
        });
    });
});

let currentSlideIndex = 0; // Current index for the slideshow
const slides = document.querySelectorAll('.work-box'); // Select all work boxes
const totalSlides = slides.length; // Total number of slides
const imagesToShow = 3; // Number of images to show at a time

function displaySlides() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none'; // Hide all initially
    });

    // Display the current set of images
    for (let i = 0; i < imagesToShow; i++) {
        const indexToShow = (currentSlideIndex + i) % totalSlides; // Calculate index for the current slide
        slides[indexToShow].style.display = 'block'; // Show the current set of slides
    }

    // Move to the next set of images
    currentSlideIndex = (currentSlideIndex + imagesToShow) % totalSlides; // Increment the index by the number of images to show

    // Automatically show the next set of images every 5 seconds
    setTimeout(displaySlides, 5000); // Change images every 5 seconds
}

// Start the slideshow
displaySlides();




