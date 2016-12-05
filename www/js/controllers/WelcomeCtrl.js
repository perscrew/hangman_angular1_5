export default class WelcomeCtrl {

  constructor($rootRouter) {
    this.$rootRouter = $rootRouter;
  }

  play(form) {
    if (form.$valid) {
      this.$rootRouter.navigate(['Game', {pseudo: this.pseudo}]);
    } else {
      form.submited = true;
    }
  }
}

WelcomeCtrl.$inject = ['$rootRouter'];
