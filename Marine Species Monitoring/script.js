// Mobile Menu Toggle
const mobileMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("showing");
});

// Smooth Scrolling for Nav Links
const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetID = event.target.getAttribute("href");
        if (targetID.startsWith("#")) {  // Ensure only internal links are targeted
            const targetSection = document.querySelector(targetID);
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjusting for the fixed navbar height
                behavior: "smooth"
            });
        }
    });
});

// Active Class on Scroll
const sections = document.querySelectorAll("section"); // Collect all sections

function activateLinkOnScroll() {
    let scrollPosition = window.scrollY;

    // Loop through each section to find the one currently in the viewport
    sections.forEach(section => {
        const sectionOffsetTop = section.offsetTop - 90; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;

        // Check if the scroll position is within this section
        if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
            const currentID = section.getAttribute("id");
            // Remove 'active' class from all links
            navLinksItems.forEach(link => link.classList.remove("active"));
            // Add 'active' class to the link corresponding to the current section
            const activeLink = document.querySelector(a[href="#${currentID}"]);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

window.addEventListener('scroll', activateLinkOnScroll);

// Call function to set the initial active class when the page is loaded
document.addEventListener('DOMContentLoaded', activateLinkOnScroll);

// List of rare marine species with image URLs
const species = [
    {
        name: "Flamboyant Cuttlefish",
        image: "https://cdn.pixabay.com/photo/2016/07/24/06/37/flamboyant-cuttlefish-1537987_1280.jpg", // Image URL or file path
        description: "A tiny, colorful species that changes its body color to blend with surroundings or as a defense."
    },
    {
        name: "Vampire Squid",
        image: "https://media.istockphoto.com/id/1333996086/photo/ammonoids-baculite-bear.jpg?s=612x612&w=0&k=20&c=aNGDn6jtSL02hnYu7xYU7D30vxbz-vyu6JQpuSvEBw8=",
        description: "A deep-sea species that thrives in low oxygen environments, with eerie red eyes and webbed arms."
    },
    {
        name: "Leafy Sea Dragon",
        image: "https://media.istockphoto.com/id/1793484300/photo/leafy-seadragon-phycodurus-eques-from-western-australia.jpg?s=612x612&w=0&k=20&c=VMJi3ieMczTgDB4aDvcKpo1qQ5OWELUVBrhwgFO8EcI=",
        description: "A species resembling seaweed, camouflaging against predators in its coastal habitat."
    },
    {
        name: "Dumbo Octopus",
        image: "https://d.newsweek.com/en/full/1191327/10-29-dumbo-octopus.png?w=1200&f=46967171dabc5451396bcace0622ccbc",
        description: "Named after its ear-like fins, this cute deep-sea octopus swims by flapping its 'ears'."
    },
    {
        name: "Giant Oarfish",
        image: "https://i.pinimg.com/originals/3a/67/0f/3a670fd5e7b91e7fd81025bf287c78fd.png",
        description: "The world's longest bony fish, often considered the origin of sea serpent myths."
    },
    {
        name: "Sperm Whale",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Vb7T9zyQOQmB-zVLu5nk61lCYfiGX9jPNg&s",
        description: "The world's rarest marine mammal, critically endangered with fewer than 30 individuals left."
    },
    {
        name: "Goblin Shark",
        image: "https://tse2.mm.bing.net/th?id=OIP.6vvckU2yWNHH9dV4oC1XZgHaEE&pid=Api&P=0&h=180",
        description: "A deep-sea shark known for its unusual, elongated snout and protrusible jaws."
    },
    {
        name: "Sawfish",
        image: "https://tse4.mm.bing.net/th?id=OIP.R7Iodfw6Da5RRHvcrUN54AHaFd&pid=Api&P=0&h=180",
        description: "Known for its saw-like snout, which it uses to hunt fish by slashing through schools."
    },
    {
        name: "Peacock Mantis Shrimp",
        image:"https://i.ytimg.com/vi/NRZ6r1cHZ6U/maxresdefault.jpg",
        description: "A colorful, aggressive shrimp with powerful claws that can strike at the speed of a bullet."
    },
    {
        name: "Barrel-eye Fish",
        image: "https://tse1.mm.bing.net/th?id=OIP.XQ2XyFZu_KfA2-LLbmt5LAHaEV&pid=Api&P=0&h=180",
        description: "A deep-sea fish with a transparent head, allowing it to look upwards through its skull."
    }
];

// Function to render species cards dynamically
const speciesGrid = document.getElementById('speciesGrid');

species.forEach(species => {
    // Create a card container
    const card = document.createElement('div');
    card.classList.add('species-card');

    // Create an image element
    const img = document.createElement('img');
    img.src = species.image;
    img.alt = species.name;

    // Create card content (name and description)
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const speciesName = document.createElement('h3');
    speciesName.textContent = species.name;

    const speciesDesc = document.createElement('p');
    speciesDesc.textContent = species.description;

    // Append elements to card
    cardContent.appendChild(speciesName);
    cardContent.appendChild(speciesDesc);
    card.appendChild(img);
    card.appendChild(cardContent);

    // Add the card to the grid
    speciesGrid.appendChild(card);
});

// Initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Chart.js for data visualization
const ctx = document.getElementById('dataChart').getContext('2d');
const dataChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Species 1', 'Species 2', 'Species 3'],
        datasets: [{
            label: '# of Sightings',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

