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
    // Create a map centered on a specific location
    const center = { lat: 17.9973, lng: -76.7936 }; // Adjust this to your desired center point
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: center,
    });

    // Locations to highlight
    const locations = [
        { lat: 18.04322, lng: -76.79467, 
            name: "Constant Spring Tax Office", 
            info: "Information about the Constant Spring Tax Office and Work IML did there",
            img: "images/slide8.jpg"
        },
        { lat: 17.96270, lng: -76.89633, name: "Portmore Tax Office" },
        { lat: 18.05080, lng: -77.69878, name: "Santa Cruz Tax Office" },
        { lat: 18.41398, lng: -77.48699, name: "Jackson Town Tax Office" },
        { lat: 18.2719, lng: -77.1551, name: "Black River Tax Office" },
        { lat: 17.99605, lng: -76.78673, name: "Cross Roads Tax Office" },
        { lat: 17.9633, lng: -77.1924, name: "May Pen Tax Office" },
        { lat: 18.3885, lng: -77.0252, name: "Savanna-la-mar Tax Office" },
        { lat: 17.8720, lng: -77.2185, name: "Chapleton Tax Office" },
        { lat: 18.17155, lng: -76.44762, name: "Port Antonio Tax Office" },
        { lat: 18.17099, lng: -77.49128, name: "Christiana Tax Office" },
        { lat: 18.43787, lng: -77.20090, name: "St.Ann's Bay Tax Office" },
        { lat: 18.0797, lng: -76.5295, name: "Morant Bay Tax Office" },
        { lat: 18.2677, lng: -77.1830, name: "Lucea Tax Office" },
        { lat: 18.3586, lng: -77.3298, name: "Port Morant Tax Office" },
        { lat: 18.0312, lng: -77.5497, name: "Mandeville Tax Office" },
        { lat: 18.4656, lng: -77.9138, name: "Montego Bay Tax Office" },
        { lat: 17.9574, lng: -77.1244, name: "Old Harbour Tax Office" },
        { lat: 18.0835, lng: -76.6875, name: "Port Maria Tax Office" },
        { lat: 18.0052, lng: -76.8013, name: "Downtown Kingston Tax Office" },
        { lat: 18.4690, lng: -77.6767, name: "Falmouth Tax Office" },
        { lat: 18.1055, lng: -76.8981, name: "Buff Bay Tax Office" },
        { lat: 18.0201, lng: -77.4090, name: "Lionel Town Tax Office" },
        { lat: 18.0823, lng: -77.0564, name: "Linstead Tax Office" },
        { lat: 18.2743, lng: -76.8982, name: "Brown's Town Tax Office" },
        { lat: 18.0258, lng: -77.2242, name: "Moneague Office" },
        { lat: 17.99833, lng: -76.92916, name: "Spanish Town Tax Office" },
        // Add more locations as needed
    ];

    let activeInfoWindow = null; // Track the currently active infoWindow

    // Add markers for each location
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
        });

        // Create an InfoWindow for each location
const infoWindow = new google.maps.InfoWindow({
    content: `
                <div style="width: 300px; padding: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: white; border-radius: 8px;">
                    <h3 style="font-size: 18px; font-family: Arial, sans-serif; color: #233e98; margin-bottom: 10px;">${location.name}</h3>
                    <p style="font-size: 14px; font-family: Arial, sans-serif; color: #333; margin-bottom: 10px;">
                        ${location.info || "No additional info available."}
                    </p>
                    ${location.img ? `<img src="${location.img}" alt="${location.name}" style="width: 100%; height: auto; border-radius: 4px;"/>` : ""}
                </div>
            `
});
marker.addListener("click", () => {
    console.log("Marker clicked: " + location.name); // Log marker clicks for debugging
    if (activeInfoWindow){
        activeInfoWindow.close();
    }
    infoWindow.open(map, marker);
    activeInfoWindow = infoWindow;
});

    });

}
// Call the initMap function when the window loads
window.onload = initMap;

