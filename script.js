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

//cardNumber.value

//function for a space every four chars
function formatCreditCard() {
    var x = document.getElementById("cardNumber");
    var index = x.value.lastIndexOf(' ');
    var test = x.value.substr(index + 1);
    if (test.length === 4 && x.value.length < 16)
         x.value = x.value + ' ';
}

// card month duplicate

let cardMonth = document.getElementById("cardMonth");
let duplicateCardMonth = document.getElementById("duplicateCardMonth");
let cardYear = document.getElementById("cardYear");
let duplicateCardYear = document.getElementById("duplicateCardYear");

cardMonth.addEventListener, cardYear.addEventListener('keyup',() => {
    duplicateCardMonth.value = cardMonth.value + "/" + cardYear.value; 
})


// card year duplicate

/*let cardYear = document.getElementById("cardYear");
let duplicateCardYear = document.getElementById("duplicateCardYear");

cardYear.addEventListener('keyup',() => {
    duplicateCardYear.value = "/" + cardYear.value;
});*/

// card CVC duplicate

let cardCvc = document.getElementById("cardCvc");
let duplicateCardCvc = document.getElementById("duplicateCardCvc");

cardCvc.addEventListener('keyup',() => {
    duplicateCardCvc.value = cardCvc.value;
});