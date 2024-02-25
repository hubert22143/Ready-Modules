let initialCounter = 0;
export function initializeDropDownMenu() {
  const menus = document.querySelectorAll(".menu");
  menus.forEach((menu) => {
    const selectItem = menu.querySelector(".menuWrapper");
    const menuList = menu.querySelector(".menuList");
    const liElements = menu.querySelectorAll(".ulElements li");
    const menuHeader = menu.querySelector(".selectedItem");
    const menuWrapper = menu.querySelector(".menuWrapper");
    const hIcon = menuWrapper.querySelector(".hIcon");
    const ulList = menuList.querySelector('.ulElements');
    selectItem.addEventListener("click", () => {
      showMenuList(menuList,ulList);
      if (initialCounter % 2 === 0) {
        hIcon.classList.remove("active");
      } else {
        hIcon.classList.add("active");
      }
    });
    liElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        activateElement(element, menuHeader, menuList, hIcon);
      });
    });
  });
}
function showMenuList(menuList,ulList) {
  initialCounter++;
  const isActive = initialCounter % 2 === 1;
  menuList.style.opacity = isActive ? 1 : 0;
  menuList.classList.toggle("active", isActive);
  ulList.style.pointerEvents = isActive ? 'auto' : 'none';
}

function activateElement(element, menuHeader, menuList, hIcon) {
  const liElements = element.parentElement.querySelectorAll("li");
  hIcon.classList.remove("active");
  liElements.forEach((el) => el.classList.remove("active"));
  menuHeader.textContent = element.textContent;
  element.classList.add("active");
  menuList.style.opacity = 0;
  initialCounter++;
}
