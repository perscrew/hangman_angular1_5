export default class GameFinishCtrl {
  
  constructor($rootRouter) {
    this.$rootRouter = $rootRouter;
  }

  $routerOnActivate(next) {
     this.pseudo = next.params.pseudo;
     this.word = next.params.word;
  }
}

GameFinishCtrl.$inject = ['$rootRouter'];
