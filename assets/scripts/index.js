import { showMenu, switchMenu } from "./menu_scripts.js";

const switchMenuButtons = document.querySelectorAll(".mainContentOption");

showMenu();
switchMenuButtons.forEach((element, index) => {
    element.addEventListener("click", () => switchMenu(index));
});