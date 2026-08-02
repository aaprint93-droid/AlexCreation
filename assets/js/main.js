const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const formatCount = (number, max) => max === 100 ? `${number}` : `${number}`;
const countUp = () => document.querySelectorAll('[data-count]').forEach(item => {
  const max = Number(item.dataset.count);
  const start = performance.now();
  const update = now => {
    const progress = Math.min((now - start) / 1400, 1);
    item.textContent = formatCount(Math.floor(max * (1 - Math.pow(1 - progress, 3))), max);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});
countUp();
document.getElementById('year').textContent = new Date().getFullYear();
