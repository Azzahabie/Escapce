window.addEventListener('DOMContentLoaded', () => {

    //canvas
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    //modal button
    const canvasBtn = document.getElementById('openCanvas')
    const openModalBtn = document.getElementById("openModal")
    const modal = document.getElementById("modal")
    const closeModalBtn = document.getElementById("closeModal")


    //listeners
    closeModalBtn.addEventListener('click', () => {
        closeModal()
    })
    canvasBtn.addEventListener('click', () => {
        openCanvas()
    })

    openModalBtn.addEventListener('click', () => {
        openModal()
    })

    canvas.addEventListener('click', ((event) => {
        console.log(event.clientX);
        console.log(event.clientY);
    }))

    //functions
    function openModal() {

        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
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

    function drawRect(){
        ctx.begin
    }



    //callers
    drawImage()
    drawRect()
})