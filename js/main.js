(function () {
  "use strict";
  var D = window.PORTFOLIO;
  var main = document.getElementById("contenido");

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var ICONS = {
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.2h2.6l.4-3.1h-3V8.8c0-.9.3-1.5 1.6-1.5h1.6V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.9v3.1h2.6V21z" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.3 3c.3 2.3 1.7 3.8 3.9 4v3a7 7 0 0 1-3.8-1.2v6.1A5.9 5.9 0 1 1 10.5 9v3.1a2.8 2.8 0 1 0 2.8 2.8V3z" fill="currentColor"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5 0l.6-.7c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.3.6-.1.9-.9 1.7-1.9 1.7-2.8-.1-6.2-3.4-6.3-6.2 0-.6.3-1.1.6-1.5z" fill="currentColor"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  var SOCIAL_LABEL = { youtube: "YouTube", facebook: "Facebook", tiktok: "TikTok" };

  function clip(v, headingLevel) {
    var h = headingLevel || "h4";
    return (
      '<figure class="clip">' +
        '<div class="clip-frame">' +
          '<video controls playsinline preload="none" width="720" height="1280" ' +
            'data-poster="' + esc(v.poster) + '" ' +
            'aria-label="' + esc("Video: " + v.title) + '">' +
            '<source src="' + esc(v.src) + '" type="video/mp4">' +
            'Tu navegador no puede reproducir este video. <a href="' + esc(v.src) + '">Abrir el archivo</a>.' +
          "</video>" +
        "</div>" +
        '<figcaption class="clip-cap">' +
          '<span class="clip-meta">' + esc(v.duration) + (v.lang === "en" ? " · en inglés" : "") + "</span>" +
          "<" + h + ' class="clip-title"' + (v.lang === "en" ? ' lang="en"' : "") + ">" + esc(v.title) + "</" + h + ">" +
          '<p class="clip-desc">' + esc(v.desc) + "</p>" +
        "</figcaption>" +
      "</figure>"
    );
  }

  function socialLinks(p) {
    return Object.keys(p.social).map(function (k) {
      return '<a class="btn btn-social" href="' + esc(p.social[k]) + '" target="_blank" rel="noopener noreferrer">' +
        ICONS[k] + "<span>" + SOCIAL_LABEL[k] + '</span><span class="sr-only"> de ' + esc(p.name) + " (se abre en otra pestaña)</span></a>";
    }).join("");
  }

  function shareBlock(id, name) {
    return '<div class="share">' +
      '<a class="share-anchor" href="#' + id + '">' + ICONS.link + "<span>#" + id + "</span></a>" +
      '<button type="button" class="btn btn-ghost btn-sm" data-copy="' + id + '">Copiar enlace<span class="sr-only"> del apartado ' + esc(name) + "</span></button>" +
    "</div>";
  }

  /* ---------- decoraciones por tema (siempre fuera de los videos) ---------- */
  var DECOR = {
    fst: '<div class="decor decor-fst" aria-hidden="true"><span class="speed"></span><span class="tone tone-a"></span><span class="tone tone-b"></span></div>',
    mv: '<div class="decor decor-mv" aria-hidden="true"><span class="glow glow-a"></span><span class="glow glow-b"></span><span class="stars"></span><span class="slash"></span></div>',
    geo: '<div class="decor decor-geo" aria-hidden="true"><svg class="orbits" viewBox="0 0 800 800" fill="none"><ellipse cx="400" cy="400" rx="380" ry="140" transform="rotate(-18 400 400)"/><ellipse cx="400" cy="400" rx="300" ry="300"/><ellipse cx="400" cy="400" rx="390" ry="90" transform="rotate(24 400 400)"/><circle class="sat" cx="760" cy="300" r="6"/><circle class="sat sat-b" cx="110" cy="520" r="4"/></svg><span class="grid"></span></div>',
    hgf: '<div class="decor decor-hgf" aria-hidden="true"><span class="halo"></span><span class="horizon"></span><span class="ray"></span></div>'
  };

  /* ---------- secciones ---------- */
  function renderHero() {
    var p = D.person;
    var tiles = D.projects.map(function (pr, i) {
      return '<a class="tile tile-' + pr.theme + '" href="#' + pr.id + '" style="--i:' + i + '">' +
        '<img src="' + esc(pr.logo) + '" alt="" width="512" height="512" class="tile-logo tile-logo-' + pr.theme + '">' +
        '<span class="tile-text"><span class="tile-name">' + esc(pr.name) + "</span>" +
        '<span class="tile-kicker">' + esc(pr.kicker) + "</span></span>" +
        '<span class="tile-arrow">' + ICONS.arrow + "</span></a>";
    }).join("");
    tiles += '<a class="tile tile-ads" href="#publicidad" style="--i:4">' +
      '<span class="tile-ads-marks" aria-hidden="true"><span class="m-nova">NOVA <em>Audio</em></span><span class="m-renueva">RENUEVA HOGAR</span></span>' +
      '<span class="tile-text"><span class="tile-name">Publicidad creativa</span><span class="tile-kicker">Conceptos para marcas ficticias</span></span>' +
      '<span class="tile-arrow">' + ICONS.arrow + "</span></a>";

    return '<section class="hero" id="inicio" aria-labelledby="hero-title">' +
      '<div class="wrap hero-inner">' +
        '<div class="hero-copy reveal">' +
          '<p class="eyebrow">' + esc(p.location) + "</p>" +
          '<h1 id="hero-title">' + esc(p.name) + "</h1>" +
          '<p class="hero-title">' + esc(p.title) + "</p>" +
          '<p class="hero-sub">' + esc(p.subtitle) + "</p>" +
          '<p class="hero-intro">' + esc(p.intro) + "</p>" +
          '<div class="btn-row">' +
            '<a class="btn btn-primary" href="#proyectos">Ver proyectos</a>' +
            '<a class="btn btn-outline" href="#contacto">Contactar</a>' +
          "</div>" +
        "</div>" +
        '<nav class="hero-tiles" id="proyectos" aria-label="Proyectos">' +
          '<h2 class="tiles-title">Proyectos</h2>' + tiles +
        "</nav>" +
      "</div>" +
    "</section>";
  }

  function renderProject(pr) {
    var hid = pr.id + "-title";
    return '<section class="project theme-' + pr.theme + '" id="' + pr.id + '" aria-labelledby="' + hid + '">' +
      DECOR[pr.theme] +
      '<div class="wrap project-grid">' +
        '<header class="p-head reveal">' +
          '<div class="p-logo-wrap"><img class="p-logo p-logo-' + pr.theme + '" src="' + esc(pr.logo) + '" alt="' + esc(pr.logoAlt) + '" width="512" height="512" loading="lazy"></div>' +
          '<div class="p-titles">' +
            '<p class="p-kicker">' + esc(pr.kicker) + "</p>" +
            '<h2 id="' + hid + '">' + esc(pr.name) + "</h2>" +
            '<p class="p-tagline"' + (pr.theme === "mv" ? ' lang="en"' : "") + ">" + esc(pr.tagline) + "</p>" +
          "</div>" +
        "</header>" +
        '<div class="p-about card reveal">' +
          "<h3>De qué trata</h3><p>" + esc(pr.about) + "</p>" +
          "<h3>Para quién</h3><p>" + esc(pr.audience) + "</p>" +
        "</div>" +
        '<div class="p-clips">' + pr.videos.map(function (v) { return clip(v, "h3"); }).join("") + "</div>" +
        '<div class="p-role card reveal">' +
          "<h3>Mi participación</h3><ul>" + pr.role.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
        "</div>" +
        '<div class="p-links reveal">' +
          '<div class="social-row">' + socialLinks(pr) + "</div>" +
          shareBlock(pr.id, pr.name) +
          '<p class="p-note">' + esc(pr.note) + "</p>" +
        "</div>" +
      "</div>" +
    "</section>";
  }

  function renderAds() {
    var A = D.ads;
    var items = A.items.map(function (ad) {
      var hid = ad.id + "-title";
      return '<article class="ad ad-' + ad.theme + '" id="' + ad.id + '" aria-labelledby="' + hid + '">' +
        '<div class="wrap ad-grid">' +
          '<div class="ad-copy reveal">' +
            '<p class="ad-type">' + esc(ad.type) + "</p>" +
            '<h3 id="' + hid + '" class="ad-brand">' + esc(ad.brand) + "</h3>" +
            '<p class="ad-flag">' + esc(ad.disclaimer) + "</p>" +
            "<h4>Objetivo</h4><p>" + esc(ad.goal) + "</p>" +
            "<h4>Mi participación</h4><ul>" + ad.role.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" +
            shareBlock(ad.id, ad.brand) +
          "</div>" +
          '<div class="ad-media">' + clip(ad.video, "h4") + "</div>" +
        "</div>" +
      "</article>";
    }).join("");
    return '<section class="ads" id="publicidad" aria-labelledby="ads-title">' +
      '<div class="wrap ads-head reveal">' +
        '<p class="eyebrow">Conceptos publicitarios</p>' +
        '<h2 id="ads-title">Publicidad creativa</h2>' +
        '<p class="ads-intro">' + esc(A.intro) + "</p>" +
      "</div>" + items +
    "</section>";
  }

  function renderAbout() {
    var a = D.about, p = D.person;
    function list(rows) {
      return rows.map(function (r) {
        return '<li><span class="tl-years">' + esc(r.years) + '</span><span class="tl-org">' + esc(r.org) + '</span><span class="tl-role">' + esc(r.role) + "</span></li>";
      }).join("");
    }
    return '<section class="about" id="sobre-mi" aria-labelledby="about-title">' +
      '<div class="wrap about-grid">' +
        '<div class="about-photo reveal"><img src="' + esc(p.photo) + '" alt="' + esc(p.photoAlt) + '" width="720" height="960" loading="lazy"></div>' +
        '<div class="about-copy reveal">' +
          '<p class="eyebrow">Sobre mí</p>' +
          '<h2 id="about-title">Creatividad, IA y trato con las personas</h2>' +
          a.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
          '<div class="about-cols">' +
            '<div><h3>Experiencia</h3><ul class="timeline">' + list(a.experience) + "</ul></div>" +
            '<div><h3>Formación</h3><ul class="timeline">' + list(a.education) + "</ul>" +
              "<h3>Idiomas</h3><p>" + esc(a.languages) + "</p>" +
              '<p class="muted">' + esc(a.selfTaught) + "</p></div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</section>";
  }

  function renderProcess() {
    var steps = D.process.map(function (s, i) {
      return '<li class="step reveal"><span class="step-n" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></li>";
    }).join("");
    var tools = D.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    return '<section class="process" id="proceso" aria-labelledby="process-title">' +
      '<div class="wrap">' +
        '<div class="process-head reveal">' +
          '<p class="eyebrow">Capacidades y proceso</p>' +
          '<h2 id="process-title">Del guion al video final</h2>' +
          "<p>Así trabajo cada pieza. Uso herramientas de IA en la animación, las imágenes y la voz; mi trabajo está en el guion, las decisiones visuales, el montaje y la revisión.</p>" +
        "</div>" +
        '<ol class="steps">' + steps + "</ol>" +
        '<div class="tools reveal"><h3>Herramientas</h3><ul class="chips">' + tools + "</ul></div>" +
      "</div>" +
    "</section>";
  }

  function renderContact() {
    var p = D.person;
    return '<section class="contact" id="contacto" aria-labelledby="contact-title">' +
      '<div class="wrap contact-inner reveal">' +
        '<p class="eyebrow">Contacto</p>' +
        '<h2 id="contact-title">¿Tienes un proyecto de video?</h2>' +
        "<p>Escríbeme por WhatsApp o por correo. Estoy disponible para empleos y proyectos de creación de contenido, animación y producción audiovisual con IA.</p>" +
        '<div class="contact-actions">' +
          '<a class="btn btn-primary btn-lg" href="' + esc(p.whatsappUrl) + '" target="_blank" rel="noopener noreferrer">' + ICONS.whatsapp + "<span>WhatsApp " + esc(p.whatsappLabel) + '</span><span class="sr-only"> (se abre en otra pestaña)</span></a>' +
          '<a class="btn btn-outline btn-lg" href="mailto:' + esc(p.email) + '">' + ICONS.mail + "<span>" + esc(p.email) + "</span></a>" +
          '<a class="btn btn-outline btn-lg" href="' + esc(p.cv) + '" download="' + esc(p.cvDownloadName) + '">' + ICONS.download + "<span>Descargar CV (PDF)</span></a>" +
        "</div>" +
        '<p class="contact-loc">' + esc(p.location) + "</p>" +
      "</div>" +
    "</section>";
  }

  function renderNav() {
    document.getElementById("nav-list").innerHTML = D.nav.map(function (n) {
      return '<li><a href="' + n.href + '">' + esc(n.label) + "</a></li>";
    }).join("");
    document.getElementById("footer").innerHTML =
      "<p>© " + new Date().getFullYear() + " " + esc(D.person.name) + " · " + esc(D.person.location) + "</p>" +
      '<p class="muted">Full Show TV y MangaVerse son proyectos personales que utilizan material de terceros; los derechos de personajes y viñetas pertenecen a sus autores. NOVA Audio y Renueva Hogar son marcas ficticias.</p>' +
      '<p><a href="#inicio">Volver arriba</a></p>';
  }

  /* ---------- montaje ---------- */
  main.innerHTML = renderHero() + D.projects.map(renderProject).join("") + renderAds() + renderAbout() + renderProcess() + renderContact();
  renderNav();

  /* ---------- comportamiento ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var videos = Array.prototype.slice.call(document.querySelectorAll("video"));

  // Portadas diferidas: se asignan al acercarse al viewport.
  function setPoster(v) { if (!v.poster && v.dataset.poster) v.poster = v.dataset.poster; }
  if ("IntersectionObserver" in window) {
    var pio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { setPoster(e.target); pio.unobserve(e.target); } });
    }, { rootMargin: "800px 0px" });
    videos.forEach(function (v) { pio.observe(v); });

    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); rio.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { reduceMotion ? el.classList.add("is-in") : rio.observe(el); });
  } else {
    videos.forEach(setPoster);
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  // Un solo video a la vez.
  document.addEventListener("play", function (e) {
    if (e.target.tagName !== "VIDEO") return;
    videos.forEach(function (v) { if (v !== e.target && !v.paused) v.pause(); });
  }, true);

  // Menú móvil.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  function closeNav() { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); }
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { closeNav(); toggle.focus(); }
  });

  // Copiar enlace de un apartado.
  var toast = document.getElementById("toast");
  var toastTimer;
  function say(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(ta); return ok;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (!b) return;
    var url = location.href.split("#")[0] + "#" + b.dataset.copy;
    var done = function () { say("Enlace copiado: #" + b.dataset.copy); };
    var fail = function () {
      if (fallbackCopy(url)) return done();
      try { history.replaceState(null, "", "#" + b.dataset.copy); } catch (err) { /* sin historial */ }
      say("Copia la dirección del navegador: ya apunta a #" + b.dataset.copy);
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, fail);
    else fail();
  });

  // Si se abre con un #ancla, desplazar tras generar el contenido.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
