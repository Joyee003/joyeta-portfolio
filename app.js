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
    line: 'Six business tools. One calm workspace. Zero double entry. A suite for Bangladeshi SMEs, built around eight everyday problems: duplicate customers, salary-day failures, load-shedding at the counter, hand-copied VAT challans and more.',
    tags: ['B2B SaaS', 'Hypothesis-driven', 'Dashboards', 'Design system', 'RICE'],
    facts: [['Role', 'Product Designer & Technical Project Manager'], ['Platform', 'SaaS web app · tablet · phone'], ['Type', 'Concept project'], ['Tools', 'Figma, Jira, Notion']],
    caps: ['Overview', 'Problem & solution', 'Research & user roles', 'Eight problems, eight hypotheses', 'Solutions · six new screens', 'Information architecture', 'Cross-module flows', 'Design system', 'Final UI · 6 modules', 'Prioritisation & metrics'],
    caps: ['Overview', 'Meet Tania, operations lead', 'Morning · CRM sales pipeline', 'A twin record, caught before it’s saved', 'ERP · buying with live stock in view', 'One approvals inbox for every module', 'HRM · leave decided from the overview', 'Payroll · October run in four steps', 'Payroll pre-flight · why ৳36,146?', 'Accounting · revenue vs expenses, month by month', 'Customer dues · a polite baki khata', 'VAT · Mushak challans write themselves', 'POS · the counter during rush hour', 'POS · power cut, keep selling', 'Responsive · tablet and phone', 'Problems & hypotheses', 'Design system', 'Prioritisation & metrics'],
    imgs: ['assets/nexa-00.jpg', 'assets/nexa-02.jpg', 'assets/nexa-s01.jpg', 'assets/nexa-s02.jpg', 'assets/nexa-s03.jpg', 'assets/nexa-s04.jpg', 'assets/nexa-s05.jpg', 'assets/nexa-s06.jpg', 'assets/nexa-s07.jpg', 'assets/nexa-s08.jpg', 'assets/nexa-s09.jpg', 'assets/nexa-s10.jpg', 'assets/nexa-s11.jpg', 'assets/nexa-s12.jpg', 'assets/nexa-resp.jpg', 'assets/nexa-03.jpg', 'assets/nexa-07.jpg', 'assets/nexa-09.jpg'],
    notes: ['', '', '9:10 AM. Tania opens Nexa One. The pipeline shows ৳5.8 Cr open and the 38-day cycle is slower than Q3, so she starts with stuck deals.', 'A rep types “Rahman Tex Ltd”. Phone and BIN already match Rahman Textiles, so Nexa One offers to reuse it. One customer, one balance, one VAT number.', 'In ERP she sees cotton yarn at 120 kg next to the purchase requests, so she approves the yarn request first.', 'Discounts, purchase requests, leave and pay runs land in one inbox, already checked for margin, dues and stock.', 'Four leave requests are approved straight from the HRM overview, with attendance and headcount beside them.', 'The October run is blocked by three missing bank details. The banner says exactly who and how to fix it.', 'Before approving November, pre-flight splits pay by bKash, Nagad and bank, and every payslip explains its own number.', 'Each stick shows revenue (blue), expenses (red) and the profit between them, so the trend reads at a glance. October: ৳92.6L profit, 28.8% margin.', 'Overdue customers get a friendly reminder in their own language, and the POS warns before new credit.', 'Every sale already wrote its Mushak 6.3 challan, so the monthly 9.1 return is a draft to check, not two days of copying.', 'At the counter Rafi rings up an order with big tiles and quantity buttons, then takes cash, card or bKash.', 'When the power goes, sales keep saving on the tablet with their VAT challans and sync when the internet is back.', 'Reps get a landscape tablet pipeline; owners approve and check cash on a phone, one decision at a time.', '', '', ''],
    alts: ['Nexa One cover with CRM, HRM and Accounting screens', 'Four user roles and research insights', 'CRM sales pipeline kanban with deal values', 'Duplicate company check with a 92% match', 'ERP procurement requests with low-stock alerts', 'Approvals inbox with an automatic margin, dues and stock check', 'HRM overview with leave approvals and attendance', 'October payroll run with missing bank details warning', 'November payroll pre-flight by payout channel with a payslip breakdown', 'Accounting overview with a revenue and expenses lollipop chart', 'Customer dues by age with a reminder preview', 'VAT page with Mushak 6.3 challans and return readiness', 'POS counter with product tiles and order panel', 'POS offline mode during a power cut', 'Tablet CRM pipeline and phone approvals and finance screens', 'Eight problem cards with hypotheses and metrics', 'Design system tokens and components', 'RICE prioritisation and success metrics']
  },
  {
    id: 'shonchoy', n: '04', title: 'Shonchoy',
    line: 'A safer banking app for Bangladesh: bank-verified names, fees shown before you send, plain-language errors — plus a scam-call pause and a 10-minute undo no local bank app offers.',
    tags: ['Fintech', 'Mobile app', 'Trust & safety', 'Accessibility', 'Prototype'],
    facts: [['Role', 'Product Designer'], ['Platform', 'iOS & Android'], ['Type', 'Concept project'], ['Tools', 'Figma, FigJam']],
    caps: ['Overview', 'Problem & solution', 'Research & persona', '12 banking problems → solutions', '5 ideas other bank apps don’t have', 'User flow', 'Final UI · 12 screens', 'Decisions & trade-offs', 'Card collection', 'Design system & metrics'],
    alts: ['Shonchoy cover with dark amount, home and confirm screens and floating trust chips', 'Problem, how-might-we and solution cards', 'Three research insights and the persona Arif Hossain', 'Table of twelve banking app problems, what happens, the design solution and the screen', 'Scam-call pause, Safe Send undo, amount in words, trusted person and money-status-first ideas', 'Send money flow with failure, retry, help and ticket path', 'Twelve final light app screens from login to safety settings', 'Six design decisions such as hold to send and a hidden balance', 'Midnight, Nakshi, Glass and Monsoon card designs', 'Colour variables, components, success metrics, accessibility and next steps']
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
  id: 'rovea', n: '05', title: 'ROVEA',
  line: 'Find your kind of escape. A brand and responsive web app that turns “let’s go somewhere” into a realistic 24, 48 or 72-hour plan, matched to your time, budget and mood.',
  tags: ['Brand identity', 'Responsive web app', 'Travel', 'Design system', 'Research synthesis'],
  facts: [['Role', 'Brand & Product Designer'], ['Platform', 'Responsive web app'], ['Type', 'Concept project'], ['Tools', 'Figma']],
  caps: ['Brand cover', 'Logo system', 'Visual identity system', 'Brand applications', 'Shree’s story & the problem', 'Research & key insights', 'User journey & experience strategy', 'Design system', 'Travel discovery homepage', 'Personalised discovery', 'Destination details · Kyoto', '48–72 hour itinerary builder', 'My Trips dashboard'],
  alts: ['ROVEA cover: Find your kind of escape, with a lake photo and a ready-plan card', 'Logo system with stacked, horizontal and dark lockups, app marks at 48 to 16px and construction', 'Arctic blue, citrus lime and navy palette, Manrope and DM Sans type scale, buttons, filters and inputs', 'Poster, social posts, app preview, escape pass and promotional banner', 'Persona Shree, 25, a normal week and how planning feels today', 'User needs, pain points, design opportunities and insight-to-screen mapping', 'Six-stage journey with an emotion curve, with ROVEA versus planning today', 'Design system: logos, icons, buttons, inputs, cards, navigation and the escape planner', 'Homepage with hero, escape planner, featured escapes and curated plans', 'Personalised results with filters, why-it-fits reasons and a comparison table', 'Kyoto destination page with experiences, places, food and a suggested plan', 'Editable day-by-day itinerary with walking times, map and budget', 'My Trips dashboard with upcoming trip, budget, documents and saved places']
};
const MORE2 = {
  id: 'pathshala', n: '06', title: 'Pathshala',
  line: 'A bilingual learning app for Class 6–10 students: a 20-minute daily plan, short Bangla lessons, practice that explains, offline downloads and a weekly report parents can open on WhatsApp.',
  tags: ['EdTech', 'Mobile app', 'Bilingual UX', 'Low-data design', 'Habit building'],
  facts: [['Role', 'Product Designer'], ['Platform', 'Android-first mobile app'], ['Type', 'UI showcase'], ['Tools', 'Figma']],
  caps: ['Overview', 'Problem & solution', 'Who it’s for', 'Final UI · one learning loop', 'More screens · offline, doubts, parents, class', 'Design system & metrics'],
  figma: '2-6',
  alts: ['Pathshala cover with lesson player, home and practice screens on indigo', 'Problem, how-might-we and solution cards', 'Three user groups: students, parents and low-data users', 'Four screens: home plan, lesson player, practice and progress', 'Four new screens: offline downloads, ask a teacher, parent weekly report and class challenge', 'Colour variables, components and four success metrics']
};
const MORE3 = {
  id: 'sentry', n: '06', title: 'SENTRY AI',
  line: 'An AI SaaS business-intelligence dashboard. It tells an e-commerce operations manager what changed, why it may have happened, and what to do next, with confidence shown on every prediction.',
  tags: ['AI SaaS', 'B2B dashboard', 'Data visualisation', 'Responsive web', 'Design system'],
  facts: [['Role', 'Product Designer'], ['Platform', 'AI SaaS · web, tablet, mobile'], ['Type', 'Concept project'], ['Tools', 'Figma']],
  caps: ['Overview', 'Problem · Nadia and Understand → Predict → Act', 'Overview dashboard · AI Daily Briefing', 'AI Insights Center', 'Sales Analytics', 'Marketing performance', 'Inventory intelligence', 'AI Forecasting · scenarios and confidence', 'Ask AI workspace', 'Notifications & Action Center', 'Responsive · tablet and mobile'],
  notes: ['', '', 'Every morning starts with a briefing in four steps: what happened, why it may be, the impact, and what to do next.', 'Insights are ranked by impact, urgency and confidence. Each one carries its evidence and a one-click next step.', 'Every chart answers a business question, and numbers match the Overview for the same period.', 'SENTRY AI flags the two campaigns using half the spend for a fifth of the return.', 'Days remaining = stock ÷ 7-day sales. The serum alert ties back to the Overview.', 'Scenarios change one assumption at a time. The shaded range shows uncertainty, and past accuracy is shown.', 'Answers cite their data sources, show a supporting chart and say how confident they are.', 'Each alert has an owner and a resolution tracker, so nothing gets lost.', 'Tablet uses an icon rail; mobile moves navigation to a bottom bar with Ask AI in the centre.'],
  figma: '232-610',
  alts: ['SENTRY AI dark cover with the overview dashboard and mobile app', 'Persona Nadia, before and after, and the Understand, Predict, Act model', 'Overview dashboard with the AI Daily Briefing, KPIs, revenue chart and alerts', 'AI Insights Center with six ranked insight cards and a detail panel', 'Sales analytics with revenue trend, categories, regions, channels and products', 'Marketing performance with spend vs revenue, funnel and campaign table', 'Inventory intelligence with stock alerts, movement chart and inventory table', 'Forecast with confidence band, scenarios, demand table and assumptions', 'Ask AI chat with a sourced answer, supporting chart and suggested questions', 'Action center with filters, notification list and resolution tracker', 'Tablet and mobile versions of the Overview, AI Insights and Ask AI']
};
const FP = {
  moodbrew: { node: '118-930', page: '2-2', d: 'phone', hint: 'Start: Get started → mood check-in → preferences → recommendation → checkout → feedback' },
  shuddhi: { node: '72-1489', page: '61-1033', d: 'web', hint: 'Start: Take the skin quiz → Next → Add routine → Checkout → Place order → View my routine' },
  nexa: { node: '21-434', page: '2-4', d: 'web', hint: 'Use “All modules” in the sidebar to switch between CRM, ERP, HRM, Payroll, Accounting and POS' },
  shonchoy: { node: '131-758', page: '2-5', d: 'phone', hint: 'Start: Touch to unlock → Send → Continue → Review → Hold to send · try More, the bell and History too' }
};
const protoUrl = (id, embed) => {
  const p = FP[id]; const q = `node-id=${p.node}&starting-point-node-id=${p.node}&page-id=${p.page}&scaling=${p.d === 'phone' ? 'scale-down' : 'scale-down-width'}&content-scaling=fixed`;
  return embed ? `https://embed.figma.com/proto/5BtLWG4gRtr6r6JCMc1cQw/Portfolio?${q}&hide-ui=1&embed-host=joyeta-portfolio` : `https://www.figma.com/proto/5BtLWG4gRtr6r6JCMc1cQw/Portfolio?${q}`;
};
const ORDER = ['sentry', 'rovea', 'shonchoy', 'shuddhi', 'nexa', 'moodbrew', 'pathshala'];
const ALL = ORDER.map(id => [...P, MORE, MORE2, MORE3].find(p => p.id === id));
ALL.forEach((p, k) => p.n = String(k + 1).padStart(2, '0'));
const img = (p, i) => (p.imgs && p.imgs[i]) || `assets/${p.id}-${String(i).padStart(2, '0')}.jpg`;
const card = (p, k) => `
<a class="c10 rv" href="#case-${p.id}">
  <span class="c10-img"><img src="assets/${p.id}-thumb.jpg" alt="${p.alts[0]}" loading="lazy"></span>
  <span class="c10-body">
    <span class="c10-n"><b>Case ${String(k + 1).padStart(2, '0')} / ${String(ALL.length).padStart(2, '0')}</b><span>${p.tags[0]}</span></span>
    <h3>${p.title}</h3>
    <p>${p.line}</p>
    <span class="c10-meta"><span><small>Role</small><span>${p.facts[0][1]}</span></span><span><small>Platform</small><span>${p.facts[1][1]}</span></span></span>
    <span class="c10-tags">${p.tags.slice(1, 4).map(t => `<span>${t}</span>`).join('')}</span>
    <span class="c10-go"><span>${FP[p.id] ? 'Case study + live prototype' : p.id === 'rovea' ? 'Brand + product case study' : p.id === 'sentry' ? 'AI SaaS case study · 20 screens' : 'UI case study'}</span><i>→</i></span>
  </span>
</a>`;
document.getElementById('projects').innerHTML = ALL.map((p, k) => card(p, k)).join('');
const _more = document.getElementById('more'); if (_more) _more.innerHTML = '';
const _ft = document.getElementById('figmaTop'); if (_ft) _ft.href = FIGMA;


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
        ${d.themes ? '<div class="pv-theme" role="group" aria-label="App theme"><button type="button" data-theme="light" aria-pressed="true">Light</button><button type="button" data-theme="dark" aria-pressed="false">Dark</button></div>' : ''}<div class="pv-now"></div><p class="pv-scrolltip" hidden>↕ Scroll inside the phone to see more</p>
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
  <div class="case-bar"><div class="wrap"><span class="crumbs">Case study ${p.n} / ${String(ALL.length).padStart(2, '0')} · ${p.title}</span><a class="btn ghost" href="#work">✕ Close</a></div></div>
  <div class="wrap">
    <div class="case-hero"><div class="case-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div><h1>${p.title}</h1><p class="lede">${p.line}</p>
      <dl class="facts">${p.facts.map(f => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl>
      <div class="case-actions">${FP[p.id] ? `<a class="btn" href="#proto-${p.id}" data-jump="proto-${p.id}">▶ Try the prototype</a><a class="btn ghost" href="${protoUrl(p.id)}" target="_blank" rel="noopener">Open in Figma prototype ↗</a>` : `<a class="btn" href="${FIGMA}?node-id=${p.figma || '203-2062'}" target="_blank" rel="noopener">Open in Figma ↗</a>`}<a class="btn ghost" href="#contact">Talk about this project</a></div>
    </div>
    ${protoSection(p)}
    <div class="case-figs">${p.caps.map((c, i) => `<figure><figcaption>${String(i + 1).padStart(2, '0')} · ${c}</figcaption>${p.notes && p.notes[i] ? `<p class="fig-note">${p.notes[i]}</p>` : ''}<div class="fig-frame"><img src="${img(p, i)}" alt="${p.alts[i]}" loading="lazy"></div></figure>`).join('')}</div>
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
document.querySelectorAll('[data-copy]').forEach(b => { const _t = b.textContent; b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied ✓'; } catch (e) { b.textContent = 'Select & copy'; }
  setTimeout(() => b.textContent = _t, 2000);
}); });

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
  img.src = (root.dataset.mode || (d.themes ? 'light' : '')) === 'light' ? s.img.replace(/-(\d+)\.jpg$/, '-light-$1.jpg').replace(/\/(\w+)-light-/, '/$1-light-') : s.img; img.alt = s.name; img.style.aspectRatio = (1 / s.ar).toFixed(4);
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
    const th = e.target.closest('.pv-theme button'); if (th) { root.dataset.mode = th.dataset.theme; root.querySelectorAll('.pv-theme button').forEach(b => b.setAttribute('aria-pressed', b === th ? 'true' : 'false')); protoGo(id, PSTATE[id] || 0, true); return; }
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

addEventListener('scroll',()=>{const n=document.querySelector('nav.top, nav.n10'); if(n) n.classList.toggle('scrolled',scrollY>10)},{passive:true});
/* v10: Khulna clock + reveal on scroll */
(function(){const t=document.getElementById('khulnaTime'); if(t){const d=()=>{try{t.textContent=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Dhaka',hour:'numeric',minute:'2-digit'})+' in Khulna'}catch(e){}};d();setInterval(d,30000)}
document.querySelectorAll('.pc,.proc10,.xp10 li,.uxc,.ct10,.h10-stats').forEach(el=>el.classList.add('rv'));
if(!('IntersectionObserver' in window)){document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));})();

(function(){const t=document.getElementById('khulnaNow');if(!t)return;const d=()=>{try{t.textContent=new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Dhaka',hour:'numeric',minute:'2-digit'})+' in Khulna'}catch(e){}};d();setInterval(d,30000)})();
