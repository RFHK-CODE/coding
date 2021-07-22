toggle = document.querySelector(".navbar-toggle")
navbar = document.querySelector(".bar")
leftNavList = document.querySelector(".left-nav-list")
rightNavList = document.querySelector(".right-nav-list")
toggle.addEventListener('click',()=>{
    navbar.classList.toggle("media-bar")
    leftNavList.classList.toggle("media-list")
/*    rightNavList.classList.toggle("media-search-list")*/
})