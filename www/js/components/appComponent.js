export let AppComponent = {

  template: '<ng-outlet></ng-outlet>',
  bindings: {
  },
  $routeConfig : [
      {path: '/', name: 'Welcome', component: 'welcome', useAsDefault: true},
      {path: '/game/:pseudo', name: 'Game', component: 'game'},
      {path: '/game-over/:pseudo/:word', name: 'GameOver', component: 'gameOver'},
      {path: '/**', redirectTo: ['Welcome']}
  ]
}
