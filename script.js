var question = 0
const questions = [
    "1. Red or Black?",
    "2. Higher or lower?",
     "3. Inside or outside?",
     "4. Guess the suit"
]
const drawnCards = []
document.querySelector(".bet").textContent = document.querySelector(".slider").value
var usersBalance = document.querySelector(".balance").textContent
initGame()
function initGame() {
    drawCard()
    document.querySelector(".slider").max = document.querySelector(".balance").textContent
    updateMultiplier();
}

function drawCard() {
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let suits = ["hearts", "diamonds", "clubs", "spades"]
    
    let card = document.querySelector(".cardFront")
    let value = values[Math.floor(Math.random()*values.length)]
    let suit = suits[Math.floor(Math.random()*suits.length)]
    document.querySelector(".question").textContent = questions[question]

    document.querySelectorAll(".value").forEach(element => {
        element.textContent = value
    })

    if(suit === "hearts" || suit === "diamonds")
        card.dataset.cardColor = "red"
    else 
        card.dataset.cardColor = "black"
    
    let suitElement = document.querySelector(".suits")
    suitElement.setAttribute("data-suit", suit)
    suitElement.textContent = ""

    drawnCards.push({
        value: value,
        suit: suit,
        valueIndex: values.indexOf(value),
    })
}

function animateBalanceChange(amount) {
    const balanceElement = document.querySelector(".balance")
    const rect = balanceElement.getBoundingClientRect()
    
    const changeText = document.createElement("div")
    changeText.className = `moneyChangeText ${amount < 0 ? 'moneyLoss' : 'moneyGain'}`
    changeText.textContent = `${amount > 0 ? '+' : ''}${amount}$`
    
    changeText.style.left = `${rect.left + rect.width / 2}px`
    changeText.style.top = `${rect.top + rect.height / 2}px`
    
    document.body.appendChild(changeText)
    
    balanceElement.classList.add('updated')
    setTimeout(() => balanceElement.classList.remove('updated'), 500)
    
    setTimeout(() => {
        document.body.removeChild(changeText)
    }, 1500)
}

function checkAnswer(bttn) {
    let card = document.querySelector(".cardFront")
    let cardColor = card.dataset.cardColor
    let buttonColor = bttn.textContent.toLowerCase()
    let currentCard = drawnCards[drawnCards.length - 1]

    switch(question) {
        case 0:
            return cardColor == buttonColor ? false : true
        case 1:
            let prevCard = drawnCards[drawnCards.length - 2]
            if (bttn.textContent == "Higher")
                return currentCard.valueIndex > prevCard.valueIndex ? false : true
            else 
                return currentCard.valueIndex <= prevCard.valueIndex ? false : true
        case 2:
            let prevCardValue = drawnCards[drawnCards.length - 2].valueIndex
            let firstCardValue = drawnCards[0].valueIndex
            if (bttn.textContent == "Inside") {
                let min = Math.min(prevCardValue, firstCardValue)
                let max = Math.max(prevCardValue, firstCardValue)
                return currentCard.valueIndex >= min && currentCard.valueIndex <= max ? false : true
            } 
            else {
                let min = Math.min(prevCardValue, firstCardValue)
                let max = Math.max(prevCardValue, firstCardValue)
                return currentCard.valueIndex < min || currentCard.valueIndex > max ? false : true
            }
        case 3:
            let suit = drawnCards[drawnCards.length - 1].suit
            return suit == bttn.textContent.toLowerCase() ? false : true
    }
}

function resetGame() {
    question = 0;
    drawnCards.length = 0;
    document.querySelector(".card").classList.remove("flipped")
    document.querySelector(".cardFront").style.backgroundColor = "white"
    document.querySelector(".suits").textContent = ""
    document.querySelector(".slider").disabled = false
    document.querySelector(".slider").value = 0
    document.querySelector(".slider").max = document.querySelector(".balance").textContent

    document.querySelector(".bet").textContent = document.querySelector(".slider").value

    document.querySelectorAll(".value").forEach(element => {
        element.textContent = ""
    })
    document.querySelector(".cardHistory").innerHTML = ""

    document.querySelector(".question").textContent = questions[question]
    resetButtons()
    updateMultiplier();
    setTimeout(() => {
        initGame()
    }, 400)
}

function resetButtons() {
    let buttonsContainer = document.querySelector(".buttons")
    buttonsContainer.innerHTML = ""
    let redButton = document.createElement("button")
    redButton.textContent = "red"
    redButton.className = "red"
    buttonsContainer.appendChild(redButton)
    
    let blackButton = document.createElement("button")
    blackButton.textContent = "black"
    blackButton.className = "black"
    buttonsContainer.appendChild(blackButton)
}

function updateMultiplier() {
    const multiplierElement = document.querySelector(".multiplierValue");
    const multiplierContainer = document.querySelector(".multiplierIndicator");
    
    if (question === 0) {
        multiplierContainer.style.opacity = "0";
        multiplierElement.textContent = "x0";
    } else {
        multiplierContainer.style.opacity = "1";
        multiplierElement.textContent = `x${question + 1}`;
    }
}

