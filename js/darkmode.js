let themeMode = document.getElementById('icon');
let themeMode2 = document.getElementById('icon2');

function toggleTheme(){
    document.body.classList.toggle("change-theme");

    if(document.body.classList.contains("change-theme")){
        themeMode.src = "imgs/whiteSunTransparent.svg";
        themeMode2.src = "imgs/whiteSunTransparent.svg";
    } else{
        themeMode.src = "imgs/moonTransparentFigma.svg";
        themeMode2.src = "imgs/moonTransparentFigma.svg";
    }
}

themeMode.addEventListener("click", toggleTheme);
themeMode2.addEventListener("click", toggleTheme);