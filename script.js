document.addEventListener("DOMContentLoaded", () => {

    window.agregarImagen = function() {
        if (!document.getElementById('miImagen')) {
            const img = document.createElement("img");
            img.src = "imagenes/imagen.jpeg"; 
            img.alt = "Descripcion de la imagen";
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.marginTop = "15px";
            img.id = "miImagen";
            document.body.appendChild(img);
            const ulDiv = document.querySelector("div ul");
            if (ulDiv) {
                ulDiv.appendChild(img);
            }
        }
    }

    window.ordenarContenido = function() {
        const contenedor = document.querySelector(".contenido");
        contenedor.style.display = "flex";
        contenedor.style.flexDirection = "column";

    }

    window.cambiarTitulo = function() {
        const nuevoTitulo = prompt("Introduce el nuevo título:");
        if (nuevoTitulo) {
            document.querySelector("#header h1").textContent = nuevoTitulo;
        }
    }

    window.cambiarEstilo = function() {
        const contenido = document.querySelector(".subDesc");
        contenido.style.fontFamily = "comic sans ms, sans-serif";
        contenido.style.color = "blue";
    }
});