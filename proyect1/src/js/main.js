const $menu = document.querySelector("#menu");
const $menuOpen = document.querySelector("#menuOpen");

const menuFunction = function () {
    $menu.addEventListener("click" , ()=> {
        $menuOpen.classList.add("active");
    })
}
menuFunction();
