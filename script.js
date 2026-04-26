// Smooth fade-in animation when scrolling
const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Simple contact form handler (no backend)
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mesajınız gönderildi (simülasyon). Teşekkür ederiz!");
  e.target.reset();
});
