const fuiClickado = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado")

fuiClickado.addEventListener('click', () => {
    resultado.innerHTML = "Fui Clicado"
})

