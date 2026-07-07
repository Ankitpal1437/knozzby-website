// ============ PRODUCT DATA ============
const products = [
  {
    code: "KZ-POOL",
    title: "Swimming Pool Lights",
    desc: "IP68 waterproof pool, wall-mount, fiber and spot lights in ABS, aluminium or stainless steel — built for continuous underwater use.",
    img: "images/pool.jpg"
  },
  {
    code: "KZ-FTN",
    title: "Fountain Lights",
    desc: "RGB and underwater fountain lighting for parks, hotels and public plazas, designed for long submerged operation.",
    img: "images/fountain.jpg"
  },
  {
    code: "KZ-FIB",
    title: "Fiber Optic Star Lights",
    desc: "Ceiling fiber systems that recreate a twinkling night sky — heat-free and safe for home theatres and bedrooms.",
    img: "images/fiber.jpg"
  },
  {
    code: "KZ-GDN",
    title: "Garden Lights",
    desc: "Path, spot and wall fixtures that light driveways and landscapes while cutting energy use.",
    img: "images/garden.jpg"
  },
  {
    code: "KZ-HNG",
    title: "Hanging Profile Lights",
    desc: "Linear pendant fixtures with even, glare-free output for offices, retail counters and dining spaces.",
    img: "images/hanging.jpg"
  },
  {
    code: "KZ-WLW",
    title: "Wall Washer Lights",
    desc: "Linear and RGB washers that flood facades and walls with uniform, edge-to-edge light.",
    img: "images/wallwasher.jpg"
  },
  {
    code: "KZ-CYL",
    title: "Cylinder Lights",
    desc: "Surface-mounted spotlighting in 7W / 12W / 20W, aluminium body, three finish options for focused interior lighting.",
    img: "images/cylinder.jpg"
  },
  {
    code: "KZ-CLG",
    title: "Stretch Ceiling Lights",
    desc: "Seamless LED ceiling systems — perimeter, starry-sky, backlit and shaped layouts for a finished architectural look.",
    img: "images/stretchceiling.jpg"
  },
  {
    code: "KZ-FLD",
    title: "Flood &amp; Street Lights",
    desc: "High-output LED fixtures for stadiums, yards, roads and highways, built for wide-area coverage.",
    img: "images/flood.jpg"
  },
  {
    code: "KZ-GTB",
    title: "Gate &amp; Bollard Lights",
    desc: "Entrance and pathway fixtures in wall-mounted, solar and decorative styles for secure, elegant outdoor access.",
    img: "images/gate.jpg"
  },
  {
    code: "KZ-CHD",
    title: "Chandeliers",
    desc: "Crystal, modern and traditional chandeliers for homes, hotels and banquet halls that want a statement centrepiece.",
    img: "images/chandelier.jpg"
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
    img: "images/cob.jpg"
  }
];

const grid = document.getElementById('productGrid');
grid.innerHTML = products.map(p => `
  <div class="product-card reveal">
    <div class="product-media${p.img ? '' : ' no-photo'}">
      ${p.img
        ? `<img src="${p.img}" alt="${p.title}" loading="lazy">`
        : `<svg class="product-icon" width="34" height="34" viewBox="0 0 24 24" fill="none">${p.icon}</svg>`
      }
      <span class="product-code-tag">${p.code}</span>
    </div>
    <div class="product-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
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
