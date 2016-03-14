function Card(id, value){
  this.id = id;
  this.value = value;
  this.faceDown = true;
};

var card1 = new Card(1, "apple");
var card2 = new Card(2, "apple");
var card3 = new Card(3, "pear");
var card4 = new Card(4, "pear");


function compare(firstCard, secondCard){
  if (firstCard.value === secondCard.value && firstCard.faceDown === false && secondCard.faceDown === false) {
    return true
  } else {
    return false;
  }
}

Card.prototype.reveal = function(){
  this.faceDown = false;
}

Card.prototype.hide = function(){
  this.faceDown = true;
}
