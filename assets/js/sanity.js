// ─── Sanity-Konfiguration ─────────────────────────────────────────────────
const PROJECT_ID = 'wvb8txdo';
const DATASET    = 'production';
const API_VERSION = '2024-01-01';

// Hilfsfunktion: GROQ-Anfrage an Sanity
async function query(groq) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(groq)}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.result;
}

// Hilfsfunktion: Sanity-Bild-URL erstellen
function imageUrl(ref) {
  if (!ref) return null;
  const [, id, dims, fmt] = ref.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/);
  return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dims}.${fmt}`;
}

// ─── Daten laden und Seite befüllen ──────────────────────────────────────
async function loadSite() {
  try {
    // Alle Daten in einer Anfrage
    const [settings, hero, services, about, gallery] = await Promise.all([
      query(`*[_type == "siteSettings"][0]`),
      query(`*[_type == "hero"][0]`),
      query(`*[_type == "service"] | order(order asc)`),
      query(`*[_type == "about"][0]`),
      query(`*[_type == "gallery"] | order(order asc)`),
    ]);

    // ── Allgemeine Infos ──
    if (settings) {
      document.title = settings.businessName || 'Website';
      const navLogo = document.getElementById('nav-logo');
      if (navLogo) navLogo.textContent = settings.businessName || '';
      const footerBiz = document.getElementById('footer-biz-name');
      if (footerBiz) footerBiz.textContent = settings.businessName || '';
      const footerCopy = document.getElementById('footer-copy');
      if (footerCopy) footerCopy.textContent = `© ${new Date().getFullYear()} ${settings.businessName || ''} · All rights reserved.`;

      if (settings.phone) {
        const phoneDigits = settings.phone.replace(/\D/g, '');
        const telHref = `tel:+${phoneDigits}`;
        // Update all tel: links on the page
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
          link.href = telHref;
          // Replace bare phone-number text nodes (not SVG, not "Call to Book" text)
          link.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && /[\d\s().+-]{7,}/.test(node.textContent.trim())) {
              node.textContent = settings.phone;
            }
          });
        });
        // Update .phone-number display elements (e.g. contact page big button)
        document.querySelectorAll('.phone-number').forEach(el => {
          el.textContent = settings.phone;
        });
        // Legacy fallback ID
        const contactPhone = document.getElementById('contact-phone');
        if (contactPhone) {
          contactPhone.innerHTML = `📞 <a href="${telHref}">${settings.phone}</a>`;
        }
      }
      if (settings.email) {
        const contactEmail = document.getElementById('contact-email');
        if (contactEmail) contactEmail.innerHTML = `✉️ <a href="mailto:${settings.email}">${settings.email}</a>`;
      }
      if (settings.address) {
        const contactAddress = document.getElementById('contact-address');
        if (contactAddress) contactAddress.textContent = `📍 ${settings.address}`;
      }
    }

    // ── Hero ──
    if (hero) {
      const heroHeadline = document.getElementById('hero-headline');
      const heroSubtext = document.getElementById('hero-subtext');
      const heroCta = document.getElementById('hero-cta');
      const heroBg = document.getElementById('hero-bg');
      if (heroHeadline) heroHeadline.textContent = hero.headline || '';
      if (heroSubtext) heroSubtext.textContent = hero.subtext || '';
      if (heroCta) {
        if (hero.ctaText) heroCta.textContent = hero.ctaText;
        if (hero.ctaLink) heroCta.href = hero.ctaLink;
      }
      if (heroBg && hero.bgImage?.asset?._ref) {
        heroBg.style.backgroundImage = `url(${imageUrl(hero.bgImage.asset._ref)})`;
      }
    }

    // ── Leistungen ──
    const grid = document.getElementById('services-grid');
    if (grid) {
      grid.innerHTML = '';
      if (services?.length) {
        services.forEach(s => {
          const card = document.createElement('div');
          card.className = 'service-card';

          const imgHtml = s.image?.asset?._ref
            ? `<img src="${imageUrl(s.image.asset._ref)}" alt="${s.name}" loading="lazy">`
            : '';

          card.innerHTML = `
            ${imgHtml}
            <div class="service-card-body">
              <h3>${s.name || ''}</h3>
              <p>${s.description || ''}</p>
              ${s.price ? `<span class="service-price">${s.price}</span>` : ''}
            </div>`;
          grid.appendChild(card);
        });
      } else {
        grid.innerHTML = '<p style="color:var(--text-muted)">Noch keine Leistungen eingetragen.</p>';
      }
    }

    // ── Über uns ──
    if (about) {
      const aboutHeadline = document.getElementById('about-headline');
      const aboutText = document.getElementById('about-text');
      if (aboutHeadline) aboutHeadline.textContent = about.headline || '';
      if (aboutText) aboutText.textContent = about.text || '';

      const photoEl = document.getElementById('about-photo');
      if (photoEl) {
        if (about.photo?.asset?._ref) {
          photoEl.innerHTML = `<img src="${imageUrl(about.photo.asset._ref)}" alt="${about.headline || ''}">`;
        } else {
          photoEl.innerHTML = '<div class="placeholder"></div>';
        }
      }
    }

    // ── Galerie ──
    console.log('Gallery raw:', JSON.stringify(gallery));
    if (gallery?.length) {
      const validPhotos = gallery.filter(item => item.image?.asset?._ref);
      const masonryGrid = document.getElementById('masonry-grid');
      if (masonryGrid && validPhotos.length) {
        masonryGrid.innerHTML = validPhotos.map(item => `
          <div class="masonry-item">
            <img src="${imageUrl(item.image.asset._ref)}" alt="${item.caption || 'Galerie'}" loading="lazy">
            ${item.caption ? `<div class="overlay"><span class="tag">${item.caption}</span></div>` : ''}
          </div>`).join('');
      }
      const galleryGrid = document.getElementById('gallery-grid');
      if (galleryGrid && validPhotos.length) {
        galleryGrid.innerHTML = validPhotos.slice(0, 5).map(item => `
          <div class="gallery-item">
            <img src="${imageUrl(item.image.asset._ref)}" alt="${item.caption || 'Galerie'}" loading="lazy">
          </div>`).join('');
      }
    }

  } catch (err) {
    console.error('Fehler beim Laden der Inhalte:', err);
  }
}

loadSite();
