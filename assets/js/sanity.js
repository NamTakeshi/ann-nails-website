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
    const [settings, hero, services, about] = await Promise.all([
      query(`*[_type == "siteSettings"][0]`),
      query(`*[_type == "hero"][0]`),
      query(`*[_type == "service"] | order(order asc)`),
      query(`*[_type == "about"][0]`),
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
        document.getElementById('contact-phone').innerHTML = `📞 <a href="tel:${settings.phone}">${settings.phone}</a>`;
      }
      if (settings.email) {
        document.getElementById('contact-email').innerHTML = `✉️ <a href="mailto:${settings.email}">${settings.email}</a>`;
      }
      if (settings.address) {
        document.getElementById('contact-address').textContent = `📍 ${settings.address}`;
      }
    }

    // ── Hero ──
    if (hero) {
      document.getElementById('hero-headline').textContent = hero.headline || '';
      document.getElementById('hero-subtext').textContent  = hero.subtext  || '';

      const cta = document.getElementById('hero-cta');
      if (hero.ctaText) cta.textContent = hero.ctaText;
      if (hero.ctaLink) cta.href = hero.ctaLink;

      if (hero.bgImage?.asset?._ref) {
        const url = imageUrl(hero.bgImage.asset._ref);
        document.getElementById('hero-bg').style.backgroundImage = `url(${url})`;
      }
    }

    // ── Leistungen ──
    const grid = document.getElementById('services-grid');
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

    // ── Über uns ──
    if (about) {
      document.getElementById('about-headline').textContent = about.headline || '';
      document.getElementById('about-text').textContent     = about.text     || '';

      const photoEl = document.getElementById('about-photo');
      if (about.photo?.asset?._ref) {
        photoEl.innerHTML = `<img src="${imageUrl(about.photo.asset._ref)}" alt="${about.headline || ''}">`;
      } else {
        photoEl.innerHTML = '<div class="placeholder"></div>';
      }
    }

  } catch (err) {
    console.error('Fehler beim Laden der Inhalte:', err);
  }
}

loadSite();
