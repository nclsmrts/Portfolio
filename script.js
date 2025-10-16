// modo dark/light

let botaodark = document.getElementById("botaodark")
let html = document.querySelector("html")

const mudarmodo = () => {
    if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode")

    } html.classList.toggle("light-mode")
}


// abrir/fechar menu

let iconeaberto = document.getElementById("icone-aberto")
let iconefechado = document.getElementById("icone-fechado")
let menu = document.getElementById("menu")

const abrirmenu = () => {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        menu.classList.add("menu")
        iconefechado.style.display = "inline"
        iconeaberto.style.display = "none"
    } else {
        menu.classList.remove("menu")
        menu.classList.add("menu-fechado")
        iconefechado.style.display = "none"
        iconeaberto.style.display = "inline"

    }
}




function abrirJogo() {
  const modal = document.getElementById("janela-jogo");
  const container = document.getElementById("container-jogo");

  // Cria o iframe do jogo dinamicamente
  const iframe = document.createElement("iframe");
  iframe.src = "game/game.html"; // caminho da sua build
  iframe.width = "1080";
  iframe.height = "720";
  iframe.frameBorder = "0";
  iframe.allowFullscreen = true;
  iframe.id = "frame-jogo";

  container.appendChild(iframe);
  modal.style.display = "flex";
}

function fecharJogo() {
  const modal = document.getElementById("janela-jogo");
  const container = document.getElementById("container-jogo");

  // Fecha o modal
  modal.style.display = "none";

  // Remove completamente o iframe da página (mata som e jogo)
  container.innerHTML = "";
}