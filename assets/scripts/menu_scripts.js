import { switchMenuButtons, menus } from "./index.js";

function showMenu(menuToShow = 0) {
    if(!menuToShow) {
        switchMenuButtons[0].classList.add("selectedOption");
        switchMenuButtons[1].classList.remove("selectedOption");
        
        menus[0].classList.remove("hidden");
        menus[1].classList.add("hidden");
    }else {
        switchMenuButtons[1].classList.add("selectedOption");
        switchMenuButtons[0].classList.remove("selectedOption");
        
        menus[1].classList.remove("hidden");
        menus[0].classList.add("hidden");
    }
}
function switchMenu(index) {
    let activeMenu = switchMenuButtons[0].classList.contains("selectedOption") ? 0 : 1;
    if(index !== activeMenu) {
        showMenu(!activeMenu);
    }
}

export { showMenu, switchMenu };