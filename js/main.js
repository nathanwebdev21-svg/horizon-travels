document.addEventListener('DOMContentLoaded', function() {
  

const header = document.querySelector('header');

if (header) {
const headerHeight = header.offsetHeight;
document.body.style.setProperty('--header-height', headerHeight + 'px')
}





const back2Top = document.querySelector('#backtoTop');

if (back2Top) {
  
window.addEventListener('scroll', () => {
  
  if (window.scrollY > 400) {
    back2Top.classList.add('on');
  }
  else {
    back2Top.classList.remove('on');
  }
});

back2Top.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
}





const burger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', ()=> {
  burger.classList.toggle('move');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => { 
  link.addEventListener('click', ()=> {
    burger.classList.remove('move');
    navLinks.classList.remove('active');
  });
});



const animatedNum = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  
  if (entry.isIntersecting) {
    
    const text = entry.target.textContent;
    const cleanText = text.replace("+", "").replace(",", "");
    const value = Number(cleanText);
    
    let current = 0;
    
    const duration = 3000;
    const interval = 20;
    const increment = value / (duration/interval);
    
    
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      entry.target.textContent = 
      Number.isInteger(value)
      ? Math.floor(current) + "+"
      :current.toFixed(1)
      ;

    }, interval);
   observer.unobserve(entry.target);
  }
});
});

animatedNum.forEach(number => {
  observer.observe(number);
});


const testimonials = [
  {
    name: "Emily Carter",
    location: "London, UK",
    comment: "Our trip to Japan was absolutely unforgettable.Every hotel, activity, and transfer was perfectly organized.",
    image: "../images/testimonials/emily.jpeg"
  },
  
  {
    name: "Daniel Morgan",
    location: "New York, USA",
    comment: "Everything was handled perfectly from the moment we booked. The whole experience felt effortless.",
    image: "../images/testimonials/daniel.jpeg"
  },
  
  {
    name: "Sophia Williams",
    location: "Sydney, Australia",
    comment: "Horizon Travels made our vacation incredibly easy. The destinations, hotels, and activities were all amazing.",
    image: "../images/testimonials/sophia.webp"
  }
];

const  tImage = document.querySelector('.t-image');
const  tName= document.querySelector('.t-name');
const  tLocation = document.querySelector('.t-location');
const  tStars = document.querySelector('.t-stars');
const tComment = document.querySelector('.t-comment');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const dots = document.querySelectorAll('.dot');
const transition = document.querySelector('.trans-wrapper');

let currentTestimonial = 0;


  
function showTestimonial(index) {
  const testimonial = testimonials[index];
  
  if (!tImage || !tName || !tLocation || !tComment || !prevBtn || !nextBtn) {
    return;
  }
  
  if (transition) {
      transition.classList.add('fade');
  }
  
  setTimeout(() => {
    
  tImage.src = testimonial.image;
  tName.textContent = testimonial.name;
  tLocation.textContent = testimonial.location;
  tComment.textContent = `"${testimonial.comment}"`;
  
  transition.classList.remove('fade');
  }, 250);

  
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  dots[index].classList.add('active');
};


if (prevBtn && nextBtn && dots.length) {
  
prevBtn.addEventListener('click', () => {
  currentTestimonial--;
  
  if (currentTestimonial<0) {
    currentTestimonial = testimonials.length-1;
  }
  showTestimonial(currentTestimonial);
  resetAutoslide();
});



nextBtn.addEventListener('click', () => {
  currentTestimonial++;
  
  if (currentTestimonial>= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
  resetAutoslide();
});



dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
    resetAutoslide();
  });
});


  
let autoSlide = setInterval(() => {
  currentTestimonial++;
  
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
}, 5000);

function resetAutoslide() {
  clearInterval(autoSlide);
  
  autoSlide = setInterval(() => {
    currentTestimonial++;
    
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial(currentTestimonial);
  }, 5000);
};
}



const sections = document.querySelectorAll('section');
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
sections.forEach(section => {
  observer2.observe(section);
});



const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(button => {
  button.addEventListener('click', () =>  {
    
    filterBtns.forEach(button => {
      button.classList.remove('active');
    });
    
    button.classList.add('active');
    const selectedCategory = button.textContent.toLowerCase();
    
    cards.forEach(card => {
      const cardCategories = card.dataset.category;
      if (selectedCategory === 'all') {
      card.classList.add('fetch');
      }
    
      else if (cardCategories.includes(selectedCategory)) {
      card.classList.add('fetch');
      }

     else {
        card.classList.remove('fetch');
      }
    
      
    });
  
  })
});

