// Theme and language are both applied by the inline script in <head> before
// first paint, so neither flashes the wrong value on load.
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const langBtn = document.getElementById('langToggle');
const media = window.matchMedia('(prefers-color-scheme: dark)');

/* ---------- Language ---------- */

function currentLang() {
  return root.getAttribute('lang') === 'fa' ? 'fa' : 'en';
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  root.setAttribute('lang', lang);
  root.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

  // Plain text
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });

  // Strings containing markup (<span>, <code>, <strong>, <br>)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });

  // Accessible names, image descriptions, and meta tags
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const v = dict[el.dataset.i18nAria];
    if (v != null) el.setAttribute('aria-label', v);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const v = dict[el.dataset.i18nAlt];
    if (v != null) el.setAttribute('alt', v);
  });
  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const v = dict[el.dataset.i18nContent];
    if (v != null) el.setAttribute('content', v);
  });

  // The theme button's label lives in the same dictionary, so refresh it too,
  // and restamp the year the footer just overwrote.
  syncThemeLabel();
  stampYear();
}

langBtn.addEventListener('click', () => {
  const next = currentLang() === 'fa' ? 'en' : 'fa';
  localStorage.setItem('lang', next);
  applyLanguage(next);
});

/* ---------- Theme ---------- */

function syncThemeLabel() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const dict = TRANSLATIONS[currentLang()];
  themeBtn.setAttribute('aria-label', isDark ? dict['theme.toLight'] : dict['theme.toDark']);
  themeBtn.setAttribute('aria-pressed', String(isDark));
}

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncThemeLabel();
});

// Follow the OS theme until the user picks one explicitly
media.addEventListener('change', (e) => {
  if (localStorage.getItem('theme')) return;
  root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  syncThemeLabel();
});

/* ---------- Footer year ---------- */
// Localised digits so the Persian page doesn't mix numeral systems
function stampYear() {
  const el = document.getElementById('year');
  if (!el) return;
  const now = new Date();
  el.textContent = currentLang() === 'fa'
    // Real Jalali calendar conversion — subtracting 621 is wrong for Jan–Mar
    ? new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(now)
    : String(now.getFullYear());
}

/* ---------- Header border appears once you scroll ---------- */
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Fade elements in as they enter the viewport ---------- */
const revealables = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = `${Math.min(i * 60, 240)}ms`;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealables.forEach((el) => observer.observe(el));
}

/* ---------- Boot ---------- */
// The HTML ships in English, so only rewrite the DOM when Persian is active.
if (currentLang() === 'fa') {
  applyLanguage('fa');
} else {
  syncThemeLabel();
  stampYear();
}
