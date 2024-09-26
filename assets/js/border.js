function bordeRojo() {
    var imagen = document.getElementById("img1");
    var cssImagen = window.getComputedStyle(imagen, null);
    if (cssImagen.borderStyle == "none") {
        imagen.style.borderStyle = "solid";
    } else {
        imagen.style.borderStyle = "none"
    }
}