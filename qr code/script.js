
function generateQR(){
if(qrtext.value.length>0){
 qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
 imgbox.classList.add("show-img");
 }

}
let imgbox=document.getElementById("imgBox");
let qrimage=document.getElementById("qrid");
let qrtext=document.getElementById("qrtext");

