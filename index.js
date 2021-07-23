

window.addEventListener('DOMContentLoaded', () => {

    //canvas
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    //modal content
    const modalContent = document.getElementById("modal-h2")

    //modal button
    const canvasBtn = document.getElementById('openCanvas')
    const openModalBtn = document.getElementById("openModal")
    const modal = document.getElementById("modal")
    const closeModalBtn = document.getElementById("closeModal")


    //listeners
    openModalBtn.addEventListener('click', () => {
        alert('opened')
        // openModal('hi')
    })

    closeModalBtn.addEventListener('click', () => {
        closeModal()
    })

    canvasBtn.addEventListener('click', () => {
        openCanvas()
    })

    canvas.addEventListener('click', ((event) => {
        pressWhere(event.clientX,event.clientY)
        .then((data)=>{
            console.log(data)
            openModal(data)
        })
        console.log(event.clientX, event.clientY);
        
    }))

    //functions
    function openModal(modal2) {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
        modalContent.textContent = modal2

    }
    function closeModal() {

        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }
    function openCanvas() {
        if (canvas.hidden == true) {
            canvas.hidden = false;
            console.log("h is f");
        } else {
           canvas.hidden = true;
           console.log("h is t");
        }
    }

    function drawImage() {
        img = new Image();
        img.src = './theImage.png'
        img.onload = () => {
            ctx.drawImage(img, 0, 0)
        }
    }

    function pressWhere(mousePosX, mousePosY){
        return new Promise(function(resolve,reject){
            if ((mousePosX > 904 && mousePosX < 1104) && (mousePosY > 141 && mousePosY < 429)) {
                resolve("cardBoard")
            } else if((mousePosX > 1190 && mousePosX < 1233) && (mousePosY > 348 && mousePosY < 430)) {
                resolve("keypad")
            } else if((mousePosX > 1129 && mousePosX < 1166) && (mousePosY > 411 && mousePosY < 499)) {
                resolve("dustbin")
            } else if((mousePosX > 333 && mousePosX < 392) && (mousePosY > 435 && mousePosY < 559)) {
                resolve("glass")
            } else if((mousePosX > 578 && mousePosX < 720) && (mousePosY > 349 && mousePosY < 413)) {
                resolve("pillow")
            } else if((mousePosX > 632 && mousePosX < 695) && (mousePosY > 127 && mousePosY < 199)) {
                resolve("window")
            } else if((mousePosX > 1013 && mousePosX < 1104) && (mousePosY > 197 && mousePosY < 235)) {
                resolve("spiderweb")
            } else if((mousePosX > 705 && mousePosX < 728) && (mousePosY > 197 && mousePosY < 235)) {
                resolve("lightbulb")
            } else if((mousePosX > 551 && mousePosX < 693) && (mousePosY > 225 && mousePosY < 319)) {
                resolve("luggage")
            } else if((mousePosX > 470 && mousePosX < 520) && (mousePosY > 320 && mousePosY < 520)) {
                resolve("floormat")
            } else if((mousePosX > 272 && mousePosX < 380) && (mousePosY > 99 && mousePosY < 289)) {
                resolve("picture")
            }
        })
    }   

    //callers
    drawImage()

})