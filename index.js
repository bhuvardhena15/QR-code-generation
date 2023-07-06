let imgBox = document.getElementById("imgBox")
let qrImgEl = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
function generateQrcode(){
    if(qrText.value.length>0){
    qrImgEl.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    imgBox.classList.add("show-img")
    }
}