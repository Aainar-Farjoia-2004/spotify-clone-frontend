document.addEventListener('DOMContentLoaded', function () {

  const globalLogo = document.querySelector('.global-logo');
  const logoDropdown = document.querySelector('#logo-dropdown');
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  const navDropdown = document.querySelector('.nav-dropdown');

  // LOGO CLICK → only sidebar
  if (globalLogo && sidebar) {
    globalLogo.addEventListener('click', function (e) {
      e.stopPropagation();

      // Toggle sidebar
      sidebar.classList.toggle('open');
      mainContent?.classList.toggle('sidebar-open');

      // Close navbar if open
      navDropdown?.classList.remove('open');
      logoDropdown?.classList.remove('active'); // optional if logo has dropdown
    });
  }

  // HAMBURGER CLICK → only navbar
  if (hamburger && navDropdown) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();

      // Toggle navbar
      navDropdown.classList.toggle('open');

      // Close sidebar if open
      sidebar?.classList.remove('open');
      mainContent?.classList.remove('sidebar-open');
      logoDropdown?.classList.remove('active'); // optional
    });
  }

  // Close all on outside click
  document.addEventListener('click', function () {
    sidebar?.classList.remove('open');
    navDropdown?.classList.remove('open');
    mainContent?.classList.remove('sidebar-open');
    logoDropdown?.classList.remove('active'); // optional
  });

});
