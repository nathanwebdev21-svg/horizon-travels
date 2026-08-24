const destinationData = {
  
  kyoto: {
    title: "Kyoto",
    country: "Japan",
    rating: "4.9",
    stars: "★★★★★",
    duration: "7 Days",
    price: "$1,299",
    image: "../images/destination-images/IMG_0184.jpeg",
    highlights: [
      "Historic Temples & Shrines",
      "Authentic Japanese Cuisine",
      "Arashiyama Bamboo Grove",
      "Mount Fuji Day Trip"
    ],
    tagline: "Where ancient tradition meets modern Japan.",
    description: "Explore Kyoto’s peaceful temples, traditional streets, beautiful gardens, and unforgettable Japanese culture. From historic shrines to incredible local cuisine, Kyoto offers a journey through Japan’s past and present."
  },
  
  santorini: {
    title: "Santorini",
    country: "Greece",
    rating: "4.8",
    stars: "★★★★★",
    duration: "6 Days",
    price: "$1,499",
    image: "../images/destination-images/IMG_0185.jpeg",
    highlights: [
      "Oia Sunset Experience",
      "Volcanic Beaches",
      "Aegean Sea Cruise",
      "Local Wine Tasting"
    ],
  tagline: "Sunsets, blue seas, and unforgettable island escapes.",
  description: "Discover Santorini’s iconic whitewashed villages, volcanic beaches, and legendary sunsets. Enjoy a relaxing island escape filled with beautiful views, Mediterranean cuisine, and unforgettable experiences."
  },
  
  maldives: {
    title: "Madives",
    country: "Maldives",
    rating: "5.0",
    stars: "★★★★★",
    duration: "5 Days",
    price: "$2,499",
    image: "../images/destination-images/IMG_0186.jpeg",
    highlights: [
      "Private Island Resort",
      "Snorkeling & Diving",
      "Water Sports",
      "Spa & Wellness"
    ],
    tagline: "Your private paradise in the Indian Ocean.",
    description: "Escape to crystal-clear waters, white-sand beaches, and luxurious overwater villas. The Maldives is perfect for relaxing, exploring vibrant marine life, and enjoying a truly unforgettable tropical getaway."
  },
  
  zermatt: {
    title: "Zermatt",
    country: "Switzerland",
    rating: "4.7",
    stars: "★★★★★",
    duration: "8 Days",
    price: "$1,899",
    image: "../images/destination-images/IMG_0187.jpeg",
    highlights: [
      "Matterhorn Views",
      "Alpine Cable Cars",
      "Mountain Adventures",
      "Traditional Swiss Village"
    ],
    tagline: "Alpine adventures beneath the Matterhorn.",
    description: "Experience breathtaking mountain scenery, charming alpine villages, and unforgettable adventures in Zermatt. Whether you’re exploring the mountains or enjoying the peaceful village atmosphere, Switzerland delivers every time."
  },
  
  reykjavik: {
    title: "Reykjavik",
    country: "Iceland",
    rating: "4.5",
    stars: "★★★★★",
    duration: "6 Days",
    price: "$1,699",
    image: "../images/destination-images/IMG_0188.jpeg",
    highlights: [
      "Northern Lights",
      "Blue Lagoon",
      "Volcanic Landscapes",
      "Golden Circle"
    ],
    tagline: "Where fire, ice, and adventure collide.",
    description: "Discover Iceland’s dramatic landscapes, geothermal wonders, waterfalls, and unforgettable northern adventures. Reykjavik is the perfect starting point for exploring one of Europe’s most unique destinations."
  },
  
  bali: {
    title: "Bali",
    country: "Indonesia",
    rating: "4.4",
    stars: "★★★★★",
    duration: "6 Days",
    price: "$999",
    image: "../images/destination-images/IMG_0189.jpeg",
    highlights: [
      "Tropical Beaches",
      "Ancient Temples",
      "Ubud Rice Terraces",
      "Snorkeling & Island Tours"
    ],
    tagline: "Tropical beauty, island culture, and endless adventure.",
    description: "Experience Bali’s lush landscapes, beautiful beaches, ancient temples, and vibrant culture. From relaxing coastal escapes to adventurous inland experiences, Bali has something for every traveler.",
  }
  
}

const urlParams = new URLSearchParams(window.location.search);
const destinationId = urlParams.get('id');

if (destinationId && destinationData[destinationId]) {
  
  const currentData = destinationData[destinationId];
  
  document.querySelectorAll('.detail-title').forEach(span => {
    span.textContent = currentData.title;
  });
  document.getElementById('detail-country').textContent = currentData.country;
  document.getElementById('detail-rating').textContent = currentData.rating;
  document.getElementById('detail-stars').textContent = currentData.stars;
  document.getElementById('detail-duration').textContent = currentData.duration;
  document.getElementById('detail-price').textContent = currentData.price;
  document.getElementById('tagline').textContent = currentData.tagline;
  document.getElementById('detail-description').textContent = currentData.description;
  const heroSection = document.querySelector('.detail-hero');
  
  if (heroSection) {
    heroSection.style.backgroundImage = `url("${currentData.image}")`;
  }
    
  const listContainer = document.querySelector('.detail-highlights-list');
  listContainer.innerHTML = "";
  if (currentData.highlights && Array.isArray(currentData.highlights)) {
   currentData.highlights.forEach(highlightString => {
     const listItem = document.createElement('li');
     listItem.textContent = highlightString;
     listContainer.appendChild(listItem);
   });
  }
  
}
else {
  document.querySelectorAll('.detail-title').forEach(span => {
    span.textContent = "Destination not found";
  });
}

const sections = document.querySelectorAll('section');
const detailsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.add('show');
     
     detailsObserver.unobserve(entry.target)
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  detailsObserver.observe(section);
});



const bookBtn = document.querySelector('.detail-book-btn');
const params = new URLSearchParams(window.location.search);
const travelCity = params.get('id');

bookBtn.href = `packages.html?destination=${travelCity}#booking`;



