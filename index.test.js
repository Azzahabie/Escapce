window.addEventListener('DOMContentLoaded', () => {
    // jquery for coordinates
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';

    var X, Y;

    $(document).ready(function() {
        $('img').click(function(e) {
            var offset = $(this).offset();
            X = (e.pageX - offset.left);
            Y = (e.pageY - offset.top);
            $('#coord').text('X: ' + X + ', Y: ' + Y);

            console.log(X, Y);

            pressWhere(X, Y)
            .then((data) => {
                openModal(data)
            })
        });
    });

    document.getElementsByTagName('head')[0].appendChild(script);


    const closeModalBtn = document.getElementById("close-Modal");
    const modal = document.getElementById("modal")

    function closeModal() {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    closeModalBtn.addEventListener('click', () => {
        closeModal()
    })

    const openModalBtn = document.getElementById("openModal")

    openModalBtn.addEventListener('click', () => {
        // alert('opened')
        openModal('hi')
    })

    const modalContent = document.getElementById("modal-h2")

    function openModal(modal2) {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
        modalContent.textContent = modal2
    }

   function pressWhere(mousePosX, mousePosY) {
        console.log(mousePosX, mousePosY);
        return new Promise(function (resolve, reject) {
            if ((mousePosX > 709 && mousePosX < 871) && (mousePosY > 319 && mousePosY < 591)) {
                resolve("cupboard")
            } else if ((mousePosX > 959 && mousePosX < 996) && (mousePosY > 452 && mousePosY < 548)) {
                resolve("keypad")
            } else if ((mousePosX > 886 && mousePosX < 935) && (mousePosY > 583 && mousePosY < 684)) {
                resolve("dustbin")
            } else if((mousePosX > 90 && mousePosX < 148) && (mousePosY > 568 && mousePosY < 690)) {
                resolve("glass")
            } else if ((mousePosX > 210 && mousePosX < 297) && (mousePosY > 466 && mousePosY < 541)) {
                resolve("crack")
            } else if ((mousePosX > 281 && mousePosX < 577) && (mousePosY > 258 && mousePosY < 392)) {
                resolve("window")
            } else if ((mousePosX > 774 && mousePosX < 867) && (mousePosY > 154 && mousePosY < 289)) {
                resolve("spiderweb")
            } else if ((mousePosX > 437 && mousePosX < 536) && (mousePosY > 51 && mousePosY < 157)) {
                resolve("lightbulb")
            } else if ((mousePosX > 320 && mousePosX < 464) && (mousePosY > 597 && mousePosY < 690)) {
                resolve("luggage")
            } else if((mousePosX > 214 && mousePosX < 296) && (mousePosY > 463 && mousePosY < 296)) {
                resolve("randomCrack")
            } else if((mousePosX > 532 && mousePosX < 631) && (mousePosY > 608 && mousePosY < 694)) {
                resolve("randomFloor")
            } else if((mousePosX > 40 && mousePosX < 149) && (mousePosY > 159 && mousePosY < 345)) {
                resolve("picture")
            } 
        })
    }
})