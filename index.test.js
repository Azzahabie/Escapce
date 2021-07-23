window.addEventListener('DOMContentLoaded', () => {
    // jquery for coordinates
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';

    var X, Y;

    $(document).ready(function () {
        $('img').click(function (e) {
            var offset = $(this).offset();
            X = (e.pageX - offset.left);
            Y = (e.pageY - offset.top);
            $('#coord').text('X: ' + X + ', Y: ' + Y);

            //console.log(X, Y);

            pressWhere(X, Y)
                .then((data) => {
                    openModal(data)
                })
        });
    });

    document.getElementsByTagName('head')[0].appendChild(script);

    var currentQuestion;

    const roomImg = document.getElementById("img")
    const openImgBtn = document.getElementById("openImg")
    const closeModalBtn = document.getElementById("close-Modal");
    const modal = document.getElementById("modal")

    const questionImg = document.getElementById('questionImg')
    const questionInput = document.getElementById('questionInput')
    const labelForQuestion = document.getElementById('labelForQuestionInput')
    const answerQuestionBtn = document.getElementById('answerQuestion')

    const openModalBtn = document.getElementById("openModal")

    const foundCluesDiv = document.getElementById('foundClues')
    const foundCluesBtn = document.getElementById("found-icon")

    const getHelpBtn = document.getElementById("hint-icon")
    const getHelpDiv = document.getElementById('getHelpDiv')
 

    modal.style.display = "none"

    getHelpBtn.addEventListener('click',()=>{
        openGetHelp()
    })
    foundCluesBtn.addEventListener('click',()=>{
        openFoundClues()
    })

    closeModalBtn.addEventListener('click', () => {
        closeModal()
    })

    openModalBtn.addEventListener('click', () => {
        openModal('hi')
    })
    openImgBtn.addEventListener('click', () => {
        openImg()
    })
    answerQuestionBtn.addEventListener('click', () => {
        checkAnswer()
    })


    function closeModal() {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }
    function openImg() {
        if (roomImg.hidden == false) {
            roomImg.hidden = true;
        } else {
            roomImg.hidden = false;
        }
    }

    function openFoundClues(){
        if (foundCluesDiv.hidden == true) {
            foundCluesDiv.hidden = false 
            
        } else {
            foundCluesDiv.hidden = true
        }
    }
    function openGetHelp(){
        if (getHelpDiv.hidden == true) {
            getHelpDiv.hidden = false 
            
        } else {
            getHelpDiv.hidden = true
        }
    }
    function createQuestion(data){
        if (data == "cupboard") {

        }
        if (data == "keypad") {
            questionImg.src = ""

            labelForQuestion.textContent = "Enter the password to exit: "
            questionInput.type = "number"
            questionInput.value = ""
        }
        if (data == "dustbin") {

        }
        if (data == "glass") {

        }
        if (data == "crack") {

        }
        if (data == "window") {

        }
        if (data == "spiderweb") {
            questionImg.src = "./maze.png"
            labelForQuestion.textContent = "Fill up this empty array[ ] (just put number no spaces)"
            questionInput.type = "number"
            questionInput.value = ""
        }
        if (data == "lightbulb") {
            questionImg.src = "./morsecode.png"
            labelForQuestion.textContent = "Decode:  ... .-.. .. -.-. . (No Caps)"
            questionInput.type = "text"
            questionInput.value = ""
        }
        if (data == "luggage") {
            questionImg.src = "./braillepicandqn.png"
            labelForQuestion.textContent = "Decoded Text: "
            questionInput.type = "text"
            questionInput.value = ""
        }
        if (data == "randomCrack") {
            questionImg.src = "./shapePuzzle1.png"

            labelForQuestion.textContent = "Find the option that fits ?"
            questionInput.type = "text"
            questionInput.value = "a b c or d"
        }
        if (data == "randomFloor") {

        }
        if (data == "picture") {
            questionImg.src = ""

            labelForQuestion.textContent = "i = ?"
            questionInput.type = "number"
            questionInput.value = ""
        }
        else {
            console.log(data);
            console.log("no load");
        }
    }

    function checkAnswer() {
        if (currentQuestion == "cupboard") {

        }
        if (currentQuestion == "keypad") {
            let answer = 5610;
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                return window.alert("You have successfully exited the room congrats!")
            } else {
                return window.alert("Oops, wrong password! Try again!")
            }
        }
        if (currentQuestion == "dustbin") {
            // 2,6 
        }
        if (currentQuestion == "glass") {
            // colourful word search
        }
        if (currentQuestion == "crack") {

        }
        if (currentQuestion == "window") {

        }
        if (currentQuestion == "spiderweb") {
            let answer = 7210787123513643157026804309
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                return window.alert("correct!")
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "lightbulb") {
            let answer = 'slice';
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                return window.alert("correct!")
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "luggage") {
            let answer = 'i+=3';
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                return window.alert("correct!")
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "randomCrack") {
            // let answer = "c" || "C"
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == 'C' || userAnswer == 'c') {
                return window.alert("correct!")
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "randomFloor") {

        }
        if (currentQuestion == "picture") {
            let answer = 4;
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                return window.alert("correct!")
            } else {
                return window.alert("oops try again")
            }
        }
    }

    function openModal(modal2) {
        currentQuestion = modal2
        createQuestion(modal2)
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
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
            } else if ((mousePosX > 90 && mousePosX < 148) && (mousePosY > 568 && mousePosY < 690)) {
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
            } else if ((mousePosX > 643 && mousePosX < 751) && (mousePosY > 54 && mousePosY < 153)) {
                resolve("randomCrack")
            } else if ((mousePosX > 532 && mousePosX < 631) && (mousePosY > 608 && mousePosY < 694)) {
                resolve("randomFloor")
            } else if ((mousePosX > 40 && mousePosX < 149) && (mousePosY > 159 && mousePosY < 345)) {
                resolve("picture")
            } else {
                console.log("huh")
            }
        })
    }
})