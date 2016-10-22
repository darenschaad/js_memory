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
  $('#card' + compareArray[0].id).flip('toggle');
  $('#card' + compareArray[1].id).flip('toggle');
  compareArray[0].putBack();
  compareArray[1].putBack();

  compareArray = [];

}

function correctGuess(){
  $('#card' + compareArray[0].id).fadeOut();
  $('#card' + compareArray[1].id).fadeOut();
 console.log("THEY ARE EQUAL");

 compareArray = [];

}



Card.prototype.reveal = function(){
  this.faceDown = false;
}

Card.prototype.putBack = function(){
  this.faceDown = true;
}

Card.prototype.checkArrayLength = function(){
  if (compareArray.length === 2){
    if (compare(compareArray[0], compareArray[1])){
      setTimeout(function(){ correctGuess();
      }, 1000);
    } else {

      console.log("THEY ARE NOOOOOT EQUAL");

      setTimeout(function(){ incorrectGuess();
      }, 1000);

    }
  }
}

//UI LOGIC
$(document).ready(function(){

for ( var i = 0; i < 3 ; i++) {

    $('#append').append('<div class="col-md-4">' + '<div id="card' + shuffledCards[i].id + '" class="card">' +
    '<div class="front alert alert-info">' +
    '</div>' +
    '<div class="back well well-lg">' +
    shuffledCards[i].value +
    '</div>' +
    '</div>' +
    '</div>');
}

for ( var i = 3; i < 6 ; i++) {

    $('#append2').append('<div class="col-md-4">' + '<div id="card' + shuffledCards[i].id + '"class="card">' +
    '<div class="front alert alert-info">' +
    '</div>' +
    '<div class="back well well-lg">' +
    shuffledCards[i].value +
    '</div>' +
    '</div>' +
    '</div>');
}

// for ( var i = 4; i < 6 ; i++) {
//
//     $('#append2').append('<div class="col-md-4">' + '<div id="card' + shuffledCards[i].id + '"class="card">' +
//     '<div class="front alert alert-info">' +
//     '</div>' +
//     '<div class="back well well-lg">' +
//     shuffledCards[i].value +
//     '</div>' +
//     '</div>' +
//     '</div>');
// }

  $ (function(){
    $('.card').flip();
  });

  $('#card1').click(function(){
    card1.reveal();
    compareArray.push(card1);
    card1.checkArrayLength();
  });

  $('#card2').click(function(){
    card2.reveal();
    compareArray.push(card2);
    card2.checkArrayLength();
  });

  $('#card3').click(function(){
    card3.reveal();
    compareArray.push(card3);
    card3.checkArrayLength();
  });

  $('#card4').click(function(){
    card4.reveal();
    compareArray.push(card4);
    card4.checkArrayLength();
  });

  $('#card5').click(function(){
    card5.reveal();
    compareArray.push(card5);
    card5.checkArrayLength();
  });

  $('#card6').click(function(){
    card6.reveal();
    compareArray.push(card6);
    card6.checkArrayLength();
  });
});
