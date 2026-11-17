/* Add a CV file path here when it is available. */
const SITE_CONFIG = {
  cvUrl: '',
  socialProfiles: {
    github: 'https://github.com/Emmanuel-chi-chi',
    figma: 'https://www.figma.com/Emmanuel-Tchi',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/emmanuel-chi-396668374?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    facebook: 'https://www.facebook.com/profile.php?id=61594172756204',
    whatsapp: 'https://wa.me/237670636457?text=Welcome%20to%20Emmanuel%27s%20Graphics%20Hub!%20Thanks%20for%20contacting%20us.%20How%20can%20I%20help%20you%20today%3F',
    tiktok: ''
  }
};

const EMAILJS_CONFIG = window.EMAILJS_CONFIG || {};
const emailJsRequiredSettings = ['serviceId', 'templateId', 'publicKey'];
const emailJsIsConfigured = emailJsRequiredSettings.every((setting) => (
  typeof EMAILJS_CONFIG[setting] === 'string' && EMAILJS_CONFIG[setting].trim().length > 0
));

if (emailJsIsConfigured && window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}

const pageRoot = document.body.dataset.root || './';
const currentPage = document.body.dataset.page || 'home';
const pageRoutes = {
  home: 'index.html',
  about: 'about/index.html',
  journey: 'journey/index.html',
  skills: 'skills/index.html',
  projects: 'projects/index.html',
  contact: 'contact/index.html'
};
const pageLabels = {
  home: 'Hero',
  about: 'About',
  journey: 'Journey',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact'
};

function pageUrl(page) {
  return `${pageRoot}${pageRoutes[page]}`;
}

function socialIcon(name) {
  const icons = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2.5 9h3v12h-3zM8 9h3v1.7c.7-1.2 1.8-2 3.5-2 3.2 0 4.5 2 4.5 5.4V21h-3v-6.1c0-1.7-.4-3-2.2-3-1.7 0-2.8 1.2-2.8 3V21H8z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1a11 11 0 1 0 6.8 19.6v-7.2h-2.6v-3h2.6V8.2c0-2.6 1.5-4 3.8-4 .8 0 1.6.1 2 .2v2.7h-1.6c-1.3 0-1.6.6-1.6 1.6v1.7h3l-.4 3h-2.6v8.1A11 11 0 0 0 12 1Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.6a8.5 8.5 0 1 1 16.1-4.2Z"/><path d="M9 8.3c.3-.4.6-.4.9-.4l.5.1 1 2.2c.1.2.1.4 0 .6l-.5.7c-.2.2-.2.4-.1.6a6 6 0 0 0 2.8 2.8c.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.6.6-1.5.8-2.5.5-1-.3-2.2-.8-3.8-2.2a13 13 0 0 1-2.9-3.4c-.7-1.4-.3-2.7.2-3.4Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3v11.2a4.8 4.8 0 1 1-4-4.73v3.2a1.7 1.7 0 1 0 1.1 1.6V3h2.9c.3 2.3 1.6 3.7 4 4v3a8 8 0 0 1-4-1.3"/></svg>'
  };
  return icons[name] || '';
}

function socialBadge(name, label) {
  const url = SITE_CONFIG.socialProfiles[name];
  const icon = socialIcon(name);
  if (url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}" title="${label}">${icon}</a>`;
  }
  return `<span class="social-mark" aria-label="${label} profile URL not configured" title="Configure ${label} URL in SITE_CONFIG.socialProfiles in script.js">${icon}</span>`;
}

const headerTarget = document.querySelector('[data-site-header]');
if (headerTarget) {
  const navItems = Object.keys(pageRoutes).map((page) => {
    const current = currentPage === page ? ' aria-current="page"' : '';
    return `<a href="${pageUrl(page)}"${current}>${pageLabels[page]}</a>`;
  }).join('');
  headerTarget.innerHTML = `<header class="site-header"><a class="brand" href="${pageUrl('home')}" aria-label="Home"><img src="${pageRoot}images/logo.png" alt="Emmanuel's Code Graphic Hub"></a><nav class="navigation" aria-label="Main navigation">${navItems}</nav><button class="cv-link" type="button" data-cv-download>Download CV</button></header>`;
}

