const btnPrevious = document.getElementById("btn-previous");
const btnNext = document.getElementById("btn-next");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function hideSelectedCard() {
    const selectedCard = document.querySelector(".selected");

    selectedCard.classList.remove("selected");
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add("selected");
}

btnNext.addEventListener("click", function () {
    if (currentCard === cards.length - 1) {
        currentCard = -1;
    }

    hideSelectedCard();

    currentCard++;

    showCard(currentCard);
});

btnPrevious.addEventListener("click", function () {

    if (currentCard === 0) {
        currentCard = cards.length;
    }

    hideSelectedCard();

    currentCard--;

    showCard(currentCard);
});