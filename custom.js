// Function to get and display the current year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.querySelector("#displayYear");
  if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
  }

  // Owl Carousel initialization (merged into one call)
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 5 }
    }
  });

  // Initialize Bootstrap Carousels
  $('#customCarousel1, #customCarousel2').carousel({
    interval: 3000,
    ride: 'carousel',
    pause: 'hover',
    wrap: true
  });

  // Toggle Description function (optimized for clarity)
  function toggleDescription(element) {
    const description = element.previousElementSibling;
    description.classList.toggle('expanded');
    element.textContent = description.classList.contains('expanded') ? 'Read Less' : 'Read More';
  }

  // History Animation on Scroll
  const sections = {
    about: document.querySelector('.about_section'),
    slider: document.querySelector('.truck_slider_section'),
    timelineItems: document.querySelectorAll('.timeline-item')
  };

  function onScroll() {
    Object.entries(sections).forEach(([key, section]) => {
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Trigger on page load

  // Contact Form Reset
  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset(); // Reset the form fields more concisely
  });

  // Slideshow logic (combined and simplified)
  let slideIndex = [1, 1];
  let slideId = ["mySlides1", "mySlides2"];

  function showSlides(n, no) {
    let slides = document.getElementsByClassName(slideId[no]);
    slideIndex[no] = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[slideIndex[no] - 1].style.display = "block";
  }

  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }

  showSlides(1, 0);
  showSlides(1, 1);

  // Google Map Initialization
  function myMap() {
    new google.maps.Map(document.getElementById("googleMap"), {
      center: new google.maps.LatLng(40.712775, -74.005973),
      zoom: 18,
    });
  }

  // Intersection Observer for Vision Section Animation
  const section = document.querySelector('.vision-section');
  const observerOptions = {
    root: null, // Observing the entire viewport
    threshold: 0.5 // Trigger when 50% of the section is visible
  };

  // Callback to handle intersection (visible/invisible)
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      } else {
        entry.target.classList.add('hidden');
        entry.target.classList.remove('visible');
      }
    });
  };

  // Create IntersectionObserver and observe the section
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(section);
});
