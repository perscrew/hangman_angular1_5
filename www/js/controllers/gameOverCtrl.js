export default class GameOverCtrl {

  constructor($rootRouter) {
    this.$rootRouter = $rootRouter;
  }

  $routerOnActivate(next) {
     this.pseudo = next.params.pseudo;
     this.word = next.params.word;
  }
}

GameOverCtrl.$inject = ['$rootRouter'];
