const switchMenuButtons = document.querySelectorAll(".mainContentOption");
const menus = document.querySelectorAll(".menu");

function switchMenu(index) {
    let activeMenu = switchMenuButtons[0].classList.contains("selectedOption") ? 0 : 1;
    if(index !== activeMenu) {
        if(activeMenu) {
            switchMenuButtons[0].classList.add("selectedOption");
            switchMenuButtons[1].classList.remove("selectedOption");

            menus[0].classList.add("hidden");
            menus[1].classList.remove("hidden")
        }else {
            switchMenuButtons[1].classList.add("selectedOption");
            switchMenuButtons[0].classList.remove("selectedOption");

            menus[1].classList.add("hidden");
            menus[0].classList.remove("hidden")
        }
    }
}

switchMenuButtons.forEach((element, index) => {
    element.addEventListener("click", () => switchMenu(index));
});