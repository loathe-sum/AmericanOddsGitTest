// calcBet function = Calculate odds from two inputs(betAmt,betOdds) and output winnings
function calcBet(a,b) {
  var a = parseInt(document.getElementById('betAmt').value);
  var b = parseInt(document.getElementById('betOdds').value);
  if (b > 0) {
    let c = b / 100;
    let plusOdds = c * a;
    let plusOddsFinal = parseFloat(plusOdds).toFixed(2);
    document.getElementById('betResult').innerHTML = ('To Win: $' + plusOddsFinal);
  } 
  else if (b < 0) {
    let c = b * -1;
    let minusOddsFlip = 100 / c;
    let minusOddsInt = minusOddsFlip * a;
    let minusOddsFinal = parseFloat(minusOddsInt).toFixed(2);
    document.getElementById('betResult').innerHTML = ('To Win: $' + minusOddsFinal);
  }
  else {
    document.getElementById('betResult').innerHTML = ('Plug in numbers dumbass');
  }
}

// code below = how much you win 
calculate.addEventListener("click", calcBet);


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