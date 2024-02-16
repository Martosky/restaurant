const bgColor = document.getElementById("content-body");
const button = document.getElementById("dark-bright");


button.addEventListener("click",  changeBgColor,);

function changeBgColor(){
    bgColor.classList.toggle("dark");
    const changeText = document.getElementsByClassName("change");
    for (let i = 0; i < changeText.length; i++){
        if (changeText[i].style.color == "white"){
            changeText[i].style.color = "black"
        }else {
            changeText[i].style.color = "white"
        }
    }
}

function textColor(){
    const changeText = document.getElementsByClassName("change");
    for (let i = 0; i < changeText.length; i++){
        if (changeText[i].style.color == "black"){
            changeText[i].style.color = "white"
        }else {
            changeText[i].style.color = "black"
        }
    }
}

