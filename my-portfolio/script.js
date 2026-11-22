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

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};
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

function socialIcon(name, extraClass = '') {
  const icons = {
    instagram: '<svg class="social-icon social-icon-instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="instagram-dot" cx="17.5" cy="6.5" r="1"/></svg>',
    linkedin: '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.8a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.3 9.4h3.8v11.3H3.3zM9.1 9.4h3.6V11h.1a4 4 0 0 1 3.6-2c3.9 0 4.6 2.5 4.6 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.1z"/></svg>',
    facebook: '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3.1h2.4v8h3Z"/></svg>',
    whatsapp: '<svg class="social-icon social-icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.6a8.5 8.5 0 1 1 16.1-4.2Z"/><path class="whatsapp-phone" d="M9 8.3c.3-.4.6-.4.9-.4l.5.1 1 2.2c.1.2.1.4 0 .6l-.5.7c-.2.2-.2.4-.1.6a6 6 0 0 0 2.8 2.8c.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.7-.6.6-1.5.8-2.5.5-1-.3-2.2-.8-3.8-2.2a13 13 0 0 1-2.9-3.4c-.7-1.4-.3-2.7.2-3.4Z"/></svg>',
    tiktok: '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 2h-3.2v13.2a3 3 0 1 1-2.6-3v-3.3a6.2 6.2 0 1 0 5.8 6.2V8.2a8.1 8.1 0 0 0 4.1 1.1V6.1A4.8 4.8 0 0 1 16 2Z"/></svg>',
    github: '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.9 2.03 3.27 1.45.1-.72.4-1.22.71-1.5-2.48-.28-5.08-1.25-5.08-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.28-2.6 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>'
  };
  if (!icons[name]) return '';
  return extraClass ? icons[name].replace('class="social-icon', `class="social-icon ${extraClass}`) : icons[name];
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
  headerTarget.innerHTML = `<header class="site-header"><a class="brand-lockup" href="${pageUrl('home')}" aria-label="Emmanuel's Code home"><span class="brand"><img src="${pageRoot}images/logo.png" alt=""></span><span class="brand-name">EMMANUEL's_CODE</span></a><nav class="navigation" aria-label="Main navigation">${navItems}</nav><button class="cv-link" type="button" data-cv-download>Download CV</button></header>`;
}

const footerTarget = document.querySelector('[data-site-footer]');
if (footerTarget) {
  footerTarget.innerHTML = `<footer class="site-footer"><a class="footer-brand" href="${pageUrl('home')}"><img src="${pageRoot}images/logo.png" alt=""><span>EMMANUEL's CODE<br><b>Graphic_Hub</b></span></a><nav aria-label="Footer navigation">${Object.keys(pageRoutes).map((page) => `<a href="${pageUrl(page)}">${pageLabels[page]}</a>`).join('')}</nav><div class="footer-socials">${socialBadge('instagram', 'Instagram')}${socialBadge('linkedin', 'LinkedIn')}${socialBadge('facebook', 'Facebook')}${socialBadge('whatsapp', 'WhatsApp')}</div><p>2026 All rights reserved: <span>Emmanuel chi</span></p></footer>`;
}

document.querySelectorAll('[data-brand-icon]').forEach((placeholder) => {
  placeholder.outerHTML = socialIcon(placeholder.dataset.brandIcon, placeholder.className);
});

const contactSocialsTarget = document.querySelector('[data-contact-socials]');
if (contactSocialsTarget) {
  const contactSocials = ['tiktok', 'linkedin', 'instagram', 'github'];
  const labels = { tiktok: 'TikTok', linkedin: 'LinkedIn', instagram: 'Instagram', github: 'GitHub' };
  contactSocialsTarget.innerHTML = contactSocials.map((name) => socialBadge(name, labels[name])).join('');
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

const projectLightbox = document.querySelector('.project-lightbox');
let lightboxImages = [];
let lightboxIndex = 0;

function showLightboxImage(index) {
  if (!projectLightbox || !lightboxImages.length) return;
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  const item = lightboxImages[lightboxIndex];
  projectLightbox.querySelector('.project-lightbox-image').src = item.src;
  projectLightbox.querySelector('.project-lightbox-image').alt = item.alt;
  projectLightbox.querySelector('#project-lightbox-caption').textContent = item.caption;
  const hasMultipleImages = lightboxImages.length > 1;
  projectLightbox.querySelector('.project-lightbox-previous').hidden = !hasMultipleImages;
  projectLightbox.querySelector('.project-lightbox-next').hidden = !hasMultipleImages;
}

function openLightbox(images, startIndex = 0) {
  if (!projectLightbox || !images.length) return;
  lightboxImages = images;
  showLightboxImage(startIndex);
  projectLightbox.showModal();
}

if (projectLightbox) {
  projectLightbox.querySelector('.project-lightbox-close').addEventListener('click', () => projectLightbox.close());
  projectLightbox.querySelector('.project-lightbox-previous').addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
  projectLightbox.querySelector('.project-lightbox-next').addEventListener('click', () => showLightboxImage(lightboxIndex + 1));
  projectLightbox.addEventListener('click', (event) => {
    if (event.target === projectLightbox) projectLightbox.close();
  });
}

document.querySelectorAll('.project-filters').forEach((filterGroup) => {
  const buttons = filterGroup.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card[data-category]');
  const projectGrid = document.querySelector('.project-grid');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      if (projectLightbox?.open) projectLightbox.close();
      const projectGallery = document.querySelector('#project-gallery');
      if (projectGallery) projectGallery.hidden = true;
      buttons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      let categoryCardShown = false;
      cards.forEach((card) => {
        const matchesCategory = card.dataset.category === filter;
        const showCard = filter === 'all' || (matchesCategory && !categoryCardShown);
        card.hidden = !showCard;
        if (showCard && filter !== 'all') categoryCardShown = true;
      });
      if (projectGrid) projectGrid.classList.toggle('is-category-view', filter !== 'all');
    });
  });
});

