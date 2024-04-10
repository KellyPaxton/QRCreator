const center = document.getElementById("center");
const input = document.getElementById("input");
const save = document.getElementById("save");
const x = document.getElementById("qrcode");

input.addEventListener('click', function () {
    document.getElementById("qrcode").innerHTML = '';
    center.style.display = "none";
    x.style.display = "none";
});

function createQRCode() {
    if (input.value != '') {
        new QRCode(document.getElementById("qrcode"), { text: input.value, colorDark: "#fd7e14", colorLight: "#FFF" });
        x.style.display = "inline";
        center.style.display = "inline";
        input.value = '';
    } else {
        alert("Please input a URL")
    }
}
