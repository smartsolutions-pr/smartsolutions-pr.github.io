# Smart Solutions PR

Sitio estático en español, compatible con GitHub Pages. No requiere instalación ni compilación.

## Vista local

Ejecutar `python -m http.server 4173` desde esta carpeta y abrir http://localhost:4173.

## Publicación pendiente de autorización

1. Revisar el contenido y autorizar commit/push al repositorio smartsolutions-pr/smartsolutions-pr.github.io.
2. Confirmar en Settings > Pages la publicación desde la rama principal y la carpeta raíz.
3. Para conectar smartsolutionspr.com, confirmar primero que se desea reemplazar el sitio actual. Luego configurar el dominio personalizado en Pages y verificar DNS/HTTPS. No modificar registros de correo (MX).

No se incluye CNAME para evitar conectar el dominio sin confirmación.

## Contacto

Email: carlos.santiago@smartsolutionspr.com
Teléfono: +1 787 548 9124

## Formulario (Web3Forms)

1. Ir a https://web3forms.com, poner carlos.santiago@smartsolutionspr.com y recibir el Access Key por email.
2. En script.js, pegar la clave en `const WEB3FORMS_KEY = '';`.
3. Con la clave, el formulario envía directo al email y muestra confirmación. Sin clave, usa mailto como antes.
Incluye un campo oculto anti-spam (botcheck).

## Cambios recientes

- Botón flotante de WhatsApp y enlace en contacto (wa.me/17875489124).
- Tarjeta del fundador en "Nosotros". Para usar foto: guardar foto.jpg y cambiar `<div class="founder-photo" aria-hidden="true">CS</div>` por `<div class="founder-photo"><img src="foto.jpg" alt="Carlos Santiago"></div>`.
- og-image.png (vista previa al compartir en WhatsApp/LinkedIn), apple-touch-icon.png y datos estructurados LocalBusiness (JSON-LD).

## Contenido y mantenimiento

Editar index.html para cambiar textos, styles.css para diseño y script.js para navegación/formulario. El icono S+ es un recurso tipográfico provisional, no un logotipo oficial suministrado. Las fuentes se solicitan a Google Fonts, con alternativas locales. Se presenta experiencia profesional de más de 20 años; no se atribuyen años de operación, certificaciones ni testimonios a la empresa.

SEO: título, descripción, canonical, Open Graph, robots.txt y sitemap.xml. Accesibilidad: etiquetas de campos, enlace de salto, foco visible, navegación semántica, estado del menú y movimiento reducido. Revisar formulario, dispositivos y accesibilidad antes de cada cambio sustancial.
