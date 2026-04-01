/* main.js — All interactivity */

const NAV_HEIGHT = 72;
const SCROLL_THRESHOLD = 50;

function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const handleNavScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
}

function initMobileMenu() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileLinks = document.querySelectorAll('.nav__mobile-menu .nav__link');

  if (!nav || !hamburger) return;

  const handleMenuToggle = () => {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  };

  hamburger.addEventListener('click', handleMenuToggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    });
  });
}

function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', e => {
      // Skip links that open the modal — they handle their own click
      if (link.hasAttribute('data-open-modal')) return;

      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - NAV_HEIGHT,
        behavior: 'smooth',
      });
    });
  });
}

function initAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  // Apply stagger delays to sibling animated elements within the same parent
  const parents = new Set([...animatedElements].map(el => el.parentElement));
  parents.forEach(parent => {
    const siblings = [...parent.querySelectorAll(':scope > .animate-on-scroll')];
    if (siblings.length > 1) {
      siblings.forEach((el, i) => {
        el.style.setProperty('--stagger-delay', `${i * 90}ms`);
      });
    }
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach(el => observer.observe(el));
}

function initModal() {
  const overlay = document.querySelector('#signup-modal');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.modal__close');
  const form = overlay.querySelector('.modal__form');
  const successPane = overlay.querySelector('.modal__success');
  const firstInput = overlay.querySelector('#modal-name');
  const TRANSITION_MS = 250;
  const focusableSelectors = 'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

  let isOpen = false;

  const openModal = () => {
    if (isOpen) return;
    isOpen = true;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    firstInput?.focus();
  };

  const closeModal = () => {
    if (!isOpen) return;
    isOpen = false;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    // Reset form state after the CSS transition finishes
    setTimeout(() => {
      document.body.style.overflow = '';
      form?.reset();
      if (form) form.hidden = false;
      if (successPane) successPane.hidden = true;
    }, TRANSITION_MS);
  };

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeModal();
  });

  overlay.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = [...overlay.querySelectorAll(focusableSelectors)].filter(el => !el.closest('[hidden]'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = overlay.querySelector('#modal-name')?.value.trim();
    const email = overlay.querySelector('#modal-email')?.value.trim();
    if (!name || !email) return;
    if (form) form.hidden = true;
    if (successPane) successPane.hidden = false;
  });
}

function initPricingToggle() {
  const toggleBtn = document.querySelector('.pricing__toggle-btn');
  if (!toggleBtn) return;

  const monthlyLabel = document.querySelector('#toggle-monthly');
  const annualLabel = document.querySelector('#toggle-annual');
  const amounts = document.querySelectorAll('[data-monthly]');
  const annualNote = document.querySelector('.pricing__annual-note');

  let isAnnual = false;

  toggleBtn.addEventListener('click', () => {
    isAnnual = !isAnnual;
    toggleBtn.setAttribute('aria-checked', String(isAnnual));
    toggleBtn.classList.toggle('is-active', isAnnual);
    monthlyLabel?.classList.toggle('pricing__toggle-label--active', !isAnnual);
    annualLabel?.classList.toggle('pricing__toggle-label--active', isAnnual);

    amounts.forEach(el => {
      const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
      if (val !== undefined) el.textContent = val;
    });

    if (annualNote) annualNote.hidden = !isAnnual;
  });
}

function initTypewriter() {
  const target = document.querySelector('.hero__typewriter');
  if (!target) return;

  const PHRASES = [
    'Start Understanding It.',
    'Start Moving Faster.',
    'Start Collaborating Better.',
    'Start Seeing Clearly.',
  ];

  const TYPE_SPEED   = 55;
  const DELETE_SPEED = 30;
  const PAUSE_AFTER  = 2200;
  const PAUSE_BEFORE = 400;

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;

  const tick = () => {
    const currentPhrase = PHRASES[phraseIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }

      setTimeout(tick, DELETE_SPEED);
    } else {
      charIndex++;
      target.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }

      setTimeout(tick, TYPE_SPEED);
    }
  };

  setTimeout(tick, PAUSE_BEFORE);
}

initNavScroll();
initMobileMenu();
initSmoothScroll();
initAnimations();
initTypewriter();
initModal();
initPricingToggle();
