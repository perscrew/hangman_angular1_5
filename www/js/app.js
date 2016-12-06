import { AppComponent } from './components/appComponent';
import { WelcomeComponent } from './components/welcomeComponent';
import { GameComponent } from './components/gameComponent';
import { GameOverComponent } from './components/gameOverComponent';
import { GameWonComponent } from './components/gameWonComponent';
import { PlayAgainComponent } from './components/playAgainComponent';
import { NavbarComponent } from './components/navbarComponent';
import { LetterService } from './services/letterService';

angular
    .module('app', ['ngComponentRouter'])
    .value('$routerRootComponent', 'hangMan')
    .config(function($locationProvider) {
    //  $locationProvider.html5Mode(true);
    })
    .factory('letterService', LetterService.letterFactory)
    .component('hangMan', AppComponent)
    .component('navbar', NavbarComponent)
    .component('welcome', WelcomeComponent)
    .component('game', GameComponent)
    .component('playAgain', PlayAgainComponent)
    .component('gameWon', GameWonComponent)
    .component('gameOver', GameOverComponent);