document.querySelectorAll('.project-grid .project-card > img').forEach((image) => {
  image.addEventListener('click', () => {
    const clickedCard = image.closest('.project-card');
    const category = clickedCard.dataset.category;
    const relatedImages = [...document.querySelectorAll(`.project-card[data-category="${category}"]`)]
      .filter((card) => !card.hidden)
      .map((card) => ({
        src: card.querySelector('img').src,
        alt: card.querySelector('img').alt,
        caption: card.querySelector('h2, h3')?.textContent.trim() || card.querySelector('img').alt
      }));
    const clickedIndex = relatedImages.findIndex((item) => item.src === image.src);
    openLightbox(relatedImages, Math.max(clickedIndex, 0));
  });
});

const projectGallery = document.querySelector('#project-gallery');
if (projectGallery) {
  const galleryTitle = projectGallery.querySelector('#project-gallery-title');
  const galleryGrid = projectGallery.querySelector('.project-gallery-grid');
  let currentGalleryCategory = '';
  const projectGalleryItems = {
    web: {
      title: 'Web Development Projects',
      images: [
        { src: '../images/project-web-design.png', alt: 'Web design project preview', caption: 'Web Design' }
      ]
    },
    uiux: {
      title: 'UI/UX Projects',
      images: [
        { src: 'ui/ux-picture1.png', alt: 'UI/UX project 1', caption: 'UI/UX Design' },
        { src: 'ui/ux-picture2.png', alt: 'UI/UX project 2', caption: 'UI/UX Design' }
      ]
    },
    graphic: {
      title: 'Graphic Design Projects',
      images: [
        { src: '../images/project-graphic-design1.png', alt: 'Graphic design project preview', caption: 'Graphic Design' },
        { src: 'graphic-pictur3.png', alt: 'Graphic design project', caption: 'Graphic Design' },
        { src: 'my_grapc-picture2.png', alt: 'Graphic design project', caption: 'Graphic Design' },
        { src: 'project-graphic1.png', alt: 'Graphic design project', caption: 'Graphic Design' }
      ]
    },
    brand: {
      title: 'Logo Projects',
      images: [
        { src: '../images/project-logo.png', alt: 'Aura Beauty Atelier logo design', caption: 'Logo Design' },
        { src: 'logo-picture1.png', alt: 'Logo design project', caption: 'Logo Design' },
        { src: '../images/project-brand-logos.png', alt: 'Brand logo project preview', caption: 'Brand Logos' }
      ]
    },
    video: {
      title: 'Video Editing Projects',
      images: [
        { src: '../images/project-video-editing.png', alt: 'Video editing project preview', caption: 'Video Editing' }
      ]
    },
    marketing: {
      title: 'Marketing Projects',
      images: [
        { src: 'marketing-picture1.jpg', alt: 'Marketing design project', caption: 'Marketing Design' },
        { src: '../images/project-branding.png', alt: 'Branding and marketing project preview', caption: 'Branding & Marketing' }
      ]
    }
  };

  galleryGrid.addEventListener('click', (event) => {
    const image = event.target.closest('img');
    if (!image) return;
    const images = projectGalleryItems[currentGalleryCategory].images;
    const clickedIndex = [...galleryGrid.querySelectorAll('img')].indexOf(image);
    openLightbox(images, clickedIndex);
  });

  document.querySelectorAll('[data-gallery-category]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const gallery = projectGalleryItems[link.dataset.galleryCategory];
      if (!gallery) return;

      currentGalleryCategory = link.dataset.galleryCategory;
      galleryTitle.textContent = gallery.title;
      galleryGrid.replaceChildren();
      gallery.images.forEach(({ src, alt, caption }) => {
        const figure = document.createElement('figure');
        figure.className = 'project-gallery-item';
        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        image.loading = 'lazy';
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = caption;
        figure.append(image, figcaption);
        galleryGrid.append(figure);
      });

      projectGallery.hidden = false;
      projectGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

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

    const requiredFields = ['name', 'email', 'title', 'message'];
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
      const templateParams = {
        name: form.elements.namedItem('name').value.trim(),
        email: form.elements.namedItem('email').value.trim(),
        title: form.elements.namedItem('title').value.trim(),
        message: form.elements.namedItem('message').value.trim()
      };

      // Set the EmailJS template's Reply-To field to {{email}}.
      await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
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
