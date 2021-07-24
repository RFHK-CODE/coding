toggle = document.querySelector(".navbar-toggle")
toggleSearch = document.querySelector(".toggle-search")
searchBar = document.querySelector(".search-bar")
navbar = document.querySelector(".bar")
leftNavList = document.querySelector(".left-nav-list")
toggle.addEventListener('click',()=>{
    if (!(searchBar.classList.value != "search-bar")) { 
        searchBar.classList.toggle("ssearch-bar") 
    }
    navbar.classList.toggle("media-bar")
    leftNavList.classList.toggle("media-list")
})
toggleSearch.addEventListener('click',()=>{
    if (!(navbar.classList.value != "bar")) {
        navbar.classList.toggle("media-bar")
        leftNavList.classList.toggle("media-list")
    }
    searchBar.classList.toggle("ssearch-bar")
})
