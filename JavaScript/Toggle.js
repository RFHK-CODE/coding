function toggle() {
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " toggle";
    }
    else {
        x.className = "navbar";
    }
}