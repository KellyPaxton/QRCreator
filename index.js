const center = document.getElementById("center");
const input = document.getElementById("input");
const save = document.getElementById("save");

input.addEventListener('click', function () {
    document.getElementById("qrcode").innerHTML = "";
    center.style.display = "none";
    save.style.display = "none";
});

function createQRCode() {
    if (input.value != '') {
        new QRCode(document.getElementById("qrcode"), { text: input.value, colorDark: "#ff6600", colorLight: "#FFF" });
        center.style.display = "inline";
        save.style.display = "inline";
        input.value = "";
    } else {
        alert("Please input a URL")
    }
};

function printDiv() {
    var divContents = document.getElementById("code").innerHTML;
    var printWindow = window.open('', 'width=2500,height=2500');
    printWindow.document.write('<html><head><title>Code</title></head><body>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
