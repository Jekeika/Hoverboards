const menuButton = document.querySelector(".m-menu")
const menuButton2 = document.querySelector(".m-menu2")
const menu = document.querySelector(".SPAN")
const menu2 = document.querySelector(".choice")
menuButton.addEventListener("click", () => {
    console.log('Кликнули по меню');
    menu.classList.toggle("is-open");
});
menuButton2.addEventListener("click", () => {
    console.log('Кликнули по меню');
    menu2.classList.toggle("is-open2");
});