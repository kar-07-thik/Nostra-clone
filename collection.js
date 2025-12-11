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
var search = document.getElementById("searchbox")
var container = document.getElementById("productcontainer")
var productList = container.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    for (count = 0; count < productList.length; count = count + 1) {
        var productname = productList[count].querySelector("h1").textContent.toUpperCase()
        if (productname.indexOf(entervalue) < 0) {
            productList[count].style.display = 'none'
        }
        else {
            productList[count].style.display = 'block'
        }
    }
})

