export { showMenu, switchMenu };

function showMenu(menuToShow = 0) {
    let switchMenuButtons = document.querySelectorAll(".mainContentOption");
    let menus = document.querySelectorAll(".menu");

    if(!menuToShow) {
        switchMenuButtons[0].classList.add("selectedOption");
        switchMenuButtons[1].classList.remove("selectedOption");

        menus[0].classList.remove("hidden");
        menus[1].classList.add("hidden")
    }else {
        switchMenuButtons[1].classList.add("selectedOption");
        switchMenuButtons[0].classList.remove("selectedOption");

        menus[1].classList.remove("hidden");
        menus[0].classList.add("hidden")
    }
}
function switchMenu(index) {
    let switchMenuButtons = document.querySelectorAll(".mainContentOption");

    let activeMenu = switchMenuButtons[0].classList.contains("selectedOption") ? 0 : 1;
    if(index !== activeMenu) {
        showMenu(!activeMenu);
    }
}
