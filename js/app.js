/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //app.js to perform basic DOM selection, add event handlers

startGame = document.getElementById("btn__reset") // Select the start game button

let newGame = new Game(); // create a new Game class object


// add an event listener to the start game button
startGame.addEventListener('click', () => {
	// on clicking the button start the game(call the startGame function)
	newGame.startGame();

} )
// add an event listener to the onscreen keyboard button
document.getElementById('qwerty').addEventListener('click',(event) => {
    if (event.target.tagName === 'BUTTON') {

    // when the onscreen keyboard button is clicked call the handleInteraction function	
      newGame.handleInteraction(event.target);

    }
  }
);

// add an event listener to the physical keyboard event
document.addEventListener('keydown', (event) => {

	// when the physical keyboard button is clicked call the handleInteraction function	
    newGame.handleInteraction(event.target);
  }
);
 

