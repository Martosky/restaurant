const bgColor = document.getElementById("content-body");
const button = document.getElementById("dark-bright");

button.addEventListener("click", changeBgColor);

function changeBgColor(){
    bgColor.classList.toggle("dark")
    button.style.color = "white"
}