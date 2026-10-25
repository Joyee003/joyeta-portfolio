const FIGMA = 'https://www.figma.com/design/5BtLWG4gRtr6r6JCMc1cQw';
const P = [
  {
    id: 'shuddhi', n: '02', title: 'Shuddhi (শুদ্ধি)',
    line: 'Shuddhi is a responsive skincare e-commerce website for Bangladesh, built around trust: a skin quiz that builds your routine, product pages that prove authenticity, one-page checkout and reorder reminders.',
    tags: ['E-commerce', 'Responsive website', 'Problem → solution map', 'Design system', 'Prototype'],
    facts: [['Role', 'Product Designer & PM'], ['Platform', 'Responsive web · 1440 → 390'], ['Type', 'Concept project'], ['Tools', 'Figma, FigJam']],
    caps: ['Overview', 'Problem: trust', 'Research & persona', '12 business problems → solutions', '12 UI/UX problems → pages', 'Product page anatomy', 'User flow', 'Design system', 'Final UI · 9 desktop pages + mobile', 'Priorities & metrics'],
    alts: ['Shuddhi cover with the desktop home page and the mobile home screen', 'Three trust questions shoppers ask', 'Persona Nusrat and four research insights', 'Table of twelve wellness e-commerce business problems, what happens and the solution', 'Table of twelve skincare UI/UX problems, the design solution and the page that solves it', 'Mobile product page and details annotated with the seven-part order', 'Quiz-led, shop-by-concern and retention flows across the nine pages', 'Plum, peach and cream colour variables, type scale and components', 'Nine desktop pages and eight mobile screens', 'Six priorities and four success metrics']
  },
  {
    id: 'nexa', n: '03', title: 'Nexa One',
    line: 'One design system for six business tools: CRM, ERP, HRM, Payroll, Accounting and POS.',
    tags: ['B2B SaaS', 'Dashboards', 'Information architecture', 'Design system', 'RICE'],
    facts: [['Role', 'Product Designer & Technical PM'], ['Platform', 'Web app + tablet POS'], ['Type', 'Concept project'], ['Tools', 'Figma, Jira, Notion']],
    caps: ['Overview', 'Problem & solution', 'Research & user roles', 'Information architecture', 'Cross-module flows', 'Design system', 'Final UI · 6 modules', 'Prioritisation & metrics'],
    alts: ['Nexa One cover with three module dashboards', 'Problem, how-might-we and solution cards', 'Four user roles and three insights', 'Six module menus on a shared data layer', 'Quote to cash, hire to pay and counter to stock flows', 'Shell anatomy, colour variables and shared components', 'CRM, ERP, HRM, Payroll, Accounting and POS screens with design decisions', 'RICE prioritisation table and metrics']
  },
  {
    id: 'shonchoy', n: '04', title: 'Shonchoy',
    line: 'A safer banking app for Bangladesh: bank-verified names, fees shown before you send, plain-language errors — plus a scam-call pause and a 10-minute undo no local bank app offers.',
    tags: ['Fintech', 'Mobile app', 'Trust & safety', 'Accessibility', 'Prototype'],
    facts: [['Role', 'Product Designer'], ['Platform', 'iOS & Android'], ['Type', 'Concept project'], ['Tools', 'Figma, FigJam']],
    caps: ['Overview', 'Problem', 'Research & persona', '12 banking problems → solutions', '5 ideas other bank apps don’t have', 'User flow', 'Final UI · 12 screens', 'Design system & metrics'],
    alts: ['Shonchoy cover with amount, home and confirm screens', 'Problem, how-might-we and solution cards', 'Research insights and the persona Arif Hossain', 'Table of twelve banking app problems, what happens, the design solution and the screen', 'Scam-call pause, Safe Send undo, amount in words, trusted person and money-status-first ideas', 'Send money flow with failure and help path', 'Twelve final app screens', 'Colour variables, components and success metrics']
  },
  {
    id: 'moodbrew', n: '01', title: 'MoodBrew',
    line: 'An emotion-aware coffee app that recommends what to drink based on how you feel, and explains why.',
    tags: ['Mobile app', 'UX research', 'Journey map', 'Design system', 'Prototype'],
    facts: [['Role', 'Product Designer'], ['Platform', 'iOS & Android'], ['Type', 'Concept project'], ['Tools', 'Figma, FigJam']],
    caps: ['Overview', 'Problem & solution', 'Research & persona', 'Mood → coffee logic', 'User journey map', 'User flow', 'Design system', 'Wireframes & iteration', 'Final UI · 8 screens', 'Scope, metrics & next steps'],
    alts: ['MoodBrew cover with the onboarding, recommendation and mood screens', 'Problem, how-might-we and solution cards', 'Research methods, four insights and the persona Nadia Rahman', 'Table mapping seven moods to coffees with caffeine level and reasons, plus four context rules', 'Journey map with stages, thoughts, emotion curve, pain points and opportunities', 'User flow from opening the app to the mood check-in, with three decision points', 'Colour variables, type scale and components', 'Four greyscale wireframes and the iteration note', 'A dark concept onboarding screen and seven light app screens', 'MoSCoW scope, success metrics and next steps']
  }
];
const MORE = {
  id: 'pathshala', n: '05', title: 'Pathshala',
  line: 'UI showcase: a bilingual learning app for Class 6–10 students, built on my ishQool project experience.',
  tags: ['EdTech', 'Mobile app', 'Bangla + English'],
  facts: [['Role', 'Product Designer'], ['Platform', 'Android-first'], ['Type', 'UI showcase'], ['Tools', 'Figma']],
  caps: ['Overview', 'Problem & solution', 'Who it’s for', 'Final UI · learning loop', 'Design system & metrics'],
  alts: ['Pathshala cover with three app screens', 'Problem, how-might-we and solution cards', 'Students, parents and low-data users', 'Home, lesson player, practice and progress screens', 'Colour variables, components and metrics']
};
const FP = {
  moodbrew: { node: '118-930', page: '2-2', d: 'phone', hint: 'Start: Get started → mood check-in → preferences → recommendation → checkout → feedback' },
  shuddhi: { node: '72-1489', page: '61-1033', d: 'web', hint: 'Start: Take the skin quiz → Next → Add routine → Checkout → Place order → View my routine' },
  nexa: { node: '21-434', page: '2-4', d: 'web', hint: 'Use “All modules” in the sidebar to switch between CRM, ERP, HRM, Payroll, Accounting and POS' },
  shonchoy: { node: '131-758', page: '2-5', d: 'phone', hint: 'Start: Touch to unlock → Send → Continue → Review → Hold to send · try More, the bell and History too' },
  pathshala: { node: '31-189', page: '2-6', d: 'phone', hint: 'Start: Continue lesson → Practice → Next question' }
};
const protoUrl = (id, embed) => {
  const p = FP[id]; const q = `node-id=${p.node}&starting-point-node-id=${p.node}&page-id=${p.page}&scaling=${p.d === 'phone' ? 'scale-down' : 'scale-down-width'}&content-scaling=fixed`;
  return embed ? `https://embed.figma.com/proto/5BtLWG4gRtr6r6JCMc1cQw/Portfolio?${q}&hide-ui=1&embed-host=joyeta-portfolio` : `https://www.figma.com/proto/5BtLWG4gRtr6r6JCMc1cQw/Portfolio?${q}`;
};
const ALL = [...P.filter(p => p.id === 'moodbrew'), ...P.filter(p => p.id !== 'moodbrew'), MORE];
const img = (p, i) => `assets/${p.id}-${String(i).padStart(2, '0')}.jpg`;
const card = (p) => `
<a class="proj" href="#case-${p.id}">
  <span class="pimg"><img src="assets/${p.id}-thumb.jpg" alt="${p.alts[0]}" loading="lazy"></span>
  <span class="pbody">
    <span class="tag">${p.n} · ${p.tags[0]}</span>
    <h3>${p.title}</h3>
    <p>${p.line}</p>
    <span class="meta">${p.tags.map(t => `<span class="pill">${t}</span>`).join('')}</span>
    <span class="go"><span>Case study + live prototype</span><span>→</span></span>
  </span>
</a>`;
document.getElementById('projects').innerHTML = ALL.map(card).join('');
document.getElementById('more').innerHTML = '';
document.getElementById('figmaTop').href = FIGMA;


