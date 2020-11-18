document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'card1',
            img: 'images/set1/card1.png',
        },
        {
            name: 'card1',
            img: 'images/set1/card1.png',
        },
        {
            name: 'card2',
            img: 'images/set1/card2.png',
        },
        {
            name: 'card2',
            img: 'images/set1/card2.png',
        },
        {
            name: 'card3',
            img: 'images/set1/card3.png',
        },
        {
            name: 'card3',
            img: 'images/set1/card3.png',
        },
        {
            name: 'card4',
            img: 'images/set1/card4.png',
        },
        {
            name: 'card4',
            img: 'images/set1/card4.png',
        },
        {
            name: 'card5',
            img: 'images/set1/card5.png',
        },
        {
            name: 'card5',
            img: 'images/set1/card5.png',
        },
        {
            name: 'card6',
            img: 'images/set1/card6.png',
        },
        {
            name: 'card6',
            img: 'images/set1/card6.png',
        },
        
    ]
    
    // virus level back cards
    const backCardArray = [
        {
            name: 'vir1',
            img: 'images/backset/vir1.png',
        },
        {
            name: 'vir2',
            img: 'images/backset/vir2.png',
        },
        {
            name: 'vir3',
            img: 'images/backset/vir3.png',
        },
        {
            name: 'vir4',
            img: 'images/backset/vir4.png',
        },
        {
            name: 'vir5',
            img: 'images/backset/vir5.png',
        },
        {
            name: 'vir6',
            img: 'images/backset/vir6.png',
        },
        {
            name: 'vir7',
            img: 'images/backset/vir7.png',
        },
        {
            name: 'vir8',
            img: 'images/backset/vir8.png',
        },
        {
            name: 'vir9',
            img: 'images/backset/vir9.png',
        },
        {
            name: 'vir10',
            img: 'images/backset/vir10.png',
        },
        {
            name: 'vir11',
            img: 'images/backset/vir11.png',
        },
        {
            name: 'vir12',
            img: 'images/backset/vir12.png',
        }
    ]

    // code cards
    const codeCardArray = [
        {
            name: '02',
            img: 'images/setcode/02.png',
        },
        {
            name: '02',
            img: 'images/setcode/02.png',
        },
        {
            name: '18',
            img: 'images/setcode/18.png',
        },
        {
            name: '18',
            img: 'images/setcode/18.png',
        },
        {
            name: '22',
            img: 'images/setcode/22.png',
        },
        {
            name: '22',
            img: 'images/setcode/22.png',
        },
        {
            name: '51',
            img: 'images/setcode/51.png',
        },
        {
            name: '51',
            img: 'images/setcode/51.png',
        },
        {
            name: '67',
            img: 'images/setcode/67.png',
        },
        {
            name: '67',
            img: 'images/setcode/67.png',
        },
        {
            name: '98',
            img: 'images/setcode/98.png',
        },
        {
            name: '98',
            img: 'images/setcode/98.png',
        }
    ]

    // level 10 back cards
    const planetCardArray = [
        {
            name: 'planet1',
            img: 'images/level10/planet1.png',
        },
        {
            name: 'planet2',
            img: 'images/level10/planet2.png',
        },
        {
            name: 'planet3',
            img: 'images/level10/planet3.png',
        },
        {
            name: 'planet4',
            img: 'images/level10/planet4.png',
        },
        {
            name: 'planet5',
            img: 'images/level10/planet5.png',
        },
        {
            name: 'planet6',
            img: 'images/level10/planet6.png',
        },
        {
            name: 'planet7',
            img: 'images/level10/planet7.png',
        },
        {
            name: 'planet8',
            img: 'images/level10/planet8.png',
        },
        {
            name: 'planet9',
            img: 'images/level10/planet9.png',
        },
        {
            name: 'planet0',
            img: 'images/level10/planet0.png',
        },
    ]

    // right click disable
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);
    document.addEventListener("dbclick", function(e){
        e.preventDefault();
    }, false);

    // grid
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#score');
    const levelDisplay = document.querySelector('#level');
    const taskDisplay = document.querySelector('#task');
    const timerDisplay = document.querySelector('#timer');
    const timeTag = document.querySelector('#timeTag');
    const codeDisplay = document.querySelector('#code');
    const taskTag = document.querySelector('#taskTag');
    var okButton = document.getElementById('okButton');

    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var specificOrder = [];
    var specificFound = [];
    var score = 0;
    var level = 1;
    
    const click = new Audio('sounds/click.mp3');
    const matchClick = new Audio('sounds/match.mp3');
    timeTag.style.display = 'none';
    codeDisplay.style.display = 'none';

    // timer variables
    var minute = 1;
    var sec = 0;
    var timePoints = 0;
    var x = window.matchMedia('(min-width: 768px)')
    
    // alert boxes
    function customAlert() {
        this.render = function(dialog) {
            var winW = window.innerWidth;
            var winH = window.innerHeight;
            var dialogOverlay = document.getElementById('dialogBoxOverlay');
            var dialogBox = document.getElementById('dialogBox');
            dialogOverlay.style.display = 'block';
            dialogOverlay.style.height = winH+'px';
            dialogBox.style.left = (winW/2) - (350 * 0.5)+'px';
            dialogBox.style.top = (winH/4) +'px';
            dialogBox.style.display = 'block';
            document.getElementById('dialogBoxBody').innerHTML = dialog;
        }
    }

    var Alert = new customAlert();
    
    function alertOff() {
        document.getElementById('dialogBox').style.display = 'none';
        document.getElementById('dialogBoxOverlay').style.display = 'none';
        if (minute == 0 && sec < 0) {
            location.reload();
        }
        if (level === 5 || level === 7 || level === 10) {
            timer();
        }
        if (level === 11) {
            location.reload();
        }
    }

    // draw board
    // LEVEL 1&2
    function createBoard() {
        taskDisplay.innerHTML = "Find the match";
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/set1/back.png');
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 3 WITH VIRUS
    function createBoard3() {
        taskDisplay.innerHTML = "Find the match";
        cardArray.sort(() => 0.5 - Math.random());
        backCardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < backCardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#05ed05';
            card.setAttribute('src', backCardArray[i].img);
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 4
    function createBoard4() {
        taskDisplay.innerHTML = "Find the match";
        cardArray.push(
            {name: 'card7', img: 'images/set1/card7.png'}, {name: 'card7', img: 'images/set1/card7.png'}, {name: 'card8', img: 'images/set1/card8.png'}, {name: 'card8', img: 'images/set1/card8.png'});
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#000';
            card.setAttribute('src', 'images/set1/back.png');
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 5
    function createBoard5() {
        minute = 1;
        sec = 0;
        taskDisplay.innerHTML = "Find the match in time";
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#000';
            card.setAttribute('src', 'images/set1/back.png');
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 6 WITH VIRUS
    function createBoard6() {
        clearInterval(timerFunc);
        // create random order required for level 6
        codeCardArray.forEach(element => {
            while (!specificOrder.includes(element.name)) {
                specificOrder.push(element.name);
            }
        });
        backCardArray.push(
            {name: 'vir13', img: 'images/backset/vir13.png'}, {name: 'vir14', img: 'images/backset/vir14.png'}, {name: 'vir15', img: 'images/backset/vir15.png'}, {name: 'vir16', img: 'images/backset/vir16.png'});
        specificOrder.sort(() => 0.5 - Math.random());
        taskDisplay.innerHTML = "Find the match in order";
        codeDisplay.style.display = 'block';
        timeTag.style.display = 'none';
        codeDisplay.innerHTML = `Code: ${specificOrder.join('-')}`;
        codeCardArray.sort(() => 0.5 - Math.random());
        backCardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < codeCardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#05ed05';
            card.setAttribute('src', backCardArray[i].img);
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCodeCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 7
    function createBoard7() {
        minute = 0;
        sec = 45;
        taskDisplay.innerHTML = "Find the match in time";
        codeDisplay.style.display = 'none';
        timeTag.style.display = 'block';
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#000';
            card.setAttribute('src', 'images/set1/back.png');
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 8
    function createBoard8() {
        clearInterval(timerFunc);
        gridLayoutChange(x);
        taskDisplay.innerHTML = "Find the match";
        timeTag.style.display = 'none';
        cardArray.push(
            {name: 'card9', img: 'images/set1/card9.png'}, {name: 'card9', img: 'images/set1/card9.png'}, {name: 'card10', img: 'images/set1/card10.png'}, {name: 'card10', img: 'images/set1/card10.png'});
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#000';
            card.setAttribute('src', 'images/set1/back.png');
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 9 WITH VIRUS
    function createBoard9() {
        gridLayoutChange(x);
        // create random order required for level 9
        level = 9;
        codeCardArray.push(
            {name: '28', img: 'images/setcode/28.png'}, {name: '28', img: 'images/setcode/28.png'}, {name: '34', img: 'images/setcode/34.png'}, {name: '34', img: 'images/setcode/34.png'}, {name: '76', img: 'images/setcode/76.png'}, {name: '76', img: 'images/setcode/76.png'}, {name: '88', img: 'images/setcode/88.png'}, {name: '88', img: 'images/setcode/88.png'});
        codeCardArray.forEach(element => {
            while (!specificOrder.includes(element.name)) {
                specificOrder.push(element.name);
            }
        });
        backCardArray.push(
            {name: 'vir17', img: 'images/backset/vir17.png'}, {name: 'vir18', img: 'images/backset/vir18.png'}, {name: 'vir19', img: 'images/backset/vir19.png'}, {name: 'vir20', img: 'images/backset/vir20.png'});
        specificOrder.sort(() => 0.5 - Math.random());
        taskTag.style.display = 'none';
        codeDisplay.style.display = 'block';
        codeDisplay.innerHTML = `Code: ${specificOrder.join('-')}`;
        codeCardArray.sort(() => 0.5 - Math.random());
        backCardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < codeCardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#05ed05';
            card.setAttribute('src', backCardArray[i].img);
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCodeCard);
            grid.appendChild(card);
        }
    }

    // LEVEL 10
    function createBoard10() {
        minute = 1;
        sec = 30;
        gridLayoutChange(x);
        taskTag.style.display = 'none';
        codeDisplay.style.display = 'none';
        timeTag.style.display = 'block';
        cardArray.sort(() => 0.5 - Math.random());
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.borderColor = '#000';
            card.setAttribute('src', planetCardArray[Math.floor(Math.random() * planetCardArray.length)].img);
            card.setAttribute('data-id', i);
            card.setAttribute('draggable', 'false');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // media query
    function gridLayoutChange(x) {
        if (x.matches) {
            grid.style.maxWidth = '628px';
        } else {
            grid.style.maxWidth = '428px';
        }
    }

    // timer function for levels 5, 7 & 10
    function timer() {
        if (level === 5 || level === 7 || level === 10) {
            timeTag.style.display = 'block';
            timerFunc = setInterval(function() {
                if (level == 5 || level == 7 || level === 10) {
                    if (sec < 10) {
                        timerDisplay.innerHTML = minute + " : " + "0" + sec;
                    }
                    else{
                        timerDisplay.innerHTML = minute + " : " + sec;
                    }
                    sec--;
                    if (sec < 0 && minute > 0) {
                        minute --;
                        sec = 59;
                    }
                    else if (minute == 0 && sec < 0) {
                        // here dialog box and option to restart the game
                        Alert.render("The time run out and you've lost...");
                        okButton.addEventListener('click', alertOff);
                        timerDisplay.innerHTML = "0 : 00";
                    }
                    timePoints = sec;
                }
            }, 1000);
        }
    }

    // check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // if match found     
        if (cardsChosen[0] === cardsChosen[1]) {
            // only for levels 6 & 9
            if (level === 6 || level === 9) {
                specificFound.unshift(cardsChosen[0]);
                if (specificFound[0] === specificOrder[(specificFound.length - 1)]) {
                    cards[optionOneId].style.pointerEvents = 'none';
                    cards[optionOneId].style.opacity = '0';
                    cards[optionTwoId].style.pointerEvents = 'none';
                    cards[optionTwoId].style.opacity = '0';
                    cardsWon.push(cardsChosen);
                    matchClick.play();
                    score++;
                }else{
                    specificFound.pop();
                    cards[optionOneId].setAttribute('src', backCardArray[Math.floor(Math.random() * backCardArray.length)].img);
                    cards[optionOneId].style.pointerEvents = 'auto';
                    cards[optionTwoId].setAttribute('src', backCardArray[Math.floor(Math.random() * backCardArray.length)].img);
                    cards[optionTwoId].style.pointerEvents = 'auto';
                }
            }else{
                // for all other levels
                cards[optionOneId].style.pointerEvents = 'none';
                cards[optionOneId].style.opacity = '0';
                cards[optionTwoId].style.pointerEvents = 'none';
                cards[optionTwoId].style.opacity = '0';
                cardsWon.push(cardsChosen);
                matchClick.play();
                score++;
            }
        }else{
            // if match not found depending on level is different outcome
            if (level < 3 || level === 5 || level === 8) {
                cards[optionOneId].setAttribute('src', 'images/set1/back.png');
                cards[optionOneId].style.pointerEvents = 'auto';
                cards[optionTwoId].setAttribute('src', 'images/set1/back.png');
                cards[optionTwoId].style.pointerEvents = 'auto';
            }
            else if (level === 3 || level === 6 || level === 9) {
                cards[optionOneId].setAttribute('src', backCardArray[Math.floor(Math.random() * backCardArray.length)].img);
                cards[optionOneId].style.pointerEvents = 'auto';
                cards[optionTwoId].setAttribute('src', backCardArray[Math.floor(Math.random() * backCardArray.length)].img);
                cards[optionTwoId].style.pointerEvents = 'auto';
            }
            else if (level === 4 || level === 7) {
                cards[optionOneId].setAttribute('src', 'images/set1/back.png');
                cards[optionOneId].style.pointerEvents = 'auto';
                cards[optionTwoId].setAttribute('src', 'images/set1/back.png');
                cards[optionTwoId].style.pointerEvents = 'auto';
                score--;
            }
            else if (level === 10) {
                cards[optionOneId].setAttribute('src', planetCardArray[Math.floor(Math.random() * planetCardArray.length)].img);
                cards[optionOneId].style.pointerEvents = 'auto';
                cards[optionTwoId].setAttribute('src', planetCardArray[Math.floor(Math.random() * planetCardArray.length)].img);
                cards[optionTwoId].style.pointerEvents = 'auto';
                score--;
            }
        }
        // reset the cards arrays
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = score;
        if (level < 6 || (level > 6 && level < 9) || level > 9) {
            if (cardsWon.length === cardArray.length/2) {
                grid.innerHTML = '';
                cardsWon = [];
                if (level === 1) {
                    Alert.render("Excellent! You've reached the base but the scan panel is covered in moon dust. Complete next level by <u>matching cards to access the panel</u>.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    createBoard();
                }
                else if (level === 2) {
                    Alert.render("Good job! You can see the panel now but it also has a virus. Complete next level by <u>matching cards</u> to remove the virus.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    createBoard3();
                }
                else if (level === 3) {
                    Alert.render("Fantastic! Now you can scan your palm but be aware, <u>each incorrect move takes away your points</u>. Complete next level by matching cards to open the door.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    createBoard4();
                }
                else if (level === 4) {
                    Alert.render("Excellent! You are now inside the air lock chamber. Complete next level by <u>matching cards before the time runs out</u> to get inside the base. In this level, you can earn <u>extra points for each spare second left</u>.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    createBoard5();
                }
                else if (level === 5) {
                    Alert.render("Splendid! You've managed to get inside the control room but there's one problem, the main computer is locked! Complete next level by <u>matching code cards in specified order</u>.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    score += timePoints;
                    resultDisplay.textContent = score;
                    timerDisplay.innerHTML = "";
                    createBoard6();
                }
                else if (level === 7) {
                    Alert.render("Fantastic! Now you have to wait for the batteries to charge. In the meantime, complete next level by <u>matching code cards</u> to kill the boredom.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    score += timePoints;
                    resultDisplay.textContent = score;
                    timerDisplay.innerHTML = "";
                    createBoard8();
                }
                else if (level === 8) {
                    Alert.render("Excellent! But what is it? Oh no, your main computer has another virus! Complete next level by <u>matching code cards in specified order</u> to unlock the computer and remove the virus.");
                    okButton.addEventListener('click', alertOff);
                    level ++;
                    createBoard9();
                }
                else if (level === 10) {
                    clearInterval(timerFunc);
                    level ++;
                    score += timePoints;
                    resultDisplay.textContent = score;
                    Alert.render(`<b>Congratulations</b>, you've done it! Your spaceship is safely warping back home and your total score is <b>${score}</b>!`);
                    okButton.addEventListener('click', alertOff);
                }
            }
        }
        else if (level === 6) {
            if (cardsWon.length === codeCardArray.length/2) {
                grid.innerHTML = '';
                cardsWon = [];
                Alert.render("Good job! You've discovered that the power is running out. Complete next level by <u>matching code cards before the time runs out</u> to stabilise power supply.");
                okButton.addEventListener('click', alertOff);
                level ++;
                specificFound = [];
                createBoard7();
            }
        }
        else if (level === 9) {
            if (cardsWon.length === codeCardArray.length/2) {
                grid.innerHTML = '';
                cardsWon = [];
                Alert.render("Brilliant! All you have to do now, is to input the coordinates of the planets so that your spaceship can navigate back home.");
                okButton.addEventListener('click', alertOff);
                level ++;
                specificFound = [];
                createBoard10();
            }
        }
        levelDisplay.innerHTML = level;
    }

    // flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        this.style.pointerEvents = 'none';
        click.play();
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch(), 500);
        }
    }
    // flip code card
    function flipCodeCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(codeCardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', codeCardArray[cardId].img);
        this.style.pointerEvents = 'none';
        click.play();
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch(), 500);
        }
    }

    createBoard9();
    Alert.render("Hello astronaut! I'm <b>Alexis</b>, your personal assistant. You won't remember but you have crashed your buggy on the surface of the moon. Find your way back to the base by <u>matching all the cards</u>.");
    okButton.addEventListener('click', alertOff);
})