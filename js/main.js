/* ═══════════════════════════════════════════
   main.js — Portfolio Interactivity & Renderer
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initCanvas();
  initTyped();
  initScrollReveal();
  initNav();
});

/* ─────────────────────────────────────────
   RENDER ALL SECTIONS FROM data.js
───────────────────────────────────────── */

function renderAll() {
  renderProfile();
  renderSkills();
  renderExperience();
  renderEducation();
  renderCerts();
  renderContact();
}

function renderProfile() {
  const p = DATA.profile;

  // Hero name
  document.getElementById('hero-name').innerHTML =
    p.name.split(' ').slice(0, 2).join(' ') +
    '<br><span>' + p.name.split(' ').slice(2).join(' ') + '</span>';

  // Badge tagline
  document.getElementById('hero-badge').textContent = p.tagline;

  // About summary paragraphs
  const aboutText = document.getElementById('about-summary');
  aboutText.innerHTML = p.summary
    .map(t => `<p>${t}</p>`)
    .join('');

  // Stats
  const statsEl = document.getElementById('about-stats');
  statsEl.innerHTML = p.stats
    .map(s => `
      <div class="stat-card">
        <div class="stat-num">${s.num}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>`)
    .join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = DATA.skills.map(s => {
    const tags = s.tags.map((t, i) => {
      const isAmber = Array.isArray(s.amber) ? s.amber[i] : s.amber;
      return `<span class="tag${isAmber ? ' amber' : ''}">${t}</span>`;
    }).join('');
    return `
      <div class="skill-card reveal">
        <div class="skill-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <div class="skill-tags">${tags}</div>
      </div>`;
  }).join('');
}

function renderExperience() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = DATA.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${e.date}</div>
      <h3>${e.role}</h3>
      <div class="company">${e.company}</div>
      <ul>${e.duties.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>`
  ).join('');
}

function renderEducation() {
  const grid = document.getElementById('edu-grid');
  grid.innerHTML = DATA.education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-year">${e.year}</div>
      <h3>${e.school}</h3>
      <div class="field">${e.field}</div>
      <ul>${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`
  ).join('');
}

function renderCerts() {
  const grid = document.getElementById('certs-grid');
  grid.innerHTML = DATA.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-icon">${c.icon}</div>
      <div>
        <h4>${c.title}</h4>
        <p>${c.detail}</p>
      </div>
    </div>`
  ).join('');
}

function renderContact() {
  const c = DATA.contact;
  const links = document.getElementById('contact-links');
  links.innerHTML = `
    <a href="mailto:${c.email}" class="contact-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      ${c.email}
    </a>
    <a href="https://github.com/${c.github}" target="_blank" class="contact-link">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
  </svg>
  ${c.github}
</a>
    <a href="${c.linkedin}" target="_blank" class="contact-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
      in/abeil-rafli
    </a>
    <a href="#" class="contact-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      ${c.location}
    </a>`;
    
}

/* ─────────────────────────────────────────
   NETWORK CANVAS ANIMATION
───────────────────────────────────────── */

function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initNodes(n = 55) {
    nodes = Array.from({ length: n }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r:  Math.random() * 2 + 1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Move + draw nodes
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,.7)';
      ctx.fill();
    });

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${(1 - dist / 140) * .25})`;
          ctx.lineWidth = .7;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); initNodes(); });
  resize();
  initNodes();
  draw();
}

/* ─────────────────────────────────────────
   TYPED TEXT ANIMATION
───────────────────────────────────────── */

function initTyped() {
  const phrases  = DATA.profile.motto;
  const el       = document.getElementById('typed-text');
  let pi = 0, ci = 0, deleting = false, pause = 0;

  function loop() {
    if (pause > 0) { pause--; setTimeout(loop, 60); return; }
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; pause = 30; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; pause = 8; }
    }
    setTimeout(loop, deleting ? 40 : 80);
  }

  loop();
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */

function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .12 });

  // Observe both static and dynamically rendered .reveal elements
  function observeAll() {
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  // Run once on load, and again shortly after render
  observeAll();
  setTimeout(observeAll, 100);
}

/* ─────────────────────────────────────────
   STICKY NAV + MOBILE TOGGLE
───────────────────────────────────────── */

function initNav() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  // Scroll shrink
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile hamburger
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click (mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}
