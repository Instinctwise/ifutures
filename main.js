const menuopen = document.querySelector(".ri-menu-fill")
const menuclose = document.querySelector(".ri-close-circle-fill")
const menu = document.querySelector(".navi")

menuopen.addEventListener("click", function(){
    menu.style.right = "0"
})
menuclose.addEventListener("click", function(){
    menu.style.right = "-200px"
})