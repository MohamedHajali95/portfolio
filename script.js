/* ================================================
   MOHAMED HAGALI – PORTFOLIO  script.js
   ================================================ */

/* -------- NAV SCROLL EFFECT -------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

/* -------- MOBILE NAV -------- */
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

/* -------- HERO CANVAS – ANIMATED GRID -------- */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');

  let W, H, dots = [], animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createDots(count) {
    dots = [];
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 229, 195, 0.04)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Draw connections
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const opacity = (1 - dist / 140) * 0.18;
          ctx.strokeStyle = `rgba(0, 229, 195, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw dots
    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 195, ${d.alpha})`;
      ctx.fill();

      d.x += d.vx;
      d.y += d.vy;

      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    createDots(70);
    draw();
  }, { passive: true });

  resize();
  createDots(70);
  draw();
})();

/* -------- TYPED TEXT -------- */
(function initTyped() {
  const el = document.getElementById('typedText');
  const words = [
    'Data Analyst',
    'BI Specialist',
    'Reporting Analyst',
    'Operations Analyst',
    'Business Analyst'
  ];
  let wIndex = 0, cIndex = 0, deleting = false;

  function type() {
    const current = words[wIndex];

    if (!deleting) {
      el.textContent = current.slice(0, cIndex + 1);
      cIndex++;
      if (cIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 85);
    } else {
      el.textContent = current.slice(0, cIndex - 1);
      cIndex--;
      if (cIndex === 0) {
        deleting = false;
        wIndex = (wIndex + 1) % words.length;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, 45);
    }
  }

  setTimeout(type, 1200);
})();

/* -------- SCROLL REVEAL -------- */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
        let delay = 0;
        siblings.forEach((sib, i) => {
          if (sib === entry.target) delay = i * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  items.forEach(item => observer.observe(item));
})();

/* -------- SKILL BAR ANIMATION -------- */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar__fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;
        entry.target.style.width = level + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
})();

/* -------- SMOOTH SCROLL FOR ANCHOR LINKS -------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* -------- ACTIVE NAV LINK HIGHLIGHT -------- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__links a, .nav__mobile a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
})();

/* -------- CURSOR GLOW EFFECT -------- */
(function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,195,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    top: 0; left: 0;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
})();

/* -------- COUNTER ANIMATION FOR STATS -------- */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text);
      if (isNaN(num)) return;

      const suffix = text.replace(String(num), '');
      let start = 0;
      const duration = 1200;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * num) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.8 });

  counters.forEach(c => observer.observe(c));
})();
