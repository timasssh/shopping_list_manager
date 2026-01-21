import { showMenu, switchMenu } from "./menu_scripts.js";

export const switchMenuButtons = document.querySelectorAll(".mainContentOption");
export const menus = document.querySelectorAll(".menu");

showMenu();
switchMenuButtons.forEach((element, index) => {
    element.addEventListener("click", () => switchMenu(index));
});