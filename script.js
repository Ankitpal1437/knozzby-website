// ============ PRODUCT DATA ============
const products = [
  {
    code: "KZ-POOL",
    title: "Swimming Pool Lights",
    desc: "IP68 waterproof pool, wall-mount, fiber and spot lights in ABS, aluminium or stainless steel — built for continuous underwater use.",
    icon: `<path d="M3 12c2 1.5 3 1.5 5 0s3-1.5 5 0 3 1.5 5 0 3-1.5 5 0" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M3 17c2 1.5 3 1.5 5 0s3-1.5 5 0 3 1.5 5 0 3-1.5 5 0" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="12" cy="6" r="2.4" stroke="currentColor" stroke-width="1.6" fill="none"/>`
  },
  {
    code: "KZ-FTN",
    title: "Fountain Lights",
    desc: "RGB and underwater fountain lighting for parks, hotels and public plazas, designed for long submerged operation.",
    icon: `<path d="M12 3v7M7 6l1.6 4M17 6l-1.6 4M4 10l2.6 3M20 10l-2.6 3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M4 20c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 4-1.4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
  },
  {
    code: "KZ-FIB",
    title: "Fiber Optic Star Lights",
    desc: "Ceiling fiber systems that recreate a twinkling night sky — heat-free and safe for home theatres and bedrooms.",
    icon: `<path d="M12 3l1.2 3.2L16 7.5l-2.8 1.3L12 12l-1.2-3.2L8 7.5l2.8-1.3L12 3z" fill="currentColor"/><circle cx="18" cy="15" r="1" fill="currentColor"/><circle cx="6" cy="16" r="1" fill="currentColor"/><circle cx="15" cy="19" r="0.8" fill="currentColor"/>`
  },
  {
    code: "KZ-GDN",
    title: "Garden Lights",
    desc: "Path, spot and wall fixtures that light driveways and landscapes while cutting energy use.",
    icon: `<path d="M12 21V11" stroke="currentColor" stroke-width="1.6"/><path d="M12 11c0-4-4-4-4-8 4 0 6 3 6 6M12 11c0-4 4-4 4-8-4 0-6 3-6 6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/>`
  },
  {
    code: "KZ-HNG",
    title: "Hanging Profile Lights",
    desc: "Linear pendant fixtures with even, glare-free output for offices, retail counters and dining spaces.",
    icon: `<path d="M6 4v3M18 4v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="4" y="7" width="16" height="3.2" rx="1.6" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M8 10.5L6 15M16 10.5l2 4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`
  },
  {
    code: "KZ-WLW",
    title: "Wall Washer Lights",
    desc: "Linear and RGB washers that flood facades and walls with uniform, edge-to-edge light.",
    icon: `<rect x="4" y="4" width="16" height="3" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M6 9v10M10 9v10M14 9v10M18 9v10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/>`
  },
  {
    code: "KZ-CYL",
    title: "Cylinder Lights",
    desc: "Surface-mounted spotlighting in 7W / 12W / 20W, aluminium body, three finish options for focused interior lighting.",
    icon: `<rect x="8" y="4" width="8" height="7" rx="2" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M9 14l-2 6M15 14l2 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`
  },
  {
    code: "KZ-CLG",
    title: "Stretch Ceiling Lights",
    desc: "Seamless LED ceiling systems — perimeter, starry-sky, backlit and shaped layouts for a finished architectural look.",
    icon: `<rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.7"/>`
  },
  {
    code: "KZ-FLD",
    title: "Flood &amp; Street Lights",
    desc: "High-output LED fixtures for stadiums, yards, roads and highways, built for wide-area coverage.",
    icon: `<rect x="6" y="6" width="9" height="7" rx="1" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M15 8l4-1.5M15 11l4 1.5M4 6.5L2 5M4 13.5L2 15" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`
  },
  {
    code: "KZ-GTB",
    title: "Gate &amp; Bollard Lights",
    desc: "Entrance and pathway fixtures in wall-mounted, solar and decorative styles for secure, elegant outdoor access.",
    icon: `<rect x="9" y="3" width="6" height="9" rx="1.5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M12 12v9M8 21h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`
  },
  {
    code: "KZ-CHD",
    title: "Chandeliers",
    desc: "Crystal, modern and traditional chandeliers for homes, hotels and banquet halls that want a statement centrepiece.",
    icon: `<path d="M12 3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M5 6h14l-2 4H7L5 6z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/><path d="M8 10v3M12 10v4M16 10v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="14.4" r="1" fill="currentColor"/><circle cx="12" cy="15.4" r="1" fill="currentColor"/><circle cx="16" cy="14.4" r="1" fill="currentColor"/>`
  },
  {
    code: "KZ-CCTV",
    title: "CCTV Cameras",
    desc: "Dome, bullet, PTZ and wireless surveillance systems with night vision and remote monitoring.",
    icon: `<rect x="3" y="9" width="11" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M14 11l6-2v8l-6-2" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/>`
  },
  {
    code: "KZ-DRV",
    title: "Lighting Drivers",
    desc: "Constant current, constant voltage and dimmable drivers engineered for stable, long-life LED performance.",
    icon: `<rect x="4" y="7" width="16" height="10" rx="1.5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M8 11h2M8 14h4M14 12v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`
  },
  {
    code: "KZ-COB",
    title: "COB Smart Lights",
    desc: "App-controlled, dimmable COB downlights with high brightness and a 50,000+ hour lifespan.",
    icon: `<circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`
  }
];

const grid = document.getElementById('productGrid');
grid.innerHTML = products.map(p => `
  <div class="product-card reveal">
    <svg class="product-icon" width="30" height="30" viewBox="0 0 24 24" fill="none">${p.icon}</svg>
    <div class="product-code">${p.code}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  </div>
`).join('');

// ============ REVEAL ON SCROLL ============
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ============ MOBILE NAV ============
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============ FOOTER YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();
