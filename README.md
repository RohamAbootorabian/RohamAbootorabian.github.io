# rohamabootorabian.github.io

My personal portfolio — built from scratch with plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies.

**Live:** https://rohamabootorabian.github.io

## What's in it

- **Bilingual** — English and Persian, switched client-side with a full RTL layout flip, Vazirmatn typography, and Jalali dates
- **Light and dark themes** — follows your system setting, remembers your choice, applied before first paint so nothing flashes
- **Accessible** — every colour pair meets WCAG AA (4.5:1 minimum), all touch targets are at least 44×44px, and screen-reader labels are localised alongside the visible text
- **Light** — around 100 KB total, including all four project illustrations
- **Project artwork as inline SVG** — roughly 3 KB each, sharp at any resolution

## Structure

```
index.html    markup, with data-i18n keys on translatable text
styles.css    design tokens, layout, themes, RTL rules
i18n.js       English and Persian translation strings
script.js     theme, language, scroll reveal
assets/       project illustrations (SVG)
```

## Running locally

No build step — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
```

## License

Code is MIT. Written content and project artwork are © Roham Abootorabian.
