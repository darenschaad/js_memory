//BUSINESS LOGIC
function Card(id, value){
  this.id = id;
  this.value = value;
  this.faceDown = true;
};
var card1 = new Card(1, "apple");
var card2 = new Card(2, "apple");
var card3 = new Card(3, "pear");
var card4 = new Card(4, "pear");
var card5 = new Card(5, "cherry");
var card6 = new Card(6, "cherry");

var cards = [card1, card2, card3, card4, card5, card6];

var clickable = true;

function shuffleArray(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

var shuffledCards = shuffleArray(cards);

var compareArray = [];

function compare(firstCard, secondCard){
  if (firstCard.value === secondCard.value && firstCard.faceDown === false && secondCard.faceDown === false && firstCard.id !== secondCard.id) {
    return true
  } else {
    return false;
  }
}

function incorrectGuess(){
  $('#' + compareArray[0].id).flip('toggle');
  $('#' + compareArray[1].id).flip('toggle');
  compareArray[0].putBack();
  compareArray[1].putBack();

  compareArray = [];
  clickable = true;

}

function correctGuess(){
  $('#' + compareArray[0].id).fadeOut();
  $('#' + compareArray[1].id).fadeOut();
 console.log("THEY ARE EQUAL");

 compareArray = [];
 clickable = true;

}

Card.prototype.reveal = function(){
  this.faceDown = false;
}

Card.prototype.putBack = function(){
  this.faceDown = true;
}

Card.prototype.checkArrayLength = function(){
  if (compareArray.length === 1) {

  }
  if (compareArray.length === 2){
    clickable = false;
    if (compare(compareArray[0], compareArray[1])){
      setTimeout(function(){ correctGuess();
      }, 1200);

    } else {

      setTimeout(function(){ incorrectGuess();

      }, 1200);
    }
  }
}

Card.prototype.onCardClick = function(htmlCard){
  if (this.faceDown) {
    htmlCard.flip("toggle");
    this.reveal();
    compareArray.push(this);
    console.log(compareArray);
    this.checkArrayLength();
  }
}
//UI LOGIC
$(document).ready(function(){

for ( var i = 0; i < 3 ; i++) {
    $('#append').append('<div class="col-md-4">' + '<div id=' + shuffledCards[i].id + ' class="card">' +
    '<div class="front alert alert-info">' +
    '</div>' +
    '<div class="back well well-lg">' +
    shuffledCards[i].value +
    '</div>' +
    '</div>' +
    '</div>');
}

for ( var i = 3; i < 6 ; i++) {
    $('#append2').append('<div class="col-md-4">' + '<div id=' + shuffledCards[i].id + ' class="card">' +
    '<div class="front alert alert-info">' +
    '</div>' +
    '<div class="back well well-lg">' +
    shuffledCards[i].value +
    '</div>' +
    '</div>' +
    '</div>');
}
$('.card').flip({
  trigger: "manual"
});

function flipFunction(htmlCard) {
  if (clickable) {
    var id = parseInt(htmlCard.attr('id'));
    console.log(id);

    for (var i = 0; i < shuffledCards.length; i++) {
      if (shuffledCards[i].id === id) {

        shuffledCards[i].onCardClick(htmlCard);
      }
    }
  }

}

  $('#1').click(function(){
    flipFunction($(this));
  });

  $('#2').click(function(){
    flipFunction($(this));
  });

  $('#3').click(function(){
    flipFunction($(this));
  });

  $('#4').click(function(){
    flipFunction($(this));
  });

  $('#5').click(function(){
    flipFunction($(this));
  });

  $('#6').click(function(){
    flipFunction($(this));

  });
});
