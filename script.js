
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Mobile navigation toggle
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Project link handling
const toast = document.querySelector('.toast');

document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => {

    // Show reminder only when the URL is not yet provided
    if (link.getAttribute('href') === '#') {
      event.preventDefault();

      toast.textContent = link.dataset.placeholder;
      toast.classList.add('show');

      window.setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }

    // Otherwise, allow valid URLs to open normally
  });
});
