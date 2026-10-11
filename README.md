# Kezia Portfolio – interactive website

Static site (HTML + CSS + vanilla JS). No install or build needed.

## Run
Option A (any machine with Node): `npx serve .`  then open the printed URL.
Option B (VS Code): install the "Live Server" extension, right-click `index.html` > Open with Live Server.
Option C: `python3 -m http.server 8000` then open http://localhost:8000

## Files
- `index.html` – structure, slides, hotspots, modals
- `style.css` – layout, buttons, transitions
- `script.js` – navigation, keyboard/swipe, modals, copy email
- `assets/` – your six images (renamed)

## Interactions added (the PNGs had none)
Top menu, Prev/Next buttons, dots, arrow keys, swipe, URL hash (#about),
"Enter portfolio" and "Meet me" buttons, tool-icon tooltips, "Zoom the app" lightbox,
"Email me" / "Instagram" links, "Copy email" button, "Back to top".

## Substitutions / limitations
- Each page is your original JPEG used as the artwork, so the look is identical, but the text inside the
  pages is part of the image (not selectable, does not reflow). A true text rebuild needs the separate layered
  assets (calendar, dragon, tiles, tool icons, display font). Send them and the pages can be rebuilt as live HTML.
- Display font for the UI buttons: "Londrina Solid" (Google Fonts) stands in for your blocky title font. Falls back to Impact offline.
- The Instagram link (vale.portofolio) and email are read from the image; check them.
- Not yet compared side-by-side in a browser; hotspot positions are percentages measured from the 1280x905 pages.