function prepareNextStep() {
    let suit = drawnCards[drawnCards.length - 1].suit;
    let value = drawnCards[drawnCards.length - 1].value;
    animateCardToHistory(value, suit);
    question++;
    updateMultiplier();
    
    switch(question) {
        case 1:
            document.querySelector(".question").textContent = questions[question]
            document.querySelector(".red").textContent = "Higher"
            document.querySelector(".black").textContent = "Lower"
            break
        case 2:
            document.querySelector(".question").textContent = questions[question]
            document.querySelector(".red").textContent = "Inside"
            document.querySelector(".black").textContent = "Outside"
            break
        case 3:
            document.querySelector(".question").textContent = questions[question]
            let buttonsContainer = document.querySelector(".buttons")
            buttonsContainer.innerHTML = ""
            
            let suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
            suits.forEach(suit => {
                let button = document.createElement("button")
                button.textContent = suit
                button.className = suit.toLowerCase() === "hearts" || suit.toLowerCase() === "diamonds" ? "red" : "black"
                buttonsContainer.appendChild(button)
            });
            break
    }
    if(question < questions.length) {
        const cardContainer = document.querySelector(".cardContainer")
        const oldCard = document.querySelector(".card")
        const newCard = oldCard.cloneNode(true)
        cardContainer.replaceChild(newCard, oldCard)
        setTimeout(() => {
            drawCard()
        }, 400)
    }
    else if(question == questions.length) {
        let bet = parseInt(document.querySelector(".slider").value)
        let usersAccount = parseInt(document.querySelector(".balance").textContent)
        let winnings = bet * 10
        usersAccount = parseInt(usersAccount) + winnings
        document.querySelector(".balance").textContent = usersAccount
        animateBalanceChange(winnings)
        showPopup(true)
        setTimeout(() => {
            resetGame()
        }, 2000)
    }
}

function showPopup(isWinner) {
    let popup = document.querySelector(".popup")
    let popupTitle = document.querySelector(".popupTitle")
    let popupText = document.querySelector(".popupText")
    let bet = document.querySelector(".slider").value
    let usersBalance = document.querySelector(".balance").textContent

    const cardContainer = document.querySelector(".cardContainer")
    const oldCard = document.querySelector(".card")
    const newCard = oldCard.cloneNode(true)
    cardContainer.replaceChild(newCard, oldCard)
    
    if (isWinner) {
        popupTitle.textContent = "Congratulations!"
        popupText.textContent = `You won ${usersBalance - bet}$!`
        popupText.style.color = "green"
    } 
    else {
        popupTitle.textContent = "You lost!"
        popupText.textContent = "You lost " + bet + "$."
        popupText.style.color = "red"
    }
    
    popup.style.display = "block"
    document.querySelector(".closePopup").addEventListener("click", closePopup)
}

function closePopup() {
    document.querySelector(".popup").style.display = "none"
    resetGame()
}

function addToHistory(value, suit) {
    let historyContainer = document.querySelector(".cardHistory")
    let historyCard = document.createElement("div")
    historyCard.className = "historyCard"
    let color = (suit === "hearts" || suit === "diamonds") ? "red" : "black"
    historyCard.dataset.color = color

    let cardValue = document.createElement("div")
    cardValue.className = "historyCardValue"
    cardValue.textContent = value
    historyCard.appendChild(cardValue)

    let cardSuit = document.createElement("div")
    cardSuit.className = "historyCardSuit"
    if (suit === "hearts") cardSuit.textContent = "♥"
    else if (suit === "diamonds") cardSuit.textContent = "♦"
    else if (suit === "spades") cardSuit.textContent = "♠"
    else if (suit === "clubs") cardSuit.textContent = "♣"
    historyCard.appendChild(cardSuit)

    historyContainer.appendChild(historyCard)
}

function animateCardToHistory(value, suit) {
    const cardClone = document.createElement('div')
    cardClone.className = 'cardToHistory'
    
    const randomRotation = Math.random() * 6 - 3
    cardClone.style.setProperty('--random-rotation', `${randomRotation}deg`)
    
    const suitElement = document.createElement('div')
    suitElement.className = 'suits'
    suitElement.setAttribute('data-suit', suit)
    
    let valueElement = document.createElement('div')
    valueElement.className = 'value'
    valueElement.style.position = 'absolute'
    valueElement.style.top = '10px'
    valueElement.style.left = '10px'
    valueElement.textContent = value
    
    cardClone.appendChild(suitElement)
    cardClone.appendChild(valueElement)
    document.body.appendChild(cardClone)
    
    setTimeout(() => {
        document.body.removeChild(cardClone)
        addToHistory(value, suit)
    }, 750)
}

function noMoneyAlert() {
    let text = document.querySelector(".question")
    text.textContent = "no money!"
    text.style.color = "red"
    text.style.letterSpacing = "2.5px"
    text.style.textTransform = "uppercase"
    setTimeout(() => {
        text.textContent = questions[question]
        text.style.color = "white"
        text.style.letterSpacing = "normal"
        text.style.textTransform = "none"
    }, 1000)
}

document.querySelector(".buttons").addEventListener("click", (event) => {
    let usersAccount = parseInt(document.querySelector(".balance").textContent)
    if (event.target.tagName === "BUTTON") {
        if(usersAccount == 0) { noMoneyAlert() }
        else {
            if(question == 0) {
                let slider = document.querySelector(".slider")
                let bet = parseInt(slider.value)
                usersAccount -= bet
                document.querySelector(".balance").textContent = usersAccount
                animateBalanceChange(-bet)
                slider.disabled = true
            }
            document.querySelector(".card").classList.add("flipped")
            setTimeout(() => {
                document.querySelector(".card").classList.remove("flipped")

            if(checkAnswer(event.target))
                showPopup(false)
            else
                prepareNextStep()
            }, 2000)
    }
    }
})

document.querySelector(".slider").addEventListener("input", () => {
    document.querySelector(".bet").textContent = document.querySelector(".slider").value
})

document.querySelector(".forfeit").addEventListener("click", () => {
   if(question > 0) {
        let bet = parseInt(document.querySelector(".slider").value)
        let gain = bet * (question + 1)
        let usersAccount = parseInt(document.querySelector(".balance").textContent)
        usersAccount = parseInt(usersAccount) + gain
        document.querySelector(".balance").textContent = usersAccount
        animateBalanceChange(gain)
        resetGame()
   }
})