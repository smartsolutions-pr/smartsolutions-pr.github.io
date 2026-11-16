const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});

/* ---------- Idioma / Language (ES por defecto) ---------- */
const EN = {
  "t1": "Name ",
  "t2": "Company ",
  "t3": "Work email ",
  "t4": "Number of employees ",
  "t5": "How can we help? ",
  "t6": "Skip to content",
  "t7": "TECHNOLOGY FOR YOUR BUSINESS",
  "t8": "Menu",
  "t9": "Services",
  "t10": "About",
  "t11": "How we work",
  "t12": "Let's talk about your business <span aria-hidden=\"true\">↗</span>",
  "t13": "YOUR OUTSOURCED IT DEPARTMENT · PUERTO RICO",
  "t14": "Your company's technology,<br><span>in expert hands.</span>",
  "t15": "We take care of your company's technology so you can focus on growing your business.",
  "t16": "Support, infrastructure and security under one team. Monthly services with a clearly defined scope for your operation.",
  "t17": "Let's talk <span aria-hidden=\"true\">↗</span>",
  "t18": "Explore our services <span aria-hidden=\"true\">↓</span>",
  "t19": "<span aria-hidden=\"true\">●</span> For companies with 10 to 75 employees",
  "t20": "AN INTEGRATED VIEW",
  "t21": "Your company.<br>Well connected.",
  "t22": "People, systems and technology<br>working in the same direction.",
  "t23": "Support and administration",
  "t24": "Infrastructure and networks",
  "t25": "Security and continuity",
  "t26": "ONE TEAM. AN ONGOING RELATIONSHIP.",
  "t27": "FEWER HEADACHES. MORE FOCUS.",
  "t28": "Technology should drive your business.",
  "t29": "When the connection, email or a server goes down, your whole operation feels it. You need a team that knows your systems and keeps them running.",
  "t30": "At Smart Solutions PR we combine administration, support and technology advice in an ongoing relationship tailored to your company's needs.",
  "t31": "WHAT WE DO",
  "t32": "Your technology,<br>covered end to end.",
  "t33": "An integrated approach to the systems your team uses every day.",
  "t34": "Managed IT and support",
  "t35": "Management of computers, users and systems. Maintenance and day-to-day help with your team's technology needs.",
  "t36": "Day-to-day operations",
  "t37": "Networks and servers",
  "t38": "Physical and virtual infrastructure, connectivity, business Wi-Fi and firewalls that connect every part of your business.",
  "t39": "A reliable foundation",
  "t40": "Cybersecurity",
  "t41": "Device protection, access control and preventive measures to reduce risk and strengthen your technology environment.",
  "t42": "Layered protection",
  "t43": "Management of business email, accounts, licenses and collaboration tools that make your team's work easier.",
  "t44": "Collaboration and productivity",
  "t45": "Backups and continuity",
  "t46": "Data backup and recovery, with planning that prepares your company for disruptions.",
  "t47": "Preparedness and recovery",
  "t48": "What does your<br>company need?",
  "t49": "Let's define the scope <span aria-hidden=\"true\">↗</span>",
  "t50": "Services are agreed based on your infrastructure and priorities.",
  "t51": "Years of professional<br><b>experience in technology</b>",
  "t52": "EXPERIENCE WITH PURPOSE",
  "t53": "Technical judgment.<br>Focused on your business.",
  "t54": "Our professional experience combines infrastructure, business support and cybersecurity. We put it to work for companies that need better-managed technology.",
  "t55": "We help you understand your priorities, plan improvements and make decisions with clarity, with a close relationship and responsibilities defined from day one.",
  "t56": "Founder · Smart Solutions PR",
  "t57": "More than a decade running IT for a law firm in Puerto Rico, plus years supporting hotels, hospitals and car dealerships. When you hire Smart Solutions PR, you know exactly who is taking care of your technology.",
  "t58": "HOW WE WORK",
  "t59": "One IT team.<br>One clear agreement.",
  "t60": "We get to know your company",
  "t61": "We talk about your operation, your infrastructure and the challenges your team faces.",
  "t62": "We define the scope",
  "t63": "We prepare a monthly proposal with agreed services, responsibilities and support terms.",
  "t64": "We work alongside you",
  "t65": "We manage, support and guide technology improvements within the agreed scope.",
  "t66": "Monthly services tailored to your company.",
  "t67": "Remote support and on-site visits are defined in the proposal. No generic rates and no promises outside the agreement.",
  "t68": "THE NEXT STEP",
  "t69": "Let's talk about<br>your company's technology.",
  "t70": "Tell us how your team works and what you need to improve. Let's start with a conversation.",
  "t71": "WhatsApp: message us ↗",
  "t72": "(required)",
  "t73": "(required)",
  "t74": "(required)",
  "t75": "Select an option",
  "t76": "Fewer than 10",
  "t77": "10 to 25",
  "t78": "26 to 50",
  "t79": "51 to 75",
  "t80": "More than 75",
  "t81": "(required)",
  "t82": "We reply within one business day. We only use your information to answer your inquiry.",
  "t83": "Send inquiry <span aria-hidden=\"true\">↗</span>",
  "t84": "Your outsourced IT department in Puerto Rico."
};
const META = {
  es: {
    title: document.title,
    description: document.querySelector('meta[name="description"]').content,
    wa: 'Hola, me interesa conocer los servicios de IT de Smart Solutions PR.',
    toggle: 'EN', toggleLabel: 'Switch to English',
  },
  en: {
    title: 'Smart Solutions PR | Your outsourced IT department',
    description: 'Outsourced IT department for companies with 10 to 75 employees in Puerto Rico. Managed IT, networks, cybersecurity, Microsoft 365 and backups.',
    wa: "Hi, I'm interested in Smart Solutions PR's IT services.",
    toggle: 'ES', toggleLabel: 'Cambiar a español',
  },
};
const MSG = {
  es: {
    mailtoNote: 'Al continuar se abrirá tu aplicación de correo con la consulta preparada. Revisa el mensaje y envíalo desde allí.',
    mailtoDone: (e) => `Tu consulta está preparada en tu aplicación de correo. Si no se abre, escríbenos a ${e}.`,
    sending: 'Enviando…',
    ok: '¡Gracias! Recibimos tu consulta y te contactaremos pronto.',
    err: (e) => `No se pudo enviar. Escríbenos directamente a ${e} o al (787) 548-9124.`,
    subject: 'Consulta de servicios IT',
  },
  en: {
    mailtoNote: 'Continuing will open your email app with the inquiry ready. Review the message and send it from there.',
    mailtoDone: (e) => `Your inquiry is ready in your email app. If it didn't open, email us at ${e}.`,
    sending: 'Sending…',
    ok: "Thank you! We received your inquiry and will be in touch soon.",
    err: (e) => `We couldn't send it. Email us directly at ${e} or call (787) 548-9124.`,
    subject: 'IT services inquiry',
  },
};
let lang = 'es';
const langBtn = document.querySelector('.lang-toggle');
const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach((el) => { el.dataset.es = el.innerHTML; });
const ariaEls = [...document.querySelectorAll('[data-i18n-aria]')];
ariaEls.forEach((el) => { el.dataset.esAria = el.getAttribute('aria-label') || ''; });

