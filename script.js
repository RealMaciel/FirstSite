botao.addEventListener("click", function () {
    document.getElementById("visivel").style.display = "none"
    document.getElementById("invisivel").style.display = "block"
const som = document.querySelector("#invisivel audio");
som.play();
});