function protoSection(p) {
  const d = PROTO[p.id]; if (!d) return '';
  return `<section class="pv pv-${d.device}" id="proto-${p.id}" data-proto="${p.id}" aria-label="${p.title} interactive prototype">
    <div class="pv-head"><div><span class="tag">Interactive prototype</span><h2>Try ${p.title}</h2>
      <p>Every screen is exported from my Figma file with the same names and links. Click the buttons on the screen to move through the flow, like the Figma prototype.</p></div></div>
    <div class="pv-body">
      <div class="pv-stage"><button class="pv-arrow" type="button" data-prev aria-label="Previous screen">‹</button>
      <div class="pv-device">${d.device === 'desktop' ? `<div class="pv-chrome"><i></i><i></i><i></i><span>${p.id === 'nexa' ? 'app.nexaone.io' : 'shuddhi.com.bd'}</span></div><div class="pv-viewport">` : '<div class="pv-screen">'}
        <div class="pv-inner"><img alt=""><div class="hs-layer"></div></div>
      ${'</div>'}</div>
      <button class="pv-arrow" type="button" data-step="1" aria-label="Next screen">›</button></div>
      <aside class="pv-side">
        <div class="pv-now"></div><p class="pv-scrolltip" hidden>↕ Scroll inside the phone to see more</p>
        <ol class="pv-list">${d.screens.map((s, i) => `<li><button type="button" data-go="${i}"><b>${String(i + 1).padStart(2, '0')}</b>${s.name.replace(/^\d+ · /, '')}</button></li>`).join('')}</ol>
        <div class="pv-ctrls"><button type="button" data-prev>← Previous</button><span class="count"></span><button type="button" data-step="1">Next →</button><button type="button" data-go="0">Restart</button></div>
        <label class="pv-toggle"><input type="checkbox" data-hs> Show clickable areas</label>
        <p class="pv-hint">Tip: click anywhere on the screen to see what is clickable. Arrow keys also work.</p>
      </aside>
    </div></section>`;
}

