var hands = [ 'rock' , 'paper' , 'scissors'];

function getHand() {
  return hands[parseInt(Math.random()*10)%3];
}
getHand();
//https://repl.it/@juliefield/RPSfunctionsJF

var player1 = [ 
  {
    name: 'Sam',
    hand: getHand()
  }
];

var player2 = [ 
  {
    name: 'Jack',
    hand: getHand()
  }
];

function playRound(player1,player2) {
  var hand1 = player1;
  var hand2 = player2;
  if (hand1 === hand2) {
    console.log('its a tie')
  }
  console.log(player1);
  console.log(player2);
}

playRound();

