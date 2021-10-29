# Woofsweeper

## Background
The rule of the game is to navigate the dog digging out all the food buried under the yard. If the puppy accidentally digs out a bug then the game will be over. And if it's a non bug squre then the game will keep going until the dog collects all the food.  

The yard will be a m x n board. And each square on the board has three status: food/bug/empty. At the beginning of the game, the player needs to randomly select a square. Every non-bug position will have a number to indicate how many ajacent bugs it has (8 directions), and the player can make the decision for their next step based on the number and their luck. The player can only move the dog to the next square with valid path.

## Functionality & MVPs
In WoofSweeper, users will be able to:

* Start, pause, and reset the game board
* Start, pause the music
* Move the dog on the board to the desired position with valid path
* Reveal the square and the square will be set up with food/bug/empty square

In addition, this project will include:

* An About modal describing the background and rules of the game
* A production README

## Wireframes
https://wireframe.cc/xTzHMH

* Game controls will include Start, Stop, and Reset buttons.
* On the left, there will be a drop down to select the breed of the dog (different breed of dog have different speed) /Bonus
* On the top, there will be the timer and music control button.
* On the right, there will be the food icon showing the collection status of the food. 

## Technologies, Libraries, APIs
This project will be implemented with the following technologies:

* The Canvas API to render the game board
* Webpack bundle and transpile the source JavaScript code
* npm to manage project dependencies

## Implementation Timeline

* Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Get canvas to show up on the screen. Create Board and Component classes. Set up the initial state of the board, which include food and bugs distributed in different positions of the board.
* Monday: Dedicate this day toward implementing the underlying logic of Woof Sweeper. 
* Tuesday: Make sure the logic work and the basic version of the game works.Finish functionality implementation.
* Wednesday: Focus on styling.
* Thursday Morning: Deploy to GitHub pages. Make any edits of the README if needs.

## Bonus Features (Optional)
* Add options for the difficulty level set up
* Add the turn on/off button for music
