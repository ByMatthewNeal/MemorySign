const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
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

    //Cards Match?
}


    console.log({hasFlippedCard, firstCard});
}

cards.forEach(card => card.addEventListener('click', flipCard));