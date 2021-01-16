/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //app.js to perform basic DOM selection, add event handlers
let newGame;
startGame = document.getElementById("btn__reset") // Select the start game button

 // create a new Game class object


// add an event listener to the start game button
startGame.addEventListener('click', () => {
  newGame = new Game();
	// on clicking the button start the game(call the startGame function)
	newGame.startGame();

} )
// add an event listener to the onscreen keyboard button
document.getElementById('qwerty').addEventListener('click',(event) => {
    const clickedButton = event.target;

    if (clickedButton.getAttribute('class') === 'key') {

    // when the onscreen keyboard button is clicked call the handleInteraction function	
      newGame.handleInteraction(clickedButton);

    }
  }
);

// add an event listener to the physical keyboard event
document.addEventListener('keydown', (event) => {
    //Getting the info on the char that was pressed on the keyboard.
    const char = event.char || event.charCode || event.which;
    //Getting the string that was pressed and converting it to lower case.
    const characterTyped = String.fromCharCode(char).toLowerCase();
    
    //I need to match the keyboard press with the onscreen keyboard button
    document.querySelectorAll('#qwerty button').forEach(button => {
        if (button.textContent === characterTyped) {
            newGame.handleInteraction(button);
        }
    });
});

 

