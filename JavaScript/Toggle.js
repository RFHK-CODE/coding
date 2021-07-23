toggle = document.querySelector(".navbar-toggle")
toggleSearch = document.querySelector(".toggle-search")
searchBar = document.querySelector(".search-bar")
navbar = document.querySelector(".bar")
leftNavList = document.querySelector(".left-nav-list")
toggle.addEventListener('click',()=>{
    navbar.classList.toggle("media-bar")
    leftNavList.classList.toggle("media-list")
    searchBar.classList.toggle("ssearch-bar")
})
toggleSearch.addEventListener('click',()=>{
    searchBar.classList.toggle("ssearch-bar")
})
