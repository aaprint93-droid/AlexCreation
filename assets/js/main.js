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

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.project').forEach(project => {
    project.classList.toggle('hidden', filter !== 'all' && project.dataset.category !== filter);
  });
}));

document.getElementById('estimate-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const spanish = document.documentElement.lang === 'es';
  const message = spanish ? [
    'Hola Alex Creation, me gustaría solicitar un presupuesto gratis.',
    `Nombre: ${values.get('name')}`,
    `Teléfono: ${values.get('phone')}`,
    `Correo: ${values.get('email') || 'No proporcionado'}`,
    `Servicio: ${values.get('service')}`,
    `Detalles del proyecto: ${values.get('details')}`
  ].join('\n') : [
    'Hello Alex Creation, I would like a free estimate.',
    `Name: ${values.get('name')}`,
    `Phone: ${values.get('phone')}`,
    `Email: ${values.get('email') || 'Not provided'}`,
    `Service: ${values.get('service')}`,
    `Project details: ${values.get('details')}`
  ].join('\n');
  window.open(`https://wa.me/12013961606?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const translations = {
  'Home': 'Inicio', 'Services': 'Servicios', 'Projects': 'Proyectos', 'About us': 'Nosotros', 'Contact': 'Contacto',
  'Call for a Free Estimate': 'Llámanos para un presupuesto', 'Crafting spaces. Creating memories.': 'Creamos espacios. Construimos recuerdos.',
  'WE CREATE': 'CREAMOS', 'QUALITY OF LIFE': 'CALIDAD DE VIDA',
  'Decks, fences, vinyl, concrete and remodeling. Professional interior and exterior services with workmanship built to last.': 'Decks, cercas, vinilo, concreto y remodelación. Servicios profesionales de interior y exterior con calidad que perdura.',
  'Get Free Estimate': 'Presupuesto gratis', 'Explore Our Work': 'Ver nuestros proyectos', 'CONTACT US': 'CONTÁCTANOS', 'ON WHATSAPP': 'POR WHATSAPP', 'Call Now': 'Llamar ahora',
  'Happy Clients': 'Clientes felices', 'Projects Completed': 'Proyectos completados', 'Years Experience': 'Años de experiencia', 'Quality Guaranteed': 'Calidad garantizada',
  'Our services': 'Nuestros servicios', 'Quality services': 'Servicios de calidad', 'we provide.': 'que ofrecemos.',
  'From first sketch to final walkthrough, every detail is handled with care by a team that takes pride in the finish.': 'Desde la primera idea hasta la entrega final, cuidamos cada detalle con un equipo orgulloso de su trabajo.',
  'Decks': 'Decks', 'Fences': 'Cercas', 'Concrete': 'Concreto', 'Vinyl Flooring': 'Pisos de vinilo', 'Interior Remodeling': 'Remodelación interior', 'Exterior Remodeling': 'Remodelación exterior',
  'Custom outdoor spaces built for every season.': 'Espacios exteriores personalizados para cada temporada.', 'Privacy, security and curb appeal in one solution.': 'Privacidad, seguridad y una mejor fachada en una sola solución.', 'Driveways, patios and durable foundations.': 'Entradas, patios y bases duraderas.', 'Refined, resilient floors for daily life.': 'Pisos resistentes y elegantes para la vida diaria.', 'Beautifully tailored kitchens and living spaces.': 'Cocinas y espacios interiores diseñados para ti.', 'A complete exterior made to stand out.': 'Un exterior completo diseñado para destacar.', 'Learn more': 'Ver más',
  'Featured projects': 'Proyectos destacados', 'Built with purpose.': 'Construido con propósito.', 'Finished with pride.': 'Terminado con orgullo.', 'Thoughtful design and skilled workmanship come together in spaces clients enjoy every day.': 'Diseño cuidadoso y mano de obra experta se unen en espacios que nuestros clientes disfrutan cada día.', 'All projects': 'Todos los proyectos', 'Outdoor living': 'Espacios exteriores', 'Remodeling': 'Remodelación',
  'Outdoor Living': 'Espacios exteriores', 'Modern backyard retreat': 'Un patio moderno para disfrutar', 'Interior Remodel': 'Remodelación interior', 'Warm & inviting interiors': 'Interiores cálidos y acogedores', 'Built for everyday use': 'Hecho para el uso diario', 'Space to gather': 'Un espacio para compartir', 'Kitchen Remodel': 'Remodelación de cocina', 'Details that make a home': 'Detalles que hacen un hogar',
  'About Alex Creation': 'Sobre Alex Creation', 'Craftsmanship you can': 'Calidad en la que puedes', 'count on.': 'confiar.',
  'We are a dedicated team built around one simple idea: your home deserves work that feels as good as it looks. From a single improvement to a complete transformation, we bring clear communication, honest service and detail-driven craftsmanship.': 'Somos un equipo dedicado con una idea simple: tu hogar merece un trabajo que se sienta tan bien como luce. Desde una mejora puntual hasta una transformación completa, aportamos comunicación clara, servicio honesto y atención a cada detalle.',
  'Clear communication': 'Comunicación clara', 'Know what to expect at every step.': 'Sabrás qué esperar en cada etapa.', 'Quality materials': 'Materiales de calidad', 'Solutions chosen to last.': 'Soluciones elegidas para durar.', 'Talk to our team': 'Habla con nuestro equipo',
  'Our process': 'Nuestro proceso', 'A simple path to': 'Un camino sencillo hacia', 'your ideal space.': 'tu espacio ideal.', 'Consultation': 'Consulta', 'Tell us what you envision.': 'Cuéntanos lo que imaginas.', 'Planning': 'Planificación', 'A clear plan and estimate.': 'Un plan y presupuesto claros.', 'Construction': 'Construcción', 'Built with precision and care.': 'Construido con precisión y cuidado.', 'Walkthrough': 'Revisión final', 'We finish only when you love it.': 'Terminamos cuando te encanta.',
  'Ready to build?': '¿Listo para construir?', 'Let’s turn your vision into': 'Convirtamos tu visión en', 'something remarkable.': 'algo extraordinario.', 'Bring your ideas to a team that knows how to make them real.': 'Trae tus ideas a un equipo que sabe cómo hacerlas realidad.', 'Get Your Free Estimate': 'Obtén tu presupuesto gratis',
  'Client stories': 'Historias de clientes', 'Trusted in every': 'Confianza en cada', 'detail that matters.': 'detalle que importa.', 'Our best work is a client who is happy to recommend us to a neighbor, friend or family member.': 'Nuestro mejor trabajo es un cliente feliz de recomendarnos a sus vecinos, amigos y familiares.',
  '“They were professional from the first conversation through the final detail. Our deck became the favorite part of our home.”': '“Fueron profesionales desde la primera conversación hasta el último detalle. Nuestro deck se convirtió en la parte favorita de la casa.”', 'Deck Project': 'Proyecto de deck', '“The team kept everything clean, communicated constantly and delivered exactly what we discussed. Outstanding work.”': '“El equipo mantuvo todo limpio, se comunicó constantemente y entregó exactamente lo que hablamos. Trabajo excepcional.”', '“Reliable, respectful and incredibly detailed. I would absolutely call Alex Creation again for our next project.”': '“Confiables, respetuosos y muy detallistas. Sin duda llamaré a Alex Creation para nuestro próximo proyecto.”', 'Concrete & Fence': 'Concreto y cercas',
  'Common questions': 'Preguntas frecuentes', 'Everything starts with a': 'Todo comienza con una', 'conversation.': 'conversación.', 'Do you offer free estimates?': '¿Ofrecen presupuestos gratis?', 'Yes. Tell us about your project and we’ll arrange a free consultation to understand your goals and provide an estimate.': 'Sí. Cuéntanos sobre tu proyecto y coordinaremos una consulta gratuita para conocer tus objetivos y ofrecerte un presupuesto.', 'What areas do you serve?': '¿Qué áreas atienden?', 'We proudly serve Newark and surrounding areas in New Jersey. Contact us to confirm availability for your location.': 'Atendemos Newark y zonas cercanas de Nueva Jersey. Contáctanos para confirmar disponibilidad en tu ubicación.', 'How do I get started?': '¿Cómo puedo comenzar?', 'Use the estimate form or call us directly. We will discuss your project, timeline and next steps.': 'Usa el formulario de presupuesto o llámanos directamente. Hablaremos de tu proyecto, tiempos y próximos pasos.',
  'Free estimate': 'Presupuesto gratis', 'Tell us about your': 'Cuéntanos sobre tu', 'project.': 'proyecto.', 'Full name': 'Nombre completo', 'Phone number': 'Número de teléfono', 'Email address': 'Correo electrónico', 'Service': 'Servicio', 'Project details': 'Detalles del proyecto', 'Request on WhatsApp': 'Solicitar por WhatsApp', 'Your information is only used to respond to your request.': 'Tu información se utilizará solo para responder a tu solicitud.', 'Interior Remodeling': 'Remodelación interior', 'Exterior Remodeling': 'Remodelación exterior'
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translatePage = language => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: node => node.parentElement?.tagName === 'SCRIPT' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  let node;
  while (node = walker.nextNode()) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node);
    const trimmed = original.trim();
    if (translations[trimmed]) node.nodeValue = original.replace(trimmed, language === 'es' ? translations[trimmed] : trimmed);
  }
  document.querySelectorAll('[placeholder]').forEach(element => {
    if (!originalAttributes.has(element)) originalAttributes.set(element, element.placeholder);
    const placeholders = { 'Your name': 'Tu nombre', '(201) 000-0000': '(201) 000-0000', 'you@email.com': 'tu@email.com', 'Tell us about your project...': 'Cuéntanos sobre tu proyecto...' };
    const original = originalAttributes.get(element);
    element.placeholder = language === 'es' && placeholders[original] ? placeholders[original] : original;
  });
  document.documentElement.lang = language;
  document.getElementById('language-toggle').innerHTML = language === 'es' ? 'EN <span>/ ES</span>' : 'ES <span>/ EN</span>';
  document.getElementById('language-toggle').setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar idioma');
  localStorage.setItem('alex-language', language);
};

const initialLanguage = localStorage.getItem('alex-language') || 'en';
translatePage(initialLanguage);
document.getElementById('language-toggle')?.addEventListener('click', () => translatePage(document.documentElement.lang === 'es' ? 'en' : 'es'));
