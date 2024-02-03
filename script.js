const billInput = document.getElementById("Bill");
const customTipInput = document.querySelector("custom");
const tipInputs = Array.from(document.getElementsByClassName("button"));
const zeroMessage = document.getElementById("zeroMessage");
const numPeopleInput = document.getElementById("num-people");
const resultTip = document.getElementById("tip-person");
const resultTotal = document.getElementById("total-person");
const resetButton = document.getElementsByClassName("reset")[0];
const numberPeopleInput = document.getElementsByClassName("number-people");



let tipValue =0;
let billValue = 0;
let peopleValue = 0;

billInput.addEventListener("input",(event) => {
    billValue = Number(event.target.value);
    calculation();
    
});


document.addEventListener('DOMContentLoaded', function() {
    const customTipInput = document.querySelector('.custom');
    customTipInput.addEventListener("input", (event) => {
        tipValue = parseInt(event.target.value);
        calculation();
    });
});

tipInputs.forEach((button) => {
    button.addEventListener("click", (event) => {
        tipValue = parseInt(event.target.innerText);
        calculation();
    });
});


numPeopleInput.addEventListener("input",(event) => {
    peopleValue = Number(event.target.value);
    calculation();
    if(peopleValue === 0){
        numPeopleInput.style.border = "2px solid #E17052";
        zeroMessage.style.display = 'block';
    } else {
        numPeopleInput.style.border = '';
        zeroMessage.style.display = 'none';
    }
});

function calculation(){
    if(peopleValue != 0) {
    let tipResultValue = (billValue * (tipValue /100)) / peopleValue;
    let totalValue = (billValue / peopleValue) + tipResultValue ;

    resultTip.innerText = `$${tipResultValue.toFixed(2)}`;
    resultTotal.innerText = `$${totalValue.toFixed(2)}`;
    } else {
        resultTip.innerText = "$0.00";
        resultTotal.innerText = "$0.00";
    }
}

resetButton.addEventListener("click",() => {
    billValue = 0;
    tipValue = 0;
    peopleValue = 0 ;
    resultTip.innerText = "$0.00";
    resultTotal.innerText = "$0.00";
    billInput.value = "";
    numPeopleInput.value= "";

});




