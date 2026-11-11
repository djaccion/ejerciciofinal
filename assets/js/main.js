(function () {
  'use strict';

  // ─── PASO 2: escapeHTML ───────────────────────────────────────────────────
  function escapeHTML(str) {
    var textarea = document.createElement('textarea');
    textarea.textContent = str;
    return textarea.innerHTML;
  }

  // ─── PASO 3: Data layer ───────────────────────────────────────────────────
  var HISTORIAS_DATA = [
    {
      id: 'historia-1',
      titulo: 'Scrum: El marco ágil que transformó el desarrollo de software',
      resumen: 'Scrum revolucionó la forma en que los equipos entregan valor al cliente mediante ciclos cortos e iterativos. Descubre cómo sus roles, eventos y artefactos impulsan la productividad.',
      fecha: '05 Jun 2025',
      categoria: 'Agile',
      contenido: 'Scrum es un marco de trabajo ágil diseñado para gestionar proyectos complejos.\nSus tres pilares son la transparencia, la inspección y la adaptación.\nLos roles principales son el Product Owner, el Scrum Master y el equipo de desarrollo.\nLos sprints, de una a cuatro semanas, permiten entregar incrementos funcionales de forma continua.\nAdoptado globalmente, Scrum sigue siendo el marco ágil más utilizado en la industria TI.'
    },
    {
      id: 'historia-2',
      titulo: 'Kanban: Visualizar el flujo para eliminar cuellos de botella',
      resumen: 'Kanban traslada los principios del sistema de producción Toyota al mundo del software. Su tablero visual permite identificar bloqueos y optimizar el flujo de trabajo en tiempo real.',
      fecha: '18 May 2025',
      categoria: 'Kanban',
      contenido: 'Kanban nació en las fábricas de Toyota como sistema de control de inventario.\nDavid Anderson lo adaptó al desarrollo de software en 2007, creando el método Kanban moderno.\nSus principios clave son: visualizar el trabajo, limitar el trabajo en progreso (WIP) y gestionar el flujo.\nA diferencia de Scrum, Kanban no prescribe iteraciones fijas ni roles específicos.\nEs especialmente útil para equipos de soporte, mantenimiento y operaciones TI.'
    },
    {
      id: 'historia-3',
      titulo: 'ITIL 4: La evolución de la gestión de servicios TI',
      resumen: 'ITIL 4 moderniza el marco de gestión de servicios incorporando principios ágiles y DevOps. Su sistema de valor del servicio (SVS) ofrece una visión holística de la entrega de valor.',
      fecha: '02 Abr 2025',
      categoria: 'ITIL',
      contenido: 'ITIL (Information Technology Infrastructure Library) es el marco de gestión de servicios TI más adoptado del mundo.\nLa versión 4, publicada en 2019, introduce el Sistema de Valor del Servicio (SVS) y la Cadena de Valor del Servicio.\nSus cuatro dimensiones son: organizaciones y personas, información y tecnología, socios y proveedores, y flujos de valor.\nITIL 4 integra conceptos de Agile, Lean y DevOps para adaptarse a entornos digitales modernos.\nLas certificaciones ITIL siguen siendo de las más demandadas en perfiles de gestión TI a nivel mundial.'
    },
    {
      id: 'historia-4',
      titulo: 'DevOps: Derribando la barrera entre desarrollo y operaciones',
      resumen: 'DevOps unifica cultura, prácticas y herramientas para acortar el ciclo de vida del desarrollo. La integración y entrega continua (CI/CD) son sus pilares técnicos fundamentales.',
      fecha: '15 Mar 2025',
      categoria: 'DevOps',
      contenido: 'DevOps surge como respuesta a la fricción histórica entre los equipos de desarrollo y operaciones.\nSu filosofía se basa en tres vías: flujo rápido, retroalimentación continua y aprendizaje experimental.\nLas prácticas de CI/CD automatizan la integración, prueba y despliegue del software.\nHerramientas como Jenkins, GitLab CI, Docker y Kubernetes son pilares del ecosistema DevOps.\nLas organizaciones que adoptan DevOps reportan despliegues hasta 200 veces más frecuentes con menor tasa de fallos.'
    }
  ];

  var NOTICIAS_DATA = [
    {
      id: 'noticia-1',
      titulo: 'El 71% de las empresas ya usa metodologías ágiles en sus proyectos TI',
      resumen: 'El informe anual State of Agile revela que la adopción de marcos ágiles sigue creciendo, con Scrum como el más utilizado seguido de SAFe y Kanban.',
      fecha: '10 Jun 2025',
      fuente: 'InfoQ',
      url: 'https://www.infoq.com/news/agile-adoption-2025/'
    },
    {
      id: 'noticia-2',
      titulo: 'ITIL 4 Practitioner: La nueva certificación que integra IA en la gestión de servicios',
      resumen: 'Axelos lanza una extensión de ITIL 4 que incorpora inteligencia artificial y automatización en los procesos de gestión de servicios TI para entornos híbridos.',
      fecha: '28 May 2025',
      fuente: 'TechCrunch',
      url: 'https://techcrunch.com/2025/05/28/itil4-ai-practitioner/'
    },
    {
      id: 'noticia-3',
      titulo: 'DevOps Platform Report 2025: GitLab y GitHub Actions lideran el mercado CI/CD',
      resumen: 'El análisis de Gartner posiciona a GitLab y GitHub Actions como líderes en plataformas DevOps, desplazando a Jenkins en nuevas implementaciones empresariales.',
      fecha: '14 May 2025',
      fuente: 'Gartner',
      url: 'https://www.gartner.com/en/documents/devops-platform-report-2025'
    },
    {
      id: 'noticia-4',
      titulo: 'Six Sigma y Agile: La convergencia que está redefiniendo la calidad del software',
      resumen: 'Cada vez más organizaciones combinan Six Sigma con marcos ágiles para reducir defectos sin sacrificar velocidad de entrega, creando un enfoque híbrido denominado Lean Agile Six Sigma.',
      fecha: '03 May 2025',
      fuente: 'CIO Magazine',
      url: 'https://www.cio.com/article/six-sigma-agile-convergence-2025'
    }
  ];

  // ─── PASO 4: renderHistorias ──────────────────────────────────────────────
  function renderHistorias() {
    var grid = document.getElementById('historias-grid');
    if (!grid) { return; }
    grid.innerHTML = HISTORIAS_DATA.map(function (h) {
      return (
        '<article class="card">' +
          '<div class="card-meta">' + escapeHTML(h.fecha) + ' · ' + escapeHTML(h.categoria) + '</div>' +
          '<h3 class="card-title">' + escapeHTML(h.titulo) + '</h3>' +
          '<p class="card-body">' + escapeHTML(h.resumen) + '</p>' +
        '</article>'
      );
    }).join('');
  }

  // ─── PASO 5: renderNoticias ───────────────────────────────────────────────
  function renderNoticias() {
    var grid = document.getElementById('noticias-grid');
    if (!grid) { return; }
    grid.innerHTML = NOTICIAS_DATA.map(function (n) {
      return (
        '<article class="card">' +
          '<div class="card-meta">' + escapeHTML(n.fecha) + ' · ' + escapeHTML(n.fuente) + '</div>' +
          '<h3 class="card-title">' +
            '<a href="' + escapeHTML(n.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(n.titulo) + '</a>' +
          '</h3>' +
          '<p class="card-body">' + escapeHTML(n.resumen) + '</p>' +
        '</article>'
      );
    }).join('');
  }

  // ─── PASO 6: navegarA ─────────────────────────────────────────────────────
  function navegarA(sectionId) {
    var secciones = document.querySelectorAll('.page-section');
    secciones.forEach(function (sec) {
      sec.classList.remove('is-active');
    });

    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.classList.remove('is-active');
    });

    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('is-active');
    }

    var activeLink = document.querySelector('.nav-link[data-target="' + sectionId + '"]');
    if (activeLink) {
      activeLink.classList.add('is-active');
    }

    window.location.hash = '#' + sectionId;
  }

  // ─── PASO 7: initNavegacion ───────────────────────────────────────────────
  function initNavegacion() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var dataTarget = link.getAttribute('data-target');
        if (dataTarget) {
          navegarA(dataTarget);
        }
        var navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          var navToggle = document.getElementById('nav-toggle');
          if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  }

  // ─── PASO 8: initNavToggle ────────────────────────────────────────────────
  function initNavToggle() {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    if (!navToggle || !navMenu) { return; }
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('is-open');
      if (navMenu.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'true');
      } else {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ─── PASO 9: initFAQ ──────────────────────────────────────────────────────
  function initFAQ() {
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var faqItem = btn.closest('.faq-item');
        if (!faqItem) { return; }
        faqItem.classList.toggle('is-open');
        if (faqItem.classList.contains('is-open')) {
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ─── PASO 10: initCookieBanner ────────────────────────────────────────────
  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    var acceptBtn = document.getElementById('cookie-accept-btn');
    var rejectBtn = document.getElementById('cookie-reject-btn');

    if (!banner) { return; }

    var cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      banner.classList.add('is-visible');
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'accepted');
        banner.classList.remove('is-visible');
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'rejected');
        banner.classList.remove('is-visible');
      });
    }
  }

  // ─── PASO 11: initFooterYear ──────────────────────────────────────────────
  function initFooterYear() {
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ─── PASO 12: initHashRouting ─────────────────────────────────────────────
  function initHashRouting() {
    var validSections = ['section-home', 'section-historias', 'section-noticias', 'section-faq'];
    var hash = window.location.hash ? window.location.hash.replace('#', '') : '';
    if (hash && validSections.indexOf(hash) !== -1) {
      navegarA(hash);
    } else {
      navegarA('section-home');
    }

    window.addEventListener('hashchange', function () {
      var newHash = window.location.hash ? window.location.hash.replace('#', '') : '';
      if (newHash && validSections.indexOf(newHash) !== -1) {
        navegarA(newHash);
      }
    });
  }

  // ─── INIT ─────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    renderHistorias();
    renderNoticias();
    initNavegacion();
    initNavToggle();
    initFAQ();
    initCookieBanner();
    initFooterYear();
    initHashRouting();
  });

})();