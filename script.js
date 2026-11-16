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
document.querySelector('#year').textContent = new Date().getFullYear();

/* Formulario de contacto
   Pega aquí tu Access Key de https://web3forms.com (gratis, solo pide tu email).
   Mientras esté vacío, el formulario usa el método anterior (abre la app de correo). */
const WEB3FORMS_KEY = '';
const CONTACT_EMAIL = 'carlos.santiago@smartsolutionspr.com';

const form = document.querySelector('#contact-form');
const statusEl = document.querySelector('#form-status');
const submitBtn = form.querySelector('button[type="submit"]');
const note = document.querySelector('#form-note');
if (!WEB3FORMS_KEY) {
  note.textContent = 'Al continuar se abrirá tu aplicación de correo con la consulta preparada. Revisa el mensaje y envíalo desde allí.';
}

const setStatus = (text, kind) => {
  statusEl.textContent = text;
  statusEl.className = kind || '';
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  if (data.get('botcheck')) return;
  const empresa = data.get('empresa');
  const body = `Nombre: ${data.get('nombre')}\nEmpresa: ${empresa}\nEmail: ${data.get('email')}\nEmpleados: ${data.get('equipo') || 'Sin especificar'}\n\n${data.get('mensaje')}`;

  if (!WEB3FORMS_KEY) {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Consulta de servicios IT — ' + empresa)}&body=${encodeURIComponent(body)}`;
    setStatus(`Tu consulta está preparada en tu aplicación de correo. Si no se abre, escríbenos a ${CONTACT_EMAIL}.`);
    return;
  }

  submitBtn.disabled = true;
  setStatus('Enviando…');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Consulta de servicios IT — ${empresa}`,
        from_name: 'Web Smart Solutions PR',
        replyto: data.get('email'),
        nombre: data.get('nombre'),
        empresa,
        email: data.get('email'),
        empleados: data.get('equipo') || 'Sin especificar',
        mensaje: data.get('mensaje'),
      }),
    });
    const json = await res.json();
    if (!res.ok || !json.success) throw new Error(json.message || 'Error');
    form.reset();
    setStatus('¡Gracias! Recibimos tu consulta y te contactaremos pronto.', 'ok');
  } catch (err) {
    setStatus(`No se pudo enviar. Escríbenos directamente a ${CONTACT_EMAIL} o al (787) 548-9124.`, 'err');
  } finally {
    submitBtn.disabled = false;
  }
});
