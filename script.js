let getRandomNumebr = () => {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum === 1)
    {
        return 11;
    }

    if(randomNum > 10)
    {
        return 10;
    }   

    return randomNum;
}

let player = {
    name: "Rohan Kundu",
    chips: 100,
}

let firstCard = getRandomNumebr();
let secondCard = getRandomNumebr();
let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let isAlive = false;
let isStartGame = false;
let cards =[]
let playerEl = document.getElementById("player-el")
let message="";


function renderPlayer()
{
    playerEl.textContent = `${player.name}: ₹${player.chips}`
}

renderPlayer()


function startGame()
{
    isAlive = true;
    isStartGame = true;
    firstCard = getRandomNumebr();
    secondCard = getRandomNumebr();
    cards.push(firstCard);
    cards.push(secondCard);
    document.getElementById("start-game-btn").disabled=true;
    player.chips -= 10;
    renderGame();
}
function renderGame()
{
    renderPlayer()
    sumEl.textContent="Sum: "+sum
    cardEl.textContent=`Cards: ${cards.toString()}`
    if(sum <= 20)
    {
        message="Do you want to draw a new card? 🙂"
       
    }
    else if(sum === 21)
    {
        message="Wohoo! You've got Blackjack! 🥳"
        reset();
    }
    else
    {
        message="You're out of the game! 😭"
        isAlive=false;
        document.getElementById("new-card-btn").disabled=true;
        reset();
    }
    messageEl.textContent=message
    

    if (player.chips <= 0) {
        message = "You have no more chips left! Game over. 😢";
        isAlive = false;
        document.getElementById("new-card-btn").disabled = true;
        document.getElementById("start-game-btn").disabled = true;
        messageEl.textContent = message;
        reset();
        return;
    }
    player.chips -= 10;
}


function newCard()
{
    if(isAlive)
    { 
        // 1. Create a card variable, and hard code its value to a number (2-11)
        let newCard = getRandomNumebr();
        cards.push(newCard);
        cardEl.textContent=`Cards: ${cards.toString()}`;
        // 2. Add the new card to the sum variable
        sum += newCard;
        // 3. Call startGame()
        renderGame();
    }
}


function reset()
{
    setTimeout(() => {
        location.reload();
    }, 3000);
}