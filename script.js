

// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Change navbar on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Get references to the slider inputs and value displays
  const amountSlider = document.getElementById('amount');
  const durationSlider = document.getElementById('duration');
  const amountValue = document.getElementById('amount-value');
  const durationValue = document.getElementById('duration-value');

  // Initialize the displayed values
  amountValue.textContent = amountSlider.value;
  durationValue.textContent = durationSlider.value;

  // Update displayed value on input change
  amountSlider.addEventListener('input', function() {
    amountValue.textContent = amountSlider.value;
  });

  durationSlider.addEventListener('input', function() {
    durationValue.textContent = durationSlider.value;
  });
});



const paybackpalsTestimonials = [
  {
      name: "John Doe",
      age: 28,
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "PayBackPals helped me when I needed urgent cash. The process was smooth and fast."
  },
  {
      name: "Jane Smith",
      age: 32,
      role: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "I was able to cover my medical bills with a quick loan from PayBackPals. Great service!"
  },
  {
      name: "Michael Lee",
      age: 25,
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote: "I had an unexpected expense, but PayBackPals saved the day. Highly recommend."
  },
  {
      name: "Samantha White",
      age: 29,
      role: "Copywriter",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "Their support team was helpful and the loan process was super simple."
  },
  {
      name: "Carlos Sanchez",
      age: 34,
      role: "Sales Manager",
      image: "https://randomuser.me/api/portraits/men/74.jpg",
      quote: "The approval process was fast, and I received the funds in no time. PayBackPals is my go-to."
  },
  {
      name: "Anna Wright",
      age: 30,
      role: "HR Specialist",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "I was able to pay off an emergency bill quickly thanks to PayBackPals. Great service!"
  },
  {
      name: "James Brown",
      age: 40,
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      quote: "Running a business is hard, but PayBackPals made getting a loan easy when I needed it."
  },
  {
      name: "Lucy Miller",
      age: 27,
      role: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      quote: "I was struggling before payday, and PayBackPals came through for me. A lifesaver!"
  },
  {
      name: "Ethan Scott",
      age: 31,
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
      quote: "I never expected the process to be so fast and easy. PayBackPals exceeded my expectations."
  },
  {
      name: "Olivia Johnson",
      age: 35,
      role: "Accountant",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      quote: "PayBackPals gave me the financial support I needed when I was in a tight spot. Thank you!"
  }
];

let currentTestimonialIndex = 0;

function displayTestimonial(index) {
  const testimonialContainer = document.getElementById('paybackpals-testimonial');
  const { name, age, role, image, quote } = paybackpalsTestimonials[index];
  testimonialContainer.innerHTML = `
      <div class="paybackpals-testimonial-card">
          <img src="${image}" alt="${name}">
          <p>"${quote}"</p>
          <div class="paybackpals-client-info">
              <span class="paybackpals-client-name">${name}, ${age}</span>
              <br>
              <span class="paybackpals-client-role">${role}</span>
          </div>
      </div>
  `;
}

document.querySelector('.paybackpals-prev-btn').addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + paybackpalsTestimonials.length) % paybackpalsTestimonials.length;
  displayTestimonial(currentTestimonialIndex);
});

document.querySelector('.paybackpals-next-btn').addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % paybackpalsTestimonials.length;
  displayTestimonial(currentTestimonialIndex);
});

// Initial display
displayTestimonial(currentTestimonialIndex);
