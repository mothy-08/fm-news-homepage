const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const headerNav = document.getElementById("header-nav");
const navOverlay = document.getElementById("nav-overlay");
const desktopQuery = window.matchMedia("(min-width: 64rem)");

// open -> header nav visible not inert and overlay must be visible

menuOpen.addEventListener("click", () => {
  menuOpen.ariaExpanded = true;

  headerNav.hidden = false;
  headerNav.inert = false;

  navOverlay.hidden = false;
});

menuClose.addEventListener("click", () => {
  headerNav.hidden = true;
  headerNav.inert = true;

  navOverlay.hidden = true;
});

navOverlay.addEventListener("click", () => {
  headerNav.hidden = true;
  headerNav.inert = true;

  navOverlay.hidden = true;
});

function handleBreakpoint(e) {
  if (e.matches) {
    headerNav.hidden = false;
    headerNav.inert = false;
    navOverlay.hidden = true;
  } else {
    headerNav.hidden = true;
    headerNav.inert = true;

    navOverlay.hidden = true;
  }
}

desktopQuery.addEventListener("change", handleBreakpoint);
handleBreakpoint(desktopQuery);