const footerTarget = document.querySelector('[data-site-footer]');
if (footerTarget) {
  footerTarget.innerHTML = `<footer class="site-footer"><a class="footer-brand" href="${pageUrl('home')}"><img src="${pageRoot}images/logo.png" alt=""><span>EMMANUEL's CODE<br><b>Graphic_Hub</b></span></a><nav aria-label="Footer navigation">${Object.keys(pageRoutes).map((page) => `<a href="${pageUrl(page)}">${pageLabels[page]}</a>`).join('')}</nav><div class="footer-socials">${socialBadge('instagram', 'Instagram')}${socialBadge('linkedin', 'LinkedIn')}${socialBadge('facebook', 'Facebook')}${socialBadge('whatsapp', 'WhatsApp')}</div><p>2026 All rights reserved: <span>Emmanuel chi</span></p></footer>`;
}

const status = document.createElement('p');
status.className = 'site-status';
status.setAttribute('role', 'status');
status.setAttribute('aria-live', 'polite');
status.hidden = true;
document.body.append(status);

function showStatus(message) {
  status.textContent = message;
  status.hidden = false;
  window.clearTimeout(showStatus.timer);
  showStatus.timer = window.setTimeout(() => { status.hidden = true; }, 7000);
}

document.querySelectorAll('[data-cv-download]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!SITE_CONFIG.cvUrl) {
      showStatus('CV download is not configured yet. Add your CV file path to SITE_CONFIG.cvUrl in script.js.');
      return;
    }
    window.location.href = `${pageRoot}${SITE_CONFIG.cvUrl}`;
  });
});

const imageTrack = document.querySelector('.image-track');
if (imageTrack) {
  const slides = imageTrack.querySelectorAll('.image-slide');
  if (slides.length > 1) {
    let currentImage = 0;
    window.setInterval(() => {
      currentImage = (currentImage + 1) % slides.length;
      imageTrack.style.transform = `translateX(-${currentImage * 50}%)`;
    }, 4000);
  }
}

document.querySelectorAll('.project-filters').forEach((filterGroup) => {
  const buttons = filterGroup.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card[data-category]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      cards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });
});

function setFormStatus(form, message, state) {
  const formStatus = form.querySelector('[data-form-status]');
  if (!formStatus) return;
  formStatus.hidden = false;
  formStatus.textContent = message;
  formStatus.classList.remove('is-pending', 'is-success', 'is-error');
  if (state) formStatus.classList.add(`is-${state}`);
}

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.dataset.sending === 'true') return;

    if (!form.reportValidity()) return;

    const requiredFields = ['user_name', 'user_email', 'subject', 'message'];
    const blankField = requiredFields
      .map((name) => form.elements.namedItem(name))
      .find((field) => !field.value.trim());

    if (blankField) {
      setFormStatus(form, 'Please complete all required fields.', 'error');
      blankField.focus();
      return;
    }

    if (!emailJsIsConfigured) {
      setFormStatus(form, 'Email is not configured yet. Add your EmailJS values to emailjs-config.local.js.', 'error');
      return;
    }
    if (!window.emailjs) {
      setFormStatus(form, 'The email service could not be loaded. Check your internet connection and try again.', 'error');
      return;
    }

    const submitButton = form.querySelector('[type="submit"]');
    form.dataset.sending = 'true';
    form.setAttribute('aria-busy', 'true');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add('is-sending');
    }
    setFormStatus(form, 'Sending your message...', 'pending');

    try {
      await window.emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form
      );
      form.reset();
      setFormStatus(form, 'Your message was sent successfully. Thank you for getting in touch.', 'success');
    } catch (error) {
      console.error('EmailJS could not send the contact form.', error);
      const emailJsDetail = typeof error?.text === 'string'
        ? error.text
        : typeof error?.message === 'string'
          ? error.message
          : '';
      const safeDetail = emailJsDetail.replace(/[<>]/g, '').trim().slice(0, 200);
      setFormStatus(
        form,
        safeDetail
          ? `We could not send your message: ${safeDetail}`
          : 'We could not send your message. Please check your connection and EmailJS settings, then try again.',
        'error'
      );
    } finally {
      form.dataset.sending = 'false';
      form.removeAttribute('aria-busy');
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.classList.remove('is-sending');
      }
    }
  });
});
