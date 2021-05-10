let button;

let onloadFunc = function () {
    button = document.getElementById("button")
    fun()
}

let fun = function () {
    button.addEventListener("click", clickFun)
}

let clickFun = function () {
    let content = document.getElementById("content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
window.onload = onloadFunc;
