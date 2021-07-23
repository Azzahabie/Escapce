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
        pressWhere(event.clientX, event.clientY)
            .then((data) => {
                console.log(data)
                openModal(data)
            })
        console.log(event.clientX, event.clientY);

        getProperMousePos(canvas, event)
            .then(data => {
                pressWhere(data.x, data.y)
                    .then(data => {
                        openModal(data)
                    })
            })

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

    function getProperMousePos(canvas, event) {
        return new Promise(function (resolve, reject) {

            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            resolve({ x, y })
        })
    }

    function pressWhere(mousePosX, mousePosY) {
        console.log(mousePosX, mousePosY);
        return new Promise(function (resolve, reject) {
            if ((mousePosX > 714 && mousePosX < 864) && (mousePosY > 323 && mousePosY < 589)) {
                resolve("cardBoard")
            } else if ((mousePosX > 960 && mousePosX < 999) && (mousePosY > 451 && mousePosY < 548)) {
                resolve("keypad")
            } else if ((mousePosX > 888 && mousePosX < 936) && (mousePosY > 584 && mousePosY < 684)) {
                resolve("dustbin")
            } else if ((mousePosX > 116 && mousePosX < 138) && (mousePosY > 564 && mousePosY < 691)) {
                resolve("glass")
            } else if ((mousePosX > 224 && mousePosX < 286) && (mousePosY > 469 && mousePosY < 534)) {
                resolve("crack")
            } else if ((mousePosX > 283 && mousePosX < 572) && (mousePosY > 254 && mousePosY < 386)) {
                resolve("window")
            } else if ((mousePosX > 780 && mousePosX < 868) && (mousePosY > 144 && mousePosY < 287)) {
                resolve("spiderweb")
            } else if ((mousePosX > 449 && mousePosX < 532) && (mousePosY > 60 && mousePosY < 153)) {
                resolve("lightbulb")
            } else if ((mousePosX > 329 && mousePosX < 462) && (mousePosY > 607 && mousePosY < 689)) {
                resolve("luggage")
            } else if ((mousePosX > 30 && mousePosX < 154) && (mousePosY > 152 && mousePosY < 352)) {
                resolve("picture")
            } else {
                resolve("failed")
            }
        })
    }

    //callers
    drawImage()

})