const layer = document.getElementById('caseLayer');
layer.innerHTML = ALL.map((p, k) => {
  const nxt = ALL[(k + 1) % ALL.length];
  return `<article class="case" id="case-${p.id}" aria-label="${p.title} case study">
  <div class="case-bar"><div class="wrap"><span class="crumbs">Case study ${p.n} / 05 · ${p.title}</span><a class="btn ghost" href="#work">✕ Close</a></div></div>
  <div class="wrap">
    <div class="case-hero"><span class="tag">${p.tags.join(' · ')}</span><h1>${p.title}</h1><p class="lede">${p.line}</p>
      <dl class="facts">${p.facts.map(f => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl>
      <div class="case-actions"><a class="btn" href="#proto-${p.id}" data-jump="proto-${p.id}">▶ Try the prototype</a><a class="btn ghost" href="${protoUrl(p.id)}" target="_blank" rel="noopener">Open in Figma prototype ↗</a><a class="btn ghost" href="#contact">Talk about this project</a></div>
    </div>
    ${protoSection(p)}
    <div class="case-figs">${p.caps.map((c, i) => `<figure><figcaption>${String(i + 1).padStart(2, '0')} · ${c}</figcaption><img src="${img(p, i)}" alt="${p.alts[i]}" loading="lazy"></figure>`).join('')}</div>
    <div class="next-case"><span class="tag">Next</span><a href="#case-${nxt.id}">${nxt.title} →</a></div>
  </div></article>`;
}).join('');

function route() {
  const h = location.hash.slice(1); let open = false;
  document.querySelectorAll('.case').forEach(el => { const on = el.id === h; el.classList.toggle('open', on); if (on) { open = true; el.scrollTop = 0; } });
  document.body.style.overflow = open ? 'hidden' : '';
}
window.addEventListener('hashchange', route); route();
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.querySelector('.case.open')) location.hash = 'work'; });
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied ✓'; } catch (e) { b.textContent = 'Select & copy'; }
  setTimeout(() => b.textContent = 'Copy', 2000);
}));

/* time zone chips */
(function () {
  const zones = [['Khulna', 'Asia/Dhaka', true], ['New York', 'America/New_York'], ['London', 'Europe/London'], ['Berlin', 'Europe/Berlin'], ['Dubai', 'Asia/Dubai']];
  const row = document.getElementById('tzRow'); if (!row) return;
  const draw = () => {
    const now = new Date();
    row.innerHTML = zones.map(([n, z, home]) => {
      let t = ''; try { t = now.toLocaleTimeString('en-US', { timeZone: z, hour: 'numeric', minute: '2-digit' }); } catch (e) { t = '—'; }
      return `<div class="tz-chip${home ? ' home' : ''}"><b>${t}</b><span>${n}${home ? ' · me' : ''}</span></div>`;
    }).join('');
  };
  draw(); setInterval(draw, 30000);
})();

document.addEventListener('click', e => { const a = e.target.closest('[data-jump]'); if (!a) return; e.preventDefault(); const t = document.getElementById(a.dataset.jump); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); });

/* prototype engine */
const PSTATE = {}, PHIST = {};
function protoGo(id, i, back) {
  if (!back && PSTATE[id] != null && PSTATE[id] !== i) (PHIST[id] = PHIST[id] || []).push(PSTATE[id]);
  const root = document.getElementById('proto-' + id); if (!root) return;
  const d = PROTO[id]; i = (i + d.screens.length) % d.screens.length; PSTATE[id] = i;
  const s = d.screens[i];
  const img = root.querySelector('.pv-inner img');
  img.style.animation = 'none'; img.offsetHeight; img.style.animation = '';
  img.src = s.img; img.alt = s.name; img.style.aspectRatio = (1 / s.ar).toFixed(4);
  const scr = root.querySelector('.pv-screen'); if (scr) { scr.classList.toggle('scrolly', !!s.scroll); scr.scrollTop = 0; }
  const tip = root.querySelector('.pv-scrolltip'); if (tip) tip.hidden = !s.scroll;
  root.querySelector('.hs-layer').innerHTML = s.hs.map(h => `<button class="pv-hs" type="button" data-to="${h.to}" aria-label="${h.n}: go to ${d.screens[h.to].name}" style="left:${h.l}%;top:${h.t}%;width:${h.w}%;height:${h.h}%"></button>`).join('');
  root.querySelector('.pv-now').textContent = s.name;
  root.querySelector('.count').textContent = `${i + 1} / ${d.screens.length}`;
  root.querySelectorAll('.pv-list button').forEach((b, k) => b.setAttribute('aria-current', k === i ? 'true' : 'false'));
  const vp = root.querySelector('.pv-viewport'); if (vp) vp.scrollTop = 0;
  root.querySelectorAll('[data-prev]').forEach(b => b.disabled = i === 0 && !(PHIST[id] || []).length);
}
function protoBack(id) { const h = PHIST[id] || []; if (h.length) protoGo(id, h.pop(), true); else protoGo(id, Math.max(0, (PSTATE[id] || 0) - 1), true); }
document.querySelectorAll('[data-proto]').forEach(root => {
  const id = root.dataset.proto;
  root.addEventListener('click', e => {
    const hs = e.target.closest('.pv-hs'); if (hs) { protoGo(id, +hs.dataset.to); return; }
    if (e.target.closest('[data-prev]')) { protoBack(id); return; }
    const g = e.target.closest('[data-go]'); if (g) { if (+g.dataset.go === 0) PHIST[id] = []; protoGo(id, +g.dataset.go); return; }
    const st = e.target.closest('[data-step]'); if (st) { protoGo(id, (PSTATE[id] || 0) + +st.dataset.step); return; }
    const si = e.target.closest('.pv-inner'); if (si) { si.classList.remove('flash'); si.offsetHeight; si.classList.add('flash'); setTimeout(() => si.classList.remove('flash'), 700); }
  });
  root.querySelector('[data-hs]').addEventListener('change', e => root.classList.toggle('show-hs', e.target.checked));
  protoGo(id, 0);
});
document.querySelectorAll('[data-jump]').forEach(b => b.addEventListener('click', () => document.getElementById(b.dataset.jump).scrollIntoView({ behavior: 'smooth', block: 'start' })));
document.addEventListener('keydown', e => {
  const open = document.querySelector('.case.open'); if (!open || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const pr = open.querySelector('[data-proto]'); if (!pr) return;
  const id = pr.dataset.proto; if (e.key === 'ArrowLeft') protoBack(id); else protoGo(id, (PSTATE[id] || 0) + 1);
});

addEventListener('scroll',()=>document.querySelector('nav.top').classList.toggle('scrolled',scrollY>10),{passive:true});
