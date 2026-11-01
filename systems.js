/* Design languages Joyeta documented as AI-ready "skill" specs.
   Each entry drives a live specimen (mini UI) and a detail sheet. */
const DS = [
  {
    id: 'rico01', name: 'Rico01', tag: 'Developer console',
    line: 'A calm, warm-neutral SaaS & developer-console language with a single electric-blue accent.',
    ref: 'Linear / Vercel-style', modes: 'Light',
    font: 'Inter', mono: 'JetBrains Mono', display: 'Inter', serif: false,
    v: { canvas: '#FFFFFF', side: '#FCFBF9', surface: '#FFFFFF', hover: '#F2F1ED', text: '#141414', text2: '#5A5A5A', text3: '#818181', border: '#EAE9E7', accent: '#386AFF', primary: '#386AFF', primaryFg: '#FFFFFF', r: '10px', rBtn: '7px', frame: null, shadow: 'none' },
    swatches: [['Canvas', '#FFFFFF'], ['Subtle', '#FCFBF9'], ['Hover', '#F2F1ED'], ['Inverse', '#16151B'], ['Text', '#141414'], ['Border', '#EAE9E7'], ['Accent', '#386AFF'], ['Orange meter', '#FF6800'], ['Over limit', '#FA2C36'], ['Brand mark', '#D4FF00']],
    tags: [['Active', '#DCFCE7', '#00461D'], ['Expired', '#FFEDD4', '#731500'], ['New', '#EFF6FF', '#1B75FF']],
    useFor: ['App UI', 'Dashboards', 'Admin consoles', 'Settings', 'Data tables', 'AI chat composer', 'Onboarding'],
    principles: ['Neutral first, color with purpose: 95% of the screen is white, warm off-white and grays.', 'Exactly one primary action per view.', 'Hierarchy through weight and gray, not size (13–24px range).', 'Hairlines, not boxes: 1px warm-gray borders, almost no shadow.', 'Dark is an accent, not a theme — one near-black card for a promo or tooltip.'],
    components: ['Sidebar with workspace switcher', 'Toolbar & filters', 'Data table with segmented usage meter', 'Key-value spec table', 'Code block', 'Rich tooltip / hover card', 'Multi-step sheet', 'AI composer', 'Onboarding promo card'],
    dos: ['Keep surfaces warm (#FCFBF9, #F2F1ED)', 'Use mono for anything machine-readable', 'Let status colors carry meaning'],
    donts: ['No gradients on UI chrome', 'No more than one solid primary per region', 'No bold 700 or ALL-CAPS labels']
  },
  {
    id: 'rico02', name: 'Rico02', tag: 'Consumer AI workspace',
    line: 'Soft, airy, Apple-flavored AI workspace: neutral grays, pill buttons, an iOS-blue accent and iridescent media.',
    ref: 'Apple-style AI apps', modes: 'Light + Dark',
    font: '-apple-system, "SF Pro Text", Inter', mono: 'SF Mono, JetBrains Mono', display: '-apple-system, Inter', serif: false,
    v: { canvas: '#F2F2F2', side: '#FFFFFF', surface: '#FFFFFF', hover: '#F5F5F5', text: '#141414', text2: '#4E4E4E', text3: '#717171', border: '#ECECEC', accent: '#0191FD', primary: '#333333', primaryFg: '#FFFFFF', r: '18px', rBtn: '999px', frame: null, shadow: '0 8px 24px rgba(0,0,0,.05)', media: 'linear-gradient(135deg,#C9B8FF,#FFB8D9 45%,#9ED6FF)' },
    swatches: [['Backdrop', '#F2F2F2'], ['App', '#FFFFFF'], ['Muted', '#F5F5F5'], ['Text', '#141414'], ['Charcoal pill', '#333333'], ['iOS blue', '#0191FD'], ['Dark backdrop', '#292929'], ['Dark app', '#1A1A1A']],
    tags: [['New', '#FFF1F1', '#E90032'], ['$650/mo', '#F0F9FF', '#035AA0'], ['Free', '#F0F0F0', '#4E4E4E']],
    useFor: ['AI apps', 'Chat & agent workspaces', 'Onboarding', 'Pricing', 'Marketplaces', 'Settings'],
    principles: ['Chrome is neutral, imagery is vivid — color lives in gradient media.', 'Round and soft: pill buttons, 16–20px cards, 24–28px composers.', 'Two primaries, one meaning each: charcoal pill = do it, blue pill = upgrade.', 'Centered, editorial layouts for empty states and onboarding.', 'Depth from shadow, not lines.', 'Theme parity: every component ships light and dark.'],
    components: ['Pill app shell & mode tabs', 'Composer with model picker', 'Pricing cards', 'Feature rows with gradient thumbnails', 'Terminal / progress mock', 'Agent activity timeline', 'Marketplace list', 'Toggles & settings panels'],
    dos: ['Use pills for every button and badge', 'Center empty states with one heading', 'Put white UI fragments on gradient media'],
    donts: ['No square-cornered buttons', 'No gradients on buttons or chrome', 'No more than one blue pill per view']
  },
  {
    id: 'rico03', name: 'Rico03', tag: 'CRM + AI coworker',
    line: 'Crisp CRM and AI-agent workspace: near-white grays, glossy black buttons, bright blue, colorful category tags.',
    ref: 'Attio / Linear-style', modes: 'Light',
    font: '"Inter Display", Inter', mono: 'JetBrains Mono', display: '"Inter Display", Inter', serif: false,
    v: { canvas: '#FAFAFA', side: '#FCFCFC', surface: '#FFFFFF', hover: '#F0F0F0', text: '#171717', text2: '#464646', text3: '#6A6A6A', border: '#EEEDF1', accent: '#0090FD', primary: 'linear-gradient(180deg,#353535,#1A1A1A)', primaryFg: '#FFFFFF', r: '12px', rBtn: '9px', frame: null, shadow: 'inset 0 1px 0 rgba(255,255,255,.12)' },
    swatches: [['Page', '#FFFFFF'], ['Canvas soft', '#FAFAFA'], ['Inset', '#F5F5F5'], ['Selected', '#F0F0F0'], ['Text', '#171717'], ['Glossy black', '#1A1A1A'], ['Blue', '#0090FD'], ['In progress', '#FF5E00'], ['Done', '#16A34A'], ['Alert', '#F43F5E']],
    tags: [['AI', '#E6FBF7', '#00B99F'], ['Sales', '#FFF3E8', '#FF8300'], ['Database', '#FCEBFE', '#DB1FF6'], ['IN PROGRESS', '#FFF1E8', '#FF5E00']],
    useFor: ['CRM tables', 'Inboxes', 'AI copilot panels', 'Sign-up & onboarding', 'Record views'],
    principles: ['Near-white layering: surfaces step #FFF → #FCFCFC → #FAFAFA → #F5F5F5.', 'The glossy black button is the signature — use it once per region.', 'Blue means "live" or "linked" — never decoration.', 'Color-coded data: one hue per category, monospace status labels.', 'The AI is a coworker, not a chatbot: it shows its reasoning and returns drafts.', 'Density with breathing room: rows 44–48px.'],
    components: ['Full sidebar or icon rail', 'Three-pane inbox', 'CRM data table', 'AI coworker panel with reasoning trail', 'Compose modal with variables', 'Getting-started checklist', 'Onboarding split card'],
    dos: ['Use the glossy black gradient for primary actions', 'Give every category its own tag hue', 'Show the AI\'s reasoning steps'],
    donts: ['No solid-filled tags', 'No blue that isn\'t a link, selection or upgrade', 'No shadows on cards that sit in the layout']
  },
  {
    id: 'rico04', name: 'Rico04', tag: 'Editorial agent marketplace',
    line: 'Warm, editorial "AI agents as coworkers": stone and cream surfaces, warm black actions, sunshine yellow and serif headlines.',
    ref: 'Editorial, vintage-portrait style', modes: 'Light',
    font: 'Inter', mono: 'JetBrains Mono', display: '"Newsreader", "Source Serif 4", Georgia, serif', serif: true,
    v: { canvas: '#F2F1ED', side: '#FCFCFC', surface: '#FFFFFF', hover: '#F3F3F1', text: '#10100E', text2: '#565656', text3: '#7E7B74', border: '#ECEAE4', accent: '#3774CF', primary: '#24211A', primaryFg: '#FFFFFF', r: '16px', rBtn: '10px', frame: null, shadow: '0 8px 24px rgba(40,35,20,.05)', brand: '#FFDB40' },
    swatches: [['Canvas stone', '#F2F1ED'], ['App', '#FBFBF9'], ['Plan cream', '#FBF8F1'], ['Warm black', '#24211A'], ['Display ink', '#3F3A2C'], ['Sunshine', '#FFDB40'], ['Confirmed blue', '#3774CF'], ['Merge green', '#0A7F5A']],
    tags: [['Most recommended', '#24211A', '#FFDB40'], ['Clones 5.8k', '#F5F2EB', '#7E7B74'], ['@mention', '#C7DAF1', '#2F6BC4']],
    useFor: ['Agent marketplaces', 'Agent cards', 'Onboarding & sign-in', 'Share / publish flows', 'Pricing builders', 'Slack-style agent chat'],
    principles: ['Warm neutrals everywhere — never cool blue-grays.', 'Serif for voice, sans for work.', 'Warm black is the action color.', 'Yellow is the brand, not a UI color.', 'Blue means confirmed or linked.', 'Personas over icons: agents are vintage painted portraits.', 'Keyboard-first micro-interactions.'],
    components: ['Agent card (discover & persona)', 'Publish / share modal', 'Keyboard picker', 'User menu with credits', 'Pricing builder', 'Integration modal', 'Slack-style agent chat'],
    dos: ['Pair a serif headline with sans UI', 'Give agents names, portraits and outcomes', 'Make agent replies show what they did'],
    donts: ['No cool grays or pure #000', 'No blue primary buttons', 'No flat vector avatars']
  },
  {
    id: 'rico05', name: 'Rico05', tag: 'AI marketing operator',
    line: 'Neutral, Shopify/Linear-grade "AI marketing operator": true grays, near-black buttons, iOS blue for data and soft semantic pills.',
    ref: 'Shopify / Linear-grade', modes: 'Light + Dark',
    font: 'Inter', mono: 'JetBrains Mono', display: 'Inter', serif: false,
    v: { canvas: '#EDEDED', side: '#FAFAFA', surface: '#FFFFFF', hover: '#F5F5F5', text: '#1C1C1C', text2: '#686868', text3: '#8A8A8A', border: '#EBEBEB', accent: '#0073E0', primary: '#1C1C1C', primaryFg: '#FFFFFF', r: '12px', rBtn: '8px', frame: null, shadow: 'none' },
    swatches: [['Backdrop', '#EDEDED'], ['App', '#FFFFFF'], ['Sidebar', '#FAFAFA'], ['Text', '#1C1C1C'], ['Data blue', '#0073E0'], ['Success', '#0BA93A'], ['Warning', '#E47000'], ['Danger', '#E6241D'], ['Lime mark', '#D2F300']],
    tags: [['Active', '#DFF7E3', '#0BA93A'], ['Paused', '#FFEBD6', '#E47000'], ['Ended', '#FFE1DD', '#E6241D'], ['Draft', '#DBECFE', '#006BE6']],
    useFor: ['Marketing & e-commerce dashboards', 'Campaign tables', 'Analytics widgets', 'Approval inboxes', 'Agent run views', 'Integration settings'],
    principles: ['True neutral, no tint.', 'Black does, blue means: near-black primary actions, blue for links and data.', 'Status is semantic and soft: green active, orange paused, red ended, blue draft.', 'Decisions are first-class: anything the agent can\'t do becomes an action card.', 'Show the work: transparent agent run logs.', 'Quiet chrome, dense data.'],
    components: ['Activity / approvals inbox', 'KPI strip + chart', 'Analytics widgets', 'Campaign data table', 'Record detail view', 'Agent run log', 'Onboarding split card', 'OAuth consent'],
    dos: ['Make every pending decision a card with explicit choices', 'Pair every metric with a plain-language change', 'Design light and dark together'],
    donts: ['No blue primary buttons', 'No lime brand color in UI', 'No hidden agent actions behind a spinner']
  },
  {
    id: 'marcel', name: 'Marcel', tag: 'Premium SaaS',
    line: 'Soft-neutral premium SaaS: white cards on a warm-gray canvas, glossy "candy" primary buttons, big stat numbers and a swappable accent.',
    ref: 'Premium SaaS references', modes: 'Light + Dark · 5 accents',
    font: '"Inter Display", Inter', mono: 'JetBrains Mono', display: '"Inter Display", Inter', serif: false,
    v: { canvas: '#F6F6F6', side: '#F7F7F7', surface: '#FFFFFF', hover: '#F2F2F2', text: '#171717', text2: '#5F5F5F', text3: '#8E8E8E', border: '#E9E9E9', accent: '#1F7BF5', primary: 'linear-gradient(180deg,#4A97FF,#1F7BF5 55%,#1666D6)', primaryFg: '#FFFFFF', r: '20px', rBtn: '12px', frame: null, shadow: '0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)' },
    swatches: [['Page', '#F6F6F6'], ['Surface', '#FFFFFF'], ['Text', '#171717'], ['Blue', '#1F7BF5'], ['Ember', '#FF7A1A'], ['Indigo', '#5B5CF6'], ['Wine', '#E0243C'], ['Violet', '#7C4DFF'], ['Success', '#1FA347']],
    tags: [['Productivity', '#F2EDFF', '#7C4DFF'], ['B2B', '#E9F2FF', '#1F7BF5'], ['SaaS', '#E8F6EE', '#1FA347'], ['+5.2%', '#E8F6EE', '#1FA347']],
    useFor: ['Dashboards', 'Analytics', 'CRM tables', 'Inboxes', 'Notes & editors', 'Schedulers', 'Community feeds', 'Onboarding'],
    principles: ['Neutral canvas, white objects.', 'One accent, applied with gloss — swappable per product.', 'Softness through layers, not heaviness.', 'Big radii, nested concentrically (40 → 28 → 20 → 12).', 'Numbers are heroes: 32–40px KPIs with a colored delta.', 'Color carries category; dashed lines mean structure.', 'Show the product in onboarding.'],
    components: ['Glossy primary / secondary buttons', 'Gradient icon tiles', 'Stat / KPI card', 'Dashed-grid charts with value chips', 'Tables & invite lists', 'Inbox & feed posts', 'Scheduling & shift board', 'Editor / notebook'],
    dos: ['Keep 90% of the screen neutral', 'Make every primary CTA glossy', 'Pair every number with a delta'],
    donts: ['No colored left-edge stripes', 'No heavy shadows or borders darker than #E0E0E0', 'No more than 4 series per chart']
  },
  {
    id: 'rico06', name: 'Rico06', tag: 'Agent workspace in a frame',
    line: 'Premium AI marketing agent: a near-black app frame holding an inset light sheet, glossy candy app icons, a lime workspace mark and soft nested trays.',
    ref: 'macOS-native feel', modes: 'Light + Dark',
    font: 'Inter', mono: 'JetBrains Mono', display: 'Inter', serif: false,
    v: { canvas: '#ECECEC', side: '#FAFAFA', surface: '#FFFFFF', hover: '#F5F5F5', text: '#1D1D1D', text2: '#5B5B5B', text3: '#8C8C8C', border: '#EBEBEB', accent: '#0A7AFF', primary: '#111111', primaryFg: '#FFFFFF', r: '16px', rBtn: '999px', frame: 'linear-gradient(180deg,#1B1918,#241A16)', shadow: '0 1px 2px rgba(0,0,0,.04)', brand: '#D4F31B' },
    swatches: [['Frame', '#1B1918'], ['Sheet', '#FFFFFF'], ['Sidebar', '#FAFAFA'], ['Tray', '#F3F3F3'], ['Text', '#1D1D1D'], ['Lime mark', '#D4F31B'], ['Unread blue', '#0A7AFF'], ['Connected', '#1F9D4C'], ['Alert', '#E5342B'], ['Ember', '#FF5A1F']],
    tags: [['Connected', '#DFF5E8', '#1F9D4C'], ['Needs your input', '#FFF0E8', '#FF5A1F'], ['Ultra', '#F1EBFF', '#A855F7']],
    useFor: ['AI agent & chat workspaces', 'Command palettes', 'Composers & model pickers', 'Integration detail pages', 'Onboarding', 'CRM tables'],
    principles: ['The frame holds the sheet: a dark frame with an icon rail wraps a light content sheet.', 'Neutral everything, color only in icons.', 'Inverse primary: black in light mode, white in dark.', 'Soft nesting: composers and palettes sit inside pale trays.', 'Gloss is reserved for app icons.', 'Small, calm type (13–15px).', 'Pills and rings for chips and selection.', 'Show the agent\'s work: timelines, source chips, "+5 more".'],
    components: ['Icon rail & frame', 'Command palette', 'Composer in a tray', 'Model picker menu', 'Integration detail', 'Agent work-log timeline', 'Plan / approval card', 'Three-pane inbox'],
    dos: ['Wrap the light sheet in a dark glossy-icon frame', 'Keep surfaces neutral; let icons carry color', 'Nest composers in trays'],
    donts: ['No colored left-edge stripes', 'No blue primary buttons', 'No uppercase section labels']
  }
];

const dsEsc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function dsMini(d) {
  const v = d.v;
  const style = `--c:${v.canvas};--sd:${v.side};--sf:${v.surface};--hv:${v.hover};--t1:${v.text};--t2:${v.text2};--t3:${v.text3};--bd:${v.border};--ac:${v.accent};--pr:${v.primary};--pf:${v.primaryFg};--r:${v.r};--rb:${v.rBtn};--sh:${v.shadow};--ff:${d.font};--fd:${d.display};--fm:${d.mono}`;
  const brandDot = `<i class="dm-mark" style="background:${v.brand || v.accent}"></i>`;
  const media = v.media ? `<div class="dm-media" style="background:${v.media}"><span>What should we build?</span></div>` : '';
  const tags = d.tags.slice(0, 3).map(t => `<span class="dm-tag" style="background:${t[1]};color:${t[2]}">${dsEsc(t[0])}</span>`).join('');
  const inner = `
    <div class="dm-side"><b>${brandDot}${d.name}</b>
      <span class="dm-nav on">Home</span><span class="dm-nav">Agents</span><span class="dm-nav">Reports</span></div>
    <div class="dm-main">
      <div class="dm-h ${d.serif ? 'serif' : ''}">Good morning, Joyeta</div>
      ${media}
      <div class="dm-card"><small>Weekly active</small><strong>12,480</strong><em style="color:${d.swatches.find(s => /success|done|connected|merge/i.test(s[0]))?.[1] || v.accent}">+8.2%</em></div>
      <div class="dm-tags">${tags}</div>
      <div class="dm-row"><span class="dm-btn pri">Continue</span><span class="dm-btn sec">Cancel</span><span class="dm-link">View all</span></div>
    </div>`;
  return `<div class="dm ${v.frame ? 'framed' : ''}" style="${dsEsc(style + (v.frame ? `;--fr:${v.frame}` : ''))}">${v.frame ? `<div class="dm-rail"><i></i><i></i><i></i></div><div class="dm-sheet">${inner}</div>` : inner}</div>`;
}

