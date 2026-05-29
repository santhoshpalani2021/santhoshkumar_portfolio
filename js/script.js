function showSection(className) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.classList.remove('active'));
  
    const target = document.querySelector(`.${className}`);
    if (target) {
      target.classList.add('active');
    }
  }
  
  // --- Home section text slider ---
  const messages = [
    "Welcome to my personal site.",
    "I'm a passionate developer.",
    "I love building web apps.",
    "Let's build something amazing!",
  ];
  
  let currentIndex = 0;
  const sliderText = document.querySelector('.slider-text');
  
  function updateSliderText() {
    currentIndex = (currentIndex + 1) % messages.length;
    sliderText.textContent = messages[currentIndex];
    sliderText.classList.remove('slide');
    void sliderText.offsetWidth; // trigger reflow to restart animation
    sliderText.classList.add('slide');
  }
  
  // Change text every 2 seconds
  setInterval(updateSliderText, 2000);



  // start of contact
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message submitted! (This can be replaced with real backend or mailto)");
  });  
  
  // end of contact 
  