// modo dark/light

let botaodark = document.getElementById("botaodark")
let html = document.querySelector("html")

const mudarmodo = () => {
    if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode")
       
    } html.classList.toggle("light-mode")
}
