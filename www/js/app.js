import { AppComponent } from './components/appComponent';
import { WelcomeComponent } from './components/welcomeComponent';
import { GameComponent } from './components/gameComponent';
import { GameOverComponent } from './components/gameOverComponent';

angular
    .module('app', ['ngComponentRouter'])
    .value('$routerRootComponent', 'hangMan')
    .config(function($locationProvider) {
    //  $locationProvider.html5Mode(true);
    })
    .component('hangMan', AppComponent)
    .component('welcome', WelcomeComponent)
    .component('game', GameComponent)
    .component('gameOver', GameOverComponent);
