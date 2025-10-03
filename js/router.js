(function () {
  function normalizePage(p) {
    if (!p) return '';
    return p.replace(/^\s+|\s+$/g, '');
  }

  function navigateTo(page) {
    page = normalizePage(page);
    if (!page) return;
    if (!page.endsWith('.html')) page = page + '.html';

    const currentPath = window.location.pathname || '';
    const inTelas = currentPath.includes('/telas/') || currentPath.match(/\/telas\/[^\/]*$/);
    let target = page;
    if (!page.includes('telas/') && !inTelas) {
      target = 'telas/' + page;
    }
    window.location.href = target;
  }

  function setupNav() {
    document.querySelectorAll('[data-nav]').forEach(function (el) {
      el.addEventListener('click', function (ev) {
        if (ev) ev.preventDefault();
        const dest = el.getAttribute('data-nav');
        navigateTo(dest);
      });
    });
  }

  function setupLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (ev) {
        ev.preventDefault();
        navigateTo('dashboard');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupNav();
    setupLoginForm();
  });

  window.appRouter = { navigateTo: navigateTo };
})();