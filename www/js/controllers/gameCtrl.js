export default class GameCtrl {

  constructor($rootRouter, letterService) {
    this.$rootRouter = $rootRouter;
    this.letterService = letterService;
    this.word = this.getWordToFind();
    this.chances = 6;
    this.letters = [];
  }

  $routerOnActivate(next) {
     this.pseudo = next.params.pseudo;
  }

  getWordToFind() {
    return this.letterService.generateWord();
  }

  // Method to check if the word has been found
  isWordFound() {
    let nbLetterFound = 0;
    let uniqueLetters = this.letters.filter((item, pos) => {
      return this.letters.indexOf(item) == pos;
    });
    uniqueLetters.forEach((letter) => {
      if (this.word.indexOf(letter) > -1)
        nbLetterFound++;
    });
    return nbLetterFound == this.getUniqueLetterNumber();
  }

  getUniqueLetterNumber() {
    let wordArray = [];
    for(var chr of this.word) {
      wordArray.push(chr);
    }
    let uniqueLetters = wordArray.filter((item, pos) => {
      return wordArray.indexOf(item) == pos;
    });
    return uniqueLetters.length;
  }

  // Display hidden word
  getHiddenWord() {
    let hiddenWord = "";
    for(var chr of this.word) {
      if (this.letters.includes(chr)) {
        hiddenWord += chr.toUpperCase();
      } else {
        hiddenWord += '_';
      }
    }
    return hiddenWord;
  }

  // Method to submit a letter
  findLetter(form) {
    if (form.$valid) {
      if (this.word.indexOf(this.letter.toLowerCase()) > -1) {
        this.letters.push(this.letter.toLowerCase());
      } else {
        // decrement chances
        this.chances--;
      }
      this.letter = "";

      //check if it's game over or win
      if (!this.chances) {
        this.gameOver();
      } else if (this.isWordFound()) {
        this.playerWin();
      }
    } else {
      form.submited = true;
    }
  }

  playerWin() {
    this.$rootRouter.navigate(['GameWon', {pseudo: this.pseudo, word: this.word}]);
  }

  gameOver() {
    this.$rootRouter.navigate(['GameOver', {pseudo: this.pseudo, word: this.word}]);
  }
}

GameCtrl.$inject = ['$rootRouter', 'letterService'];
