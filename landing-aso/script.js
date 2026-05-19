// Nav scroll shadow
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile burger — toggle Tailwind's "hidden" / "flex"
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  mobileMenu.classList.toggle('flex', !isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  });
});

// Form submit
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  if (age < 18) {
    alert('Debes ser mayor de 18 años para solicitar la membresía.');
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = 'Enviar solicitud 🌿';
    btn.disabled = false;
    success.classList.remove('hidden');
    setTimeout(() => success.classList.add('hidden'), 5000);
  }, 1200);
});

// Carrusel mobile
const slides = document.getElementById('carouselSlides');
const dots = document.querySelectorAll('.carousel-dot');
const total = dots.length;
let current = 0;
let touchStartX = 0;

function goTo(index) {
  current = (index + total) % total;
  slides.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => {
    d.classList.toggle('bg-g-bright', i === current);
    d.classList.toggle('w-4', i === current);
    d.classList.toggle('bg-white/30', i !== current);
    d.classList.toggle('w-2', i !== current);
  });
}

document.getElementById('prevSlide')?.addEventListener('click', () => goTo(current - 1));
document.getElementById('nextSlide')?.addEventListener('click', () => goTo(current + 1));

slides?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
slides?.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .pillar-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
