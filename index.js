var navIcon = document.getElementById("navicon")
var navSlide = document.querySelector(".navbar__slide")
var navSlideClose = document.querySelector(".navbar__slide__close")
navIcon.addEventListener("click", function () {
    navSlide.style.left = "0%"

    console.log(navIcon)
})
navSlideClose.addEventListener("click", function () {
    navSlide.style.left = '-60%'
    console.log(navSlideClose)
})
var adClose = document.getElementById("top__ad__close")
adClose.addEventListener("click", function () {
    adClose.parentNode.style.display = 'none'
})
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var margin=0
sliderrightbutton.addEventListener("click",function(){
    margin=margin+100
    if(margin>200){
        margin=0
        sliderimage.style.marginLeft=0;
    }
       else{
        sliderimage.style.marginLeft="-"+margin+"vw";
    }
})

const likes = document.getElementsByClassName("like")
likes.addEventListener("click",function(){
    console.log(likes)
})
// var sliderleftbutton = document.getElementById("slider-left-activate")
// var sliderrightbutton =document.getElementById("slider-right-activate")
// var sliderimage= document.querySelector(".slider-image-container")
// var slidermargin=0
// console.log(sliderleftbutton)
// sliderrightbutton.addEventListener("click",
// function(){
//     slidermargin=slidermargin+100
//     if(slidermargin>200)
//     {
//         slidermargin=0
//         sliderimage.style.marginLeft=0;
//     }
//     else{
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
// }
// )
// sliderleftbutton.addEventListener("click",
// function(){
//     if(slidermargin==0)
//     {
//         slidermargin=200
//         sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
//     else{
//         slidermargin=slidermargin-100
//     sliderimage.style.marginLeft="-"+slidermargin+"vw";
//     }
// }
// ) 