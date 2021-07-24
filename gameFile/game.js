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

    // const roomImg = document.getElementById("img")
    // const openImgBtn = document.getElementById("openImg")
    const closeModalBtn = document.getElementById("close-Modal");
    const modal = document.getElementById("modal")

    const questionImg = document.getElementById('questionImg')
    const questionInput = document.getElementById('questionInput')
    const labelForQuestion = document.getElementById('labelForQuestionInput')
    const answerQuestionBtn = document.getElementById('answerQuestion')

    // const openModalBtn = document.getElementById("openModal")

    const foundCluesDiv = document.getElementById('foundClues')
    const foundCluesBtn = document.getElementById("found-icon")

    const getHelpBtn = document.getElementById("hint-icon")
    const getHelpDiv = document.getElementById('getHelpDiv')


    modal.style.display = "none"

    getHelpBtn.addEventListener('click', () => {
        openGetHelp()
    })
    foundCluesBtn.addEventListener('click', () => {
        openFoundClues()
    })

    closeModalBtn.addEventListener('click', () => {
        closeModal()
    })

    // openModalBtn.addEventListener('click', () => {
    //     openModal('hi')
    // })
    //openImgBtn.addEventListener('click', () => {
    //openImg()
    //})
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
    // function openImg() {
    //     if (roomImg.hidden == false) {
    //         roomImg.hidden = true;
    //     } else {
    //         roomImg.hidden = false;
    //     }
    // }

    function openFoundClues() {
        if (foundCluesDiv.hidden == true) {
            foundCluesDiv.hidden = false
        } else {
            foundCluesDiv.hidden = true
        }
    }
    function openGetHelp() {
        if (getHelpDiv.hidden == true) {
            getHelpDiv.hidden = false

        } else {
            getHelpDiv.hidden = true
        }
    }

    function createQuestion(data) {
        if (data == "cupboard") {
            alert("Nothing here......")
            closeModal()
        }
        if (data == "keypad") {
            questionImg.src = ""

            labelForQuestion.textContent = `Given parts of the for loop: 
                <br>1) var sum = ' '; 
                <br>2) sum += 
                <br>3) Enter the password to exit: `
            questionInput.type = "number"
            questionInput.value = ""
        }
        if (data == "dustbin") {
            questionImg.src = ""

            alert("You found a piece of paper with number 2 and number 6, it might come in handy later.")
            closeModal()
        }
        if (data == "glass") {
            questionImg.src = "../images/wordsearch.png"
            labelForQuestion.textContent = "Find the hidden word"
            questionInput.type = "test"
        }
        if (data == "crack") {
            alert("Nothing here......")
            closeModal()
        }
        if (data == "window") {
            questionImg.src = "../images/crosswordPuzzle.png"
            labelForQuestion.textContent = "Piece together the crossword puzzle and fill in the coloured boxes."
            questionInput.type = "text"
            questionInput.value = ""
        }
        if (data == "spiderweb") {
            questionImg.src = "../images/maze.png"
            labelForQuestion.textContent = "Escape the maze to get the the numbers needed in the for loop array."
            questionInput.type = "number"
            questionInput.value = ""
        }
        if (data == "lightbulb") {
            questionImg.src = "../images/morsecode.png"
            labelForQuestion.textContent = "Decode:  ... .-.. .. -.-. . (No Caps)"
            questionInput.type = "text"
            questionInput.value = ""
        }
        if (data == "luggage") {
            questionImg.src = "../images/braillepicandqn.png"
            labelForQuestion.textContent = "Decoded Text: "
            questionInput.type = "text"
            questionInput.value = ""
        }
        if (data == "randomCrack") {
            questionImg.src = "../images/shapePuzzle1.png"

            labelForQuestion.textContent = "Find the option that fits."
            questionInput.type = "text"
            questionInput.value = "a / b / c / d"
        }
        if (data == "randomFloor") {
            alert("Nothing here......")
            closeModal()
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

    const progress = {
        glass: false,
        window: false,
        spiderweb: false,
        lightbulb: false,
        luggage: false,
        randomCrack: false,
        picture: false,
    }

    function trackProgress(data) {
        if (progress[data] === false) {
            return progress[data] = true;
        }
    }

    const answer = {
        keypad: 5610,
        glass: 'length',

    }

    function checkAnswer() {
        if (currentQuestion == "cupboard") {

        }
        if (currentQuestion == "keypad") {
            let answer = 5610;
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                window.alert("You have successfully exited the room congrats!")
                window.location.href = 'index.html'
            } else {
                return window.alert("Oops, wrong password! Try again!")
            }
        }
        if (currentQuestion == "dustbin") {
            // 2,6 
        }
        if (currentQuestion == "glass") {
            let answer = "length"
            let userAnswer = document.getElementById("questionInput").value
            let lowerCapAnswer = userAnswer.toLowerCase()
            console.log(typeof lowerCapAnswer);
            if (lowerCapAnswer == answer) {
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.glass)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "crack") {

        }
        if (currentQuestion == "window") {
            let answer =
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == 'sqarr' || userAnswer == 'sqArr') {
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.window)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "spiderweb") {
            let answer = 7210787123513643157026804309
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                updateClues(currentQuestion)
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.spiderweb)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "lightbulb") {
            let answer = 'slice';
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == answer) {
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.lightbulb)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "luggage") {
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == 'i+=3' || userAnswer == 'i += 3' || userAnswer == 'i + = 3') {
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.luggage)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
        if (currentQuestion == "randomCrack") {
            let userAnswer = document.getElementById("questionInput").value
            if (userAnswer == 'C' || userAnswer == 'c') {
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.randomCrack)
                closeModal();
                // window.location.href = 'game.html'
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
                window.alert("correct!")
                trackProgress(currentQuestion);
                console.log(progress.picture)
                closeModal();
                // window.location.href = 'game.html'
            } else {
                return window.alert("oops try again")
            }
        }
    }

    function updateClues(question) {
        let clue = document.getElementById('array_clue')
        let answer = "7,2,1,0,7,8,7,1,2,3,5,1,3,6,4,3,1,5,7,0,2,6,8,0,4,3,0,9"
        clue.textContent = answer
    }

    function openModal(modal2) {
        currentQuestion = modal2
        if (progress[modal2] === true) {
            return alert('You have successfully completed this task!')
        } else {
            createQuestion(modal2)
        }
        
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