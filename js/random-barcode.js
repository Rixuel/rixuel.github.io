let barcodeArr = ["█", "║", "▐", "▌", "│"];
let barcodeOutput = "";

function randomBarcode() {
    for(let i=0; i<17; i++){
        barcodeOutput += barcodeArr[Math.floor(Math.random() * barcodeArr.length)];
    }
    //console.log("Barcode:", barcodeOutput);
    document.getElementById("barcode").innerHTML = barcodeOutput;
    barcodeOutput = "";
}