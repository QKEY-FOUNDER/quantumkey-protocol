// script.js - controls offcanvas menu and safe DOM listeners
(function () {
  "use strict";

  function dbg(...args){ if(window.location.search.indexOf("debug")!==-1) console.log(...args); }

  document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menu-btn');
    var offcanvas = document.getElementById('offcanvas-menu');
    var closeBtn = document.getElementById('menu-close');
    var navLinks = offcanvas ? offcanvas.querySelectorAll('a') : [];

    if (!menuBtn || !offcanvas || !closeBtn) {
      console.warn('Menu elements missing: menuBtn, offcanvas or closeBtn not found.');
      return;
    }

    function isOpen() {
      return offcanvas.classList.contains('open');
    }

    function setAriaOpen(state) {
      menuBtn.setAttribute('aria-expanded', state ? 'true' : 'false');
      offcanvas.setAttribute('aria-hidden', state ? 'false' : 'true');
    }

    function openMenu() {
      offcanvas.classList.add('open');
      setAriaOpen(true);
      // prevent background scroll
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      dbg('menu opened');
    }

    function closeMenu() {
      offcanvas.classList.remove('open');
      setAriaOpen(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      dbg('menu closed');
    }

    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (isOpen()) closeMenu(); else openMenu();
    });

    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });

    // close when clicking a link inside the menu (useful for anchors)
    navLinks.forEach(function (a) {
      a.addEventListener('click', function () {
        closeMenu();
      });
    });

    // close on ESC
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' || ev.key === 'Esc') {
        if (isOpen()) closeMenu();
      }
    });

    // close when clicking outside the offcanvas (for desktop)
    document.addEventListener('click', function (ev) {
      if (!isOpen()) return;
      var target = ev.target;
      var inside = offcanvas.contains(target) || menuBtn.contains(target);
      if (!inside) closeMenu();
    });

    // quick check: ensure script loaded after DOM elements exist
    dbg('script.js initialized', { menuBtn: !!menuBtn, offcanvas: !!offcanvas, closeBtn: !!closeBtn });
  });
})();
