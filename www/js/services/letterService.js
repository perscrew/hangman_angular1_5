export class LetterService {
  generateWord() {
    //TODO call a remote rest service to generate a random word
    let listWord = ['cacao', 'chocolat', 'pendu', 'generalite', 'codage'];
    // return a random word
    return listWord[Math.floor((Math.random() * listWord.length-1) + 1)];
  }

  static letterFactory(){
    return new LetterService();
  }
}
