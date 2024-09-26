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


// When the user scrolls, run the highlightNav function
window.addEventListener('scroll', highlightNav);

function highlightNav() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    // Determine the current section by comparing scroll position with section offsets
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Add active class to the nav link corresponding to the current section
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

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

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}




