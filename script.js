// card holder duplicate
let cardHolder = document.getElementById("cardHolder");
let duplicateCardHolder = document.getElementById("duplicateCardHolder");

cardHolder.addEventListener('keyup',() => {
    duplicateCardHolder.value = cardHolder.value;
});

// card number duplicate

let cardNumber = document.getElementById("cardNumber");
let duplicateCardNumber = document.getElementById("duplicateCardNumber");

cardNumber.addEventListener('keyup',() => {
    duplicateCardNumber.value = cardNumber.value;
});

// card month duplicate

let cardMonth = document.getElementById("cardMonth");
let duplicateCardMonth = document.getElementById("duplicateCardMonth");

cardMonth.addEventListener('keyup',() => {
    duplicateCardMonth.value = cardMonth.value;
});

// card year duplicate

let cardYear = document.getElementById("cardYear");
let duplicateCardYear = document.getElementById("duplicateCardYear");

cardYear.addEventListener('keyup',() => {
    duplicateCardYear.value = cardYear.value;
});

// card CVC duplicate

let cardCvc = document.getElementById("cardCvc");
let duplicateCardCvc = document.getElementById("duplicateCardCvc");

cardCvc.addEventListener('keyup',() => {
    duplicateCardCvc.value = cardCvc.value;
});