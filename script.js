  var navIcon = document.getElementById("navicon")
        var navSlide = document.querySelector(".navbar__slide")
        var navSlideClose = document.querySelector(".navbar__slide__close")
        navIcon.addEventListener("click", function () {
            navSlide.style.display = 'flex'
            console.log(navIcon)
        })
        navSlideClose.addEventListener("click", function () {
            navSlide.style.display = 'none'
            console.log(navSlideClose)
        })