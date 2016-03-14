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

Card.prototype.reveal = function(){
  this.faceDown = false;
}

Card.prototype.putBack = function(){
  this.faceDown = true;
}

Card.prototype.checkArrayLength = function(){
  if (compareArray.length === 2){
    if (compare(compareArray[0], compareArray[1])){
       $('#card' + compareArray[0].id).fadeOut();
       $('#card' + compareArray[1].id).fadeOut();
      console.log("THEY ARE EQUAL");

      compareArray = [];
    } else {

      console.log("THEY ARE NOOOOOT EQUAL");

      setTimeout(function(){ incorrectGuess();
      }, 2000);






    }
  }
}





//UI LOGIC
$(document).ready(function(){


  $ (function(){
    $('.card').flip();
  });



//need ability to toggle between hide reveal and hide upon click
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


});






  // $("#yes1").click(function() {
  //   $('#card1').fadeOut();
  //   $('#yes1').fadeOut();
  // });
  //
  // $("#yes2").click(function() {
  //   $('#card2').fadeOut();
  //   $('#yes2').fadeOut();
  // });
