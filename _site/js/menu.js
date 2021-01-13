function showMenu() {
  document.getElementById('menu-retratil').classList.remove("menu-hide");
  document.getElementById('menu-retratil').classList.add("menu-show");
}

function hideMenu() {
  document.getElementById('menu-retratil').classList.remove("menu-show");
  document.getElementById('menu-retratil').classList.add("menu-hide");
}

document.getElementById('show-menu').onclick = showMenu;
document.getElementById('hide-menu').onclick = hideMenu;
