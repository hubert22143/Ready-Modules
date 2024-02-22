let rotationAngle = 0;
let initialCounter = 0;

export function initializeDropDownMenu() {
  const menus = document.querySelectorAll(".menu");
  menus.forEach((menu) => {
    const selectItem = menu.querySelector(".menuWrapper");
    const icon = selectItem.querySelector(".hIcon");

    if (!selectItem.hasEventListener) {
      selectItem.addEventListener("click", () => {
        rotateIcon(icon);
        showMenuList(menu);
      });
      selectItem.hasEventListener = true;
    }
  });
}

function rotateIcon(icon) {
  rotationAngle += 180;
  icon.style.transform = `rotate(${rotationAngle}deg)`;
}

function showMenuList(menu) {
  const menuList = menu.querySelector(".menuList");
  initialCounter++;
  if (initialCounter % 2 === 0) {
    menuList.style.opacity = 0;
  } else {
    menuList.style.opacity = 1;
  }
}
