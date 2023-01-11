function calcBet(a,b) {
  var a = parseInt(document.getElementById('betAmt').value);
  var b = parseInt(document.getElementById('betOdds').value);
  if (b > 0) {
    let poop = b / 100;
    let poop0 = poop * a;
    let poopAlert = parseFloat(poop0).toFixed(2);
    document.getElementById('chokeMe').innerHTML = ('To Win: $' + poopAlert);
  } 
  else if (b < 0) {
    let pee = b * -1;
    let urine = 100 / pee;
    let urine0 = urine * a;
    let peeAlert = parseFloat(urine0).toFixed(2);
    document.getElementById('chokeMe').innerHTML = ('To Win: $' + peeAlert);
  }
  else {
    document.getElementById('chokeMe').innerHTML = ('Plug in numbers dumbass');
  }
}

// code below = how much you win 
fuckMe.addEventListener("click", calcBet);


// need function to take form inputs and perform math
/*var betOdds = 
if (betOdds < 0 ) {
var invert = betOdds * -1;
var minusQuotient = 100 / invert;
var betProfit = betAmt * minusQuotient;
console.log(betProfit);

else {
  var posOdds = (betOdds/100) * betAmt;
  console.log(posOdds);
}

*/