function dsCard(d, k) {
  return `<button class="ds-card rv" type="button" data-ds="${d.id}" aria-label="Open ${d.name} design language">
    ${dsMini(d)}
    <span class="ds-body">
      <span class="ds-n"><b>${String(k + 1).padStart(2, '0')}</b><span>${d.tag}</span></span>
      <span class="ds-name">${d.name}</span>
      <span class="ds-line">${d.line}</span>
      <span class="ds-sw">${d.swatches.slice(0, 7).map(s => `<i style="background:${s[1]}" title="${s[0]} ${s[1]}"></i>`).join('')}</span>
      <span class="ds-meta"><span>${d.modes}</span><span>${d.ref}</span></span>
    </span>
  </button>`;
}

function dsSheet(d) {
  const list = a => a.map(x => `<li>${dsEsc(x)}</li>`).join('');
  return `<div class="dss-in">
    <div class="dss-head"><div><span class="k10">Design language · ${d.tag}</span><h3>${d.name}</h3><p>${d.line}</p></div><button class="dss-x" type="button" data-ds-close aria-label="Close">✕</button></div>
    <div class="dss-preview">${dsMini(d)}</div>
    <div class="dss-grid">
      <section><h4>Color tokens</h4><div class="dss-sw">${d.swatches.map(s => `<div><i style="background:${s[1]}"></i><b>${s[0]}</b><code>${s[1]}</code></div>`).join('')}</div>
        <h4>Status & tags</h4><div class="dss-tags">${d.tags.map(t => `<span style="background:${t[1]};color:${t[2]}">${dsEsc(t[0])}</span>`).join('')}</div></section>
      <section><h4>Typography</h4>
        <div class="dss-type"><div style="font-family:${dsEsc(d.display)}"><span>Display</span><b>${d.serif ? 'Publish your agent' : 'Quickstart'}</b><small>${d.display.split(',')[0].replace(/"/g, '')}</small></div>
        <div style="font-family:${dsEsc(d.font)}"><span>UI</span><p>Body, nav and table cells at 14–15px, weights 400/500.</p><small>${d.font.split(',')[0].replace(/"/g, '')}</small></div>
        <div style="font-family:${dsEsc(d.mono)}"><span>Mono</span><p><code>model_id · 8f2c-91ad</code></p><small>${d.mono.split(',')[0]}</small></div></div>
        <h4>Shape</h4><p class="dss-shape"><span style="border-radius:${d.v.rBtn}">Button ${d.v.rBtn}</span><span style="border-radius:${d.v.r}">Card ${d.v.r}</span><span>Base unit 4px</span></p></section>
      <section><h4>Core principles</h4><ol>${list(d.principles)}</ol></section>
      <section><h4>Components</h4><ul class="dss-comp">${list(d.components)}</ul><h4>Use it for</h4><div class="dss-use">${d.useFor.map(u => `<span>${u}</span>`).join('')}</div></section>
      <section class="dss-dd"><div><h4>Do</h4><ul>${list(d.dos)}</ul></div><div><h4>Don't</h4><ul>${list(d.donts)}</ul></div></section>
    </div>
  </div>`;
}

(function () {
  const grid = document.getElementById('dsGrid'); if (!grid) return;
  grid.innerHTML = DS.map(dsCard).join('');
  const sheet = document.getElementById('dsSheet');
  const open = id => { const d = DS.find(x => x.id === id); if (!d) return; sheet.innerHTML = dsSheet(d); sheet.hidden = false; document.body.style.overflow = 'hidden'; sheet.querySelector('.dss-x').focus(); };
  const close = () => { sheet.hidden = true; sheet.innerHTML = ''; document.body.style.overflow = ''; };
  grid.addEventListener('click', e => { const b = e.target.closest('[data-ds]'); if (b) open(b.dataset.ds); });
  sheet.addEventListener('click', e => { if (e.target === sheet || e.target.closest('[data-ds-close]')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) close(); });
})();
