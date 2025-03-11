// Initialize Glide.js for the offers section
document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    perView: 3, // Adjust the number of offers shown at once
    gap: 5, // Space between slides
    breakpoints: {
      768: {
        perView: 2, // Two items on tablets
      },
      480: {
        perView: 2, // One item on mobile
      }
    }
  }).mount();
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Initialize Leaflet Map
const map = L.map('map').setView([51.505, -0.09], 13); // Centered on London
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('London, UK')
  .openPopup();

// toggle menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});
