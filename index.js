window.addEventListener('DOMContentLoaded', () => {
var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext("2d");
var openModalBtn = document.getElementById("modal1")


openModalBtn.onclick = function() {
    modal.style.display = "block";
    console.log("ok");
  }
function testFunc() {
    window.alert("func ok")
}
function openModal() {
    console.log("opneing");
    openModalBtn.style.display = "block";
}

function drawImage() {
    img = new Image();
    img.src = './room.png'
    img.onload = () => {
        ctx.drawImage(img, 0, 0)
    }
}


canvas.addEventListener('click', ((event) => {
    console.log(event.clientX);
    console.log(event.clientY);
}))
drawImage()




})



