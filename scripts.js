const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


// User will flip card
function flipCard() {
    console.log(this.childNodes)
    this.childNodes[3].classList.toggle('flip');
    this.childNodes[1].classList.toggle("hidden");

    if(!hasFlippedCard) {
        // First Click
    hasFlipped = true;
    firstCard = this;
       // Second Click
   }   else {
    hasFlippedCard = false;
    secondCard = this;
   }
    
   //Cards Match?

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
  
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    resetBoard();
  }
  
  function unflipCards() {
    lockBoard = true;
  
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
  
      resetBoard();
    }, 1500);
  }
  
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
  function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 20);
  })}
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})