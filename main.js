const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const headerNav = document.getElementById("header-nav");
const navOverlay = document.getElementById("nav-overlay");
const desktopQuery = window.matchMedia("(min-width: 64rem)");

function openMenu() {
  menuOpen.ariaExpanded = true;
  headerNav.hidden = false;
  headerNav.inert = false;
  navOverlay.hidden = false;
}

function closeMenu() {
  menuOpen.ariaExpanded = false;
  headerNav.hidden = true;
  headerNav.inert = true;
  navOverlay.hidden = true;
}

function handleBreakpoint(e) {
  if (e.matches) {
    openMenu();
  } else {
    closeMenu();
  }
  navOverlay.hidden = true;
}

handleBreakpoint(desktopQuery);

desktopQuery.addEventListener("change", handleBreakpoint);
menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
navOverlay.addEventListener("click", closeMenu);
