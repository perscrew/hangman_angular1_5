# Hangman with Angular 1.5 (components) & ES6

These app is a minimalist hangman game.
It demonstrates the use of Anglular components introduced in **1.5 version**.
It also uses **ES6** convention to produce a much cleaner/functionnal code.


## 1. Installation

* Clone the github repository :
```
git clone https://github.com/perscrew/hangman_angular1_5.git
```

* Launch npm install to retrieve dependencies
```
npm install
```

## 2. Launch the app

* Run gulp build task to build js assets
```
gulp build
```

* Run gulp serve task to start the app in your browser
```
gulp serve
```

## 3. Use the app


When you launch the app you arrive on the welcome page. You need to seize a pseudo in order to start the game.

![Welcome page](/screenshots/welcome.png)

Once the pseudo is inquired you can start to play. You must seize a letter in order to discover the hidden word.

![Game page](/screenshots/game.png)

If you find all the hidden letters you will be redirected to a congratulations page.

![Won page](/screenshots/game-won.png)

If you don't find all the hidden letters with the 6 tries you will be redirected to a game over page.

![Game over page](/screenshots/game-over.png)

## 4. Potential enhancements

The app could be improved regarding the underneath points :

* Minify bootstrap and custom css with a gulp task (gulp-clean-css)

* Minify js with babel-plugin-uglify

* Create an angular component for the different input fields (ex : editable-field )

* Create an angular config module to store the nb retry parameter.

* Implement a rest service to generate true random word. (ex: A nice node express rest back-end connected to mongodb :p)
