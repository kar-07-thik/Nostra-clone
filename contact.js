var navIcon = document.getElementById("navicon")
var navSlide = document.querySelector(".navbar__slide")
var navSlideClose = document.querySelector(".navbar__slide__close")
navIcon.addEventListener("click", function () {
    navSlide.style.left = "0%"

    console.log(navIcon)
})
navSlideClose.addEventListener("click", function () {
    navSlide.style.left = '-45%'
    console.log(navSlideClose)
})
var adClose = document.getElementById("top__ad__close")
adClose.addEventListener("click", function () {
    adClose.parentNode.style.display = 'none'
})