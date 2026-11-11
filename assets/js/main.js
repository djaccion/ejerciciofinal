document.addEventListener('DOMContentLoaded', function () {

  /* =========================================================
     FUNCIÓN AUXILIAR — enableAnalytics
     Declarada antes de las funciones init* para que
     initCookieBanner pueda referenciarla sin depender de hoisting.
  ========================================================= */
  function enableAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);
  }

  /* =========================================================
     PASO 2 — initRouter
     Navegación SPA-like entre secciones Home / Historias / Noticias.
  ========================================================= */
  function initRouter() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-body');

    function activateSection(targetId) {
      sections.forEach(function (sec) { sec.hidden = true; });
      navLinks.forEach(function (lnk) { lnk.classList.remove('is-active'); });

      const targetSection = document.getElementById(targetId);
      if (targetSection) { targetSection.hidden = false; }

      const activeLinks = document.querySelectorAll('.nav-link[data-target="' + targetId + '"]');
      activeLinks.forEach(function (lnk) { lnk.classList.add('is-active'); });

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.dataset.target;
        if (targetId) {
          activateSection(targetId);
          /* FIX #3: Cerrar el menú móvil al navegar a una sección */
          const mainNav = document.getElementById('main-nav');
          const navToggle = document.querySelector('.nav-toggle');
          if (mainNav && mainNav.classList.contains('is-open')) {
            mainNav.classList.remove('is-open');
            if (navToggle) {
              navToggle.setAttribute('aria-expanded', 'false');
              navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            }
          }
        }
      });
    });

    activateSection('section-home');
  }

  /* =========================================================
     PASO 3 — initMobileNav
     FIX #3: Implementa la lógica del botón hamburguesa para
     móvil. Escucha el click en .nav-toggle, agrega/remueve
     la clase 'is-open' en #main-nav y actualiza aria-expanded.
  ========================================================= */
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (!navToggle || !mainNav) { return; }

    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.contains('is-open');

      if (isOpen) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      } else {
        mainNav.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      }
    });
  }

  /* =========================================================
     PASO 4 — initFaq
     Acordeón exclusivo: solo 1 item abierto a la vez.
  ========================================================= */
  function initFaq() {
    const faqSection = document.getElementById('faq-section');
    if (!faqSection) { return; }

    const faqItems = faqSection.querySelectorAll('.faq-item');

    function closeAllItems() {
      faqItems.forEach(function (item) {
        item.classList.remove('is-open');
        const answer = item.querySelector('.faq-answer');
        if (answer) { answer.hidden = true; }
        const question = item.querySelector('.faq-question');
        if (question) { question.setAttribute('aria-expanded', 'false'); }
      });
    }

    faqItems.forEach(function (item) {
      const question = item.querySelector('.faq-question');
      if (!question) { return; }

      question.addEventListener('click', function () {
        const isCurrentlyOpen = item.classList.contains('is-open');
        closeAllItems();
        if (!isCurrentlyOpen) {
          item.classList.add('is-open');
          const answer = item.querySelector('.faq-answer');
          if (answer) { answer.hidden = false; }
          question.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* =========================================================
     PASO 5 — initCookieBanner
     Consentimiento de cookies con persistencia en localStorage.
     Activa analytics si el consentimiento previo fue 'accepted'.
  ========================================================= */
  function initCookieBanner() {
    const banner    = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept-btn');
    const rejectBtn = document.getElementById('cookie-reject-btn');

    if (!banner || !acceptBtn || !rejectBtn) { return; }

    if (localStorage.getItem('cookie_consent')) {
      banner.hidden = true;
      if (localStorage.getItem('cookie_consent') === 'accepted') {
        enableAnalytics();
      }
      return;
    }

    /* Mostrar el banner: quitar hidden primero, luego añadir .is-visible
       en el siguiente frame para que la transición CSS de opacidad se dispare.
       FIX #1 y #2: Ahora que el elemento tiene la clase 'cookie-banner' en el HTML,
       .cookie-banner.is-visible resuelve correctamente y la transición funciona. */
    banner.hidden = false;
    requestAnimationFrame(function () {
      banner.classList.add('is-visible');
    });

    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'accepted');
      banner.classList.remove('is-visible');
      banner.hidden = true;
      enableAnalytics();
    });

    rejectBtn.addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'rejected');
      banner.classList.remove('is-visible');
      banner.hidden = true;
    });
  }

  /* =========================================================
     PASO 6 — initAnalyticsStub
     Configura el stub inicial de gtag. No carga el script de red;
     eso lo hace enableAnalytics() condicionalmente.
  ========================================================= */
  function initAnalyticsStub() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }

  /* =========================================================
     ARRANQUE — Orden de inicialización obligatorio
  ========================================================= */
  initRouter();
  initMobileNav();
  initFaq();
  initCookieBanner();
  initAnalyticsStub();

});