function setLang(next) {
  lang = next;
  document.documentElement.lang = lang === 'en' ? 'en' : 'es-PR';
  i18nEls.forEach((el) => {
    const en = EN[el.dataset.i18n];
    el.innerHTML = lang === 'en' && en ? en : el.dataset.es;
  });
  ariaEls.forEach((el) => {
    el.setAttribute('aria-label', lang === 'en' ? el.dataset.i18nAria : el.dataset.esAria);
  });
  const m = META[lang];
  document.title = m.title;
  document.querySelector('meta[name="description"]').content = m.description;
  document.querySelectorAll('a[data-wa]').forEach((a) => {
    a.href = 'https://wa.me/17875489124?text=' + encodeURIComponent(m.wa);
  });
  langBtn.textContent = m.toggle;
  langBtn.setAttribute('aria-label', m.toggleLabel);
  if (!WEB3FORMS_KEY) note.textContent = MSG[lang].mailtoNote;
  statusEl.textContent = '';
  statusEl.className = '';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

/* ---------- Formulario de contacto (Web3Forms) ---------- */
const WEB3FORMS_KEY = '48be9326-471f-4752-bd0b-100c077fbf56';
const CONTACT_EMAIL = 'carlos.santiago@smartsolutionspr.com';

const form = document.querySelector('#contact-form');
const statusEl = document.querySelector('#form-status');
const submitBtn = form.querySelector('button[type="submit"]');
const note = document.querySelector('#form-note');

const setStatus = (text, kind) => {
  statusEl.textContent = text;
  statusEl.className = kind || '';
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const t = MSG[lang];
  const data = new FormData(form);
  if (data.get('botcheck')) return;
  const empresa = data.get('empresa');
  const body = `Nombre: ${data.get('nombre')}\nEmpresa: ${empresa}\nEmail: ${data.get('email')}\nEmpleados: ${data.get('equipo') || '-'}\nIdioma: ${lang.toUpperCase()}\n\n${data.get('mensaje')}`;

  if (!WEB3FORMS_KEY) {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.subject + ' — ' + empresa)}&body=${encodeURIComponent(body)}`;
    setStatus(t.mailtoDone(CONTACT_EMAIL));
    return;
  }

  submitBtn.disabled = true;
  setStatus(t.sending);
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Consulta de servicios IT — ${empresa}${lang === 'en' ? ' (EN)' : ''}`,
        from_name: 'Web Smart Solutions PR',
        replyto: data.get('email'),
        nombre: data.get('nombre'),
        empresa,
        email: data.get('email'),
        empleados: data.get('equipo') || '-',
        idioma: lang === 'en' ? 'Inglés' : 'Español',
        mensaje: data.get('mensaje'),
      }),
    });
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.message || 'Error');
    form.reset();
    setStatus(t.ok, 'ok');
  } catch (err) {
    setStatus(t.err(CONTACT_EMAIL), 'err');
  } finally {
    submitBtn.disabled = false;
  }
});

langBtn.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));

/* Idioma inicial: ?lang=en, preferencia guardada, o idioma del navegador */
(() => {
  let initial = 'es';
  const q = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (q === 'en' || q === 'es') initial = q;
  else if (saved === 'en' || saved === 'es') initial = saved;
  else if ((navigator.language || '').toLowerCase().startsWith('en')) initial = 'en';
  if (!WEB3FORMS_KEY) note.textContent = MSG.es.mailtoNote;
  if (initial === 'en') setLang('en');
})();

document.querySelector('#year').textContent = new Date().getFullYear();