cards.forEach(card => {
  card.classList.add('fetch');
});

 

const parameter= new URLSearchParams(window.location.search);
const place = parameter.get('destination');


const selectedDestination = document.getElementById('selected-destination');
const selectedPackage = document.getElementById('selected-package');
const selectedDuration = document.getElementById('selected-duration');
const selectedPrice = document.getElementById('selected-price');
const packageParam = parameter.get('package');

const lilDatabase = {
  
destinations: {
  maldives: {
    destination: "Maldives",
    package: "Maldives Escape",
    duration: "5 Days",
    price: "$2,499"
  },
  
  kyoto: {
    destination: "Kyoto, Japan",
    package: "Japan Explorer",
    duration: "7 Days",
    price: "$1,299"
  },
  
  santorini: {
    destination: "Santorini, Greece",
    package: "Greek Island Escape",
    duration: "6 Days",
    price: "$1,499"
  },
  
  zermatt: {
    destination: "Zermatt, Switzerland",
    package: "Swiss Alps Adventure",
    duration: "8 Days",
    price: "$1,899"
  },
  
  reykjavic: {
    destination: "Reykjavík, Iceland",
    package: "Iceland Adventure",
    duration: "7 Days",
    price: "$1,699"
  },
  
  bali: {
    destination: "Bali, Indonesia",
    package: "Bali Paradise",
    duration: "6 Days",
    price: "$999"
  }
},

packages: {
  "japan-explorer": {
   destination: "Kyoto, Japan",
   package: "Japan Explorer",
   duration: "7 Days",
   price: "$1,299"
  },
 
 "greek-islands-escape": {
   destination: "Santorini, Greece",
   package: "Greek Islands Escape",
   duration: "6 Days",
   price: "$1,599"
  },
 "maldives-escape": {
   destination: "Maldives",
   package: "Maldives Luxury Retreat",
   duration: "5 Days",
   price: "$2,499"
  }
}
}

if(selectedDestination) {
if (place) {
const selectedOne = lilDatabase.destinations[place];

selectedDestination.textContent = selectedOne.destination;
selectedPackage.textContent = selectedOne.package;
selectedDuration.textContent = selectedOne.duration;
selectedPrice.textContent = selectedOne.price;
}


else if (packageParam) {
  const selectedTwo = lilDatabase.packages[packageParam];

selectedDestination.textContent = selectedTwo.destination;
selectedPackage.textContent = selectedTwo.package;
selectedDuration.textContent = selectedTwo.duration;
selectedPrice.textContent = selectedTwo.price;
}

else {
  selectedDestination.textContent = "Choose a destination";
  selectedPackage.textContent = "Select a package";
  selectedDuration.textContent = "--";
  selectedPrice.textContent = "--";
}
}





const bookingForm = document.getElementById('booking-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const destinationInput = document.getElementById('destination');
const travelDateInput = document.getElementById('travel-date');
const travelersInput = document.getElementById('travelers');
const packageInput = document.getElementById('package');
const messageInput = document.getElementById('message')

const formStatus = document.getElementById('form-status');
const successMessage = document.querySelector('.booking-success')

function removeStatus() {
  setTimeout(() => {
    formStatus.textContent = "";
    }, 5000);
}

function removeSuccess() {
  setTimeout(() => {
    successMessage.textContent = "";
  }, 5000);
}


if (bookingForm) {
  
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const travelDate = travelDateInput.value;
    const travelers = Number(travelersInput.value);
    const today = new Date().toISOString().split('T')[0];
    
    if (travelDate < today) {
      formStatus.textContent = "Please choose a future travel date.";
      removeStatus();
      return;
    }
    
    if (travelers > 12) {
      formStatus.textContent = "Number of travelers can't be higher than 12.";
      removeStatus();
      return;
    }
    
    console.log('Validation passed. Packaging data...');
    
    const formData = new FormData(bookingForm);
    
    fetch(bookingForm.action, {
      method: bookingForm.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        
        if (successMessage) {
          successMessage.textContent = "Thanks! Your booking request was sent.";
          formStatus.textContent = "";
          removeSuccess();
        }
        bookingForm.reset();
      }
      
      else {
        return response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            formStatus.textContent = data['errors'].map(error => error['message']).join(', ');
          } else {
            formStatus.textContent = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch(error => {
      formStatus.textContent = "Oops! There was a problem network connecting to the server.";
    });
  });
}


});


