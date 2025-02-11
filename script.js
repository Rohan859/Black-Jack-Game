let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")


let cards =[firstCard,secondCard]

let message="";
function startGame()
{
    renderGame();
}
function renderGame()
{
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
        document.getElementById("new-card-btn").disabled=true;
        reset();
    }
    messageEl.textContent=message
}


function newCard()
{
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let newCard = Math.floor(Math.random() * 10) + 2;
    cards.push(newCard);
    cardEl.textContent=`Cards: ${cards.toString()}`;
    // 2. Add the new card to the sum variable
    sum += newCard;
    // 3. Call startGame()
    renderGame();
}


function reset()
{
    setTimeout(() => {
        location.reload();
    }, 3000);
}