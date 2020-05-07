
//https://repl.it/@juliefield/RPSfunctionsJF


var hands = [ 'rock' , 'paper' , 'scissors'];

function getHand() {
  return hands[parseInt(Math.random()*10)%3];
}
getHand();

var player1 = 
  {
    name: 'Sam',
    hand: getHand()
  }


var player2 = 
  {
    name: 'Jack',
    hand: getHand()
  }


function playRound(player1,player2) {
  var hand1 = player1.hand;
  var hand2 = player2.hand;
  if(hand1==hand2){
        return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nThe result is a tie!";
    }
    if(hand1=="rock"){
        if(hand2=="scissors"){
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 won!";
        }
        else{
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 lost!";
        }
    }
    if(hand1=="paper"){
        if(hand2=="rock"){
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 won!";
        }
        else{
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 lost!";
        }
    }
    if(hand1=="scissors"){
        if(hand2=="rock"){
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 won!";
        }
        else{
            return "Player 1: " + hand1 + "\nPlayer 2: " + hand2 + "\nPlayer 2 lost!";
        }
    }
  console.log(player1);
  console.log(player2);
}

playRound(player1, player2);
