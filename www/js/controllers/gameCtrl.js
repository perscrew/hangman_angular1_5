export default class GameCtrl {

  constructor($rootRouter) {
    this.$rootRouter = $rootRouter;
    this.word = "cacao";
    this.chances = 6;
    this.letters = [];
  }

  $routerOnActivate(next) {
     this.pseudo = next.params.pseudo;
  }

  getWordToFind() {

  }

  isWordFound() {
    //TODO
    return false;
  }

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

  findLetter(form) {
    if (form.$valid) {
      if (this.word.indexOf(this.letter.toLowerCase()) > -1) {
        this.letters.push(this.letter.toLowerCase());
      } else {
        // decriment chances
        this.chances--;
      }
      this.letter = "";

      //check if it's game over or win
      if (this.chances == 0) {
        this.gameOver();
      } else if (this.isWordFound()) {
        this.playerWin();
      }
    } else {
      form.submited = true;
    }
  }

  playerWin() {
    //TODO
  }

  gameOver() {
    this.$rootRouter.navigate(['GameOver', {pseudo: this.pseudo, word: this.word}]);
  }
}

GameCtrl.$inject = ['$rootRouter'];
