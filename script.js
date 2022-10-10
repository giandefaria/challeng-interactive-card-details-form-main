const fieldsToDuplicate = document.getElementsByClassName ('duplicate');
for (var i = 0; i < fieldsToDuplicate.length; i++) {
    fieldsToDuplicate[i].addEventListener('keydown', function (e) {
        const t = e.target
        document.getElementById(`duplicate${t.id.charAt(0).toUpperCase()}${t.id.slice(1)}`).value = t.value;

        console.log(e);
        console.log(t);
    });
    
    
}

//function for a space every four chars



const fieldToSpace = document.getElementById('cardNumber');
fieldToSpace.addEventListener('keypress', () => {
    var index = fieldToSpace.value.lastIndexOf(' ');
    var test = fieldToSpace.value.substr(index + 1);
    if (test.length === 4 && fieldToSpace.value.length < 16)
         fieldToSpace.value = fieldToSpace.value + ' ';

})

/*

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



// card month duplicate

let cardMonth = document.getElementById("cardMonth");
let duplicateCardMonth = document.getElementById("duplicateCardMonth");
let cardYear = document.getElementById("cardYear");
let duplicateCardYear = document.getElementById("duplicateCardYear");

cardMonth.addEventListener, cardYear.addEventListener('keyup',() => {
    duplicateCardMonth.value = cardMonth.value + "/" + cardYear.value; 
})

let cardCvc = document.getElementById("cardCvc");
let duplicateCardCvc = document.getElementById("duplicateCardCvc");

cardCvc.addEventListener('keyup',() => {
    duplicateCardCvc.value = cardCvc.value;
});

*/

//error scripts

function containsAnyLetters(string) {
   return /[a-zA-Z]/.test(string);
   //regExp
}
function containsAnyNumbers(string) {
    return /[0-9]/.test(string);
}

function containsEmpty(string) {
    return /[\S]/.test(string);
}

function valideForm() {
    
    if ( (validateCardHolder () ||
     validateCardNumber () || validateCardMonth() || validateCardYear() || validateCardCvc() ) == 1) {
        return false;
     } else {
     return true;
     }
}


function validateCardHolder () {
    let cardHolder = document.getElementById("cardHolder").value;
    let error = document.getElementById("error1");

    if (containsAnyNumbers(cardHolder)) {
        error.textContent = "Wrong format, letters only";
        document.getElementById("cardHolder").style.borderColor = "hsl(0, 100%, 66%)";
        return 1;

    } else {
        error.textContent = "";
        document.getElementById("cardHolder").style.borderColor = "hsl(270, 3%, 87%)";
      }
}

function validateCardNumber () {
    let cardNumberValue = document.getElementById("cardNumber").value;
    let error = document.getElementById("error2");

    if (containsAnyLetters(cardNumberValue) || cardNumberValue.length < 19) {
        error.textContent ="Wrong format! Numbers only and 16 numbers";
        document.getElementById("cardNumber").style.borderColor = "hsl(0, 100%, 66%)";
        return 1;
                
    } else {
        error.textContent =""
        document.getElementById("cardNumber").style.borderColor = "hsl(270, 3%, 87%)";
      }
}


function validateCardMonth () {
    let cardMonth = document.getElementById("cardMonth").value;
    let error = document.getElementById("error3");

    if(containsEmpty(cardMonth)) {
        error.textContent ="";
        document.getElementById("cardMonth").style.borderColor = "hsl(270, 3%, 87%)";
        
    } else {
        error.textContent = "Can't be blank";
        document.getElementById("cardMonth").style.borderColor = "hsl(0, 100%, 66%)";
        return 1;
    }
}

function validateCardYear () {
    let cardYear = document.getElementById("cardYear").value;
    let error = document.getElementById("error3");

    if(containsEmpty(cardYear)) {
        error.textContent ="";
        document.getElementById("cardYear").style.borderColor = "hsl(270, 3%, 87%)";
        
    } else {
        error.textContent = "Can't be blank";
        document.getElementById("cardYear").style.borderColor = "hsl(0, 100%, 66%)";
        return 1;
    }
}

function validateCardCvc () {
    let cardCvc = document.getElementById("cardCvc").value;
    let error = document.getElementById("error4");

    if(containsEmpty(cardCvc)) {
        error.textContent ="";
        document.getElementById("cardCvc").style.borderColor = "hsl(270, 3%, 87%)";
        
    } else {
        error.textContent = "Can't be blank";
        document.getElementById("cardCvc").style.borderColor = "hsl(0, 100%, 66%)";
        return 1;
    }
}

function finished () {

    if (valideForm() == true){
    document.getElementById("creditCardBox").style.display = "none";
    document.getElementById("complete").style.display = "block";
    } 
     
}

function back () {
    document.getElementById("complete").style.display = "none";
    document.getElementById("creditCardBox").style.display = "block";
}