document.getElementById("boton1").addEventListener("click", (e) => {
    document.getElementById("datos").innerHTML = `
    
    <p>Tecla alt presionada? ${e.altKey}</p>
    <p>Tecla ctrl presionada? ${e.ctrlKey}</p>
    <p>Tecla shift presionada? ${e.shiftKey}</p>
    <p>Tecla Meta presionada? ${e.metaKey}</p>
    <p>Nombre del evento? ${e.type}</p>
    <p>El elemento que causo el evento? ${e.target}</p>
    <p>La coordenada x del mouse respecto a la ventana? ${e.clientX}</p>
    <p>La coordenada y del mouse respecto a la ventana? ${e.clientY}</p>
    <p>La coordenada x del mouse respecto a la pantalla completa? ${e.screenX}</p>
    <p>La coordenada y del mouse respecto a la pantalla completa? ${e.screenY}</p>
    <p>La coordenada x del mouse respecto al comienzo de la página? ${e.pageX}</p>
    <p>La coordenada y del mouse respecto al comienzo de la página? ${e.pageY}</p>
    <p>Número de botón del mouse presionado? ${e.button}</p>`
})

