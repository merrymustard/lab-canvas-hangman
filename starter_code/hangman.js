/*jshint esversion: 6 */


let hangman;

class Hangman {
  constructor() {
    this.words = ["javascript", "unicorn", "cupcake", "lollipop"];
    this.secretWord= "";
    this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];

    this.guessedLetter = []; //= randWord.length;
    this.errorsLeft = 10;
  }

  getWord(){
     let randWord = this.words[Math.floor(Math.random() * this.words.length)];
     return randWord;
   }

   checkIfLetter(keyCode) {

   }

   checkClickedLetters(key) {

   }

   addCorrectLetter(i) {

   }

   addWrongLetter(letter) {

   }

   checkGameOver() {

   }

   checkWinner() {

   }

 }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
