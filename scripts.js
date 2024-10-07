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

// Highlight navigation links on scroll
window.addEventListener('scroll', highlightNav);

function highlightNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in view
        if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Add active class to the current link
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

// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

// Add click event listener to each button
dropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
        const organization = this.parentElement;
        organization.classList.toggle('active'); // Toggle the active class
    });
});


function initMap() {
    // Create a map centered on a specific location (e.g., Kingston)
    const center = { lat: 17.9973, lng: -76.7936 }; // Adjust this to your desired center point
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: center,
    });

    // Locations to highlight (replace these with your actual locations)
    const locations = [
        { lat: 18.0179, lng: -76.7976, name: "Constant Spring" },
        { lat: 17.9685, lng: -76.8963, name: "Portmore" },
        { lat: 18.0317, lng: -77.1004, name: "Santa Cruz" },
        { lat: 18.0208, lng: -76.9708, name: "Jackson Town" },
        { lat: 18.2719, lng: -77.1551, name: "Black River" },
        { lat: 18.0158, lng: -76.9751, name: "Cross Roads" },
        { lat: 17.9633, lng: -77.1924, name: "May Pen" },
        { lat: 18.3885, lng: -77.0252, name: "Savanna-la-mar" },
        { lat: 17.8720, lng: -77.2185, name: "Chapleton" },
        { lat: 18.1854, lng: -76.4446, name: "Port Antonio" },
        { lat: 18.4446, lng: -77.0230, name: "Christiana" },
        { lat: 18.4270, lng: -76.6625, name: "St.Ann's Bay" },
        { lat: 18.0797, lng: -76.5295, name: "Morant Bay" },
        { lat: 18.2677, lng: -77.1830, name: "Lucea" },
        { lat: 18.3586, lng: -77.3298, name: "Port Morant" },
        { lat: 18.0312, lng: -77.5497, name: "Mandeville" },
        { lat: 18.4656, lng: -77.9138, name: "Montego Bay" },
        { lat: 17.9574, lng: -77.1244, name: "Old Harbour" },
        { lat: 18.0835, lng: -76.6875, name: "Port Maria" },
        { lat: 18.0052, lng: -76.8013, name: "Downtown Kingston" },
        { lat: 18.4690, lng: -77.6767, name: "Falmouth" },
        { lat: 18.1055, lng: -76.8981, name: "Buff Bay" },
        { lat: 18.0201, lng: -77.4090, name: "Lionel Town" },
        { lat: 18.0823, lng: -77.0564, name: "Linstead" },
        { lat: 18.2743, lng: -76.8982, name: "Brown's Town" },
        { lat: 18.0258, lng: -77.2242, name: "Moneague" },
        // Add more locations as needed
    ];

    // Add markers for each location
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });
    });
}

// Call the initMap function when the window loads
window.onload = initMap;



