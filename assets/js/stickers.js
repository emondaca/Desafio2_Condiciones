function stickerCount() {
    var sticker1 = document.getElementById("sticker1").value;
    var sticker2 = document.getElementById("sticker2").value;
    var sticker3 = document.getElementById("sticker3").value;
    var total= Number(sticker1) + Number(sticker2) + Number(sticker3);
    if (total <= 10) {
        document.getElementById("message").innerHTML = "Llevas "+total+" stickers";
    } else {
        document.getElementById("message").innerHTML = "Llevas demasiados stickers";
    };

}