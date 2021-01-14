/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game.js to create a Game class with methods for starting and ending the game, handling interactions,
// getting random phrases, checking for a win, and removing a life counter and resetting the game.

 class Game{
 	constructor(missed, phrases, activePhrase){
 		this.missed = 0;
 		this.phrases = [new Phrase('Be yourself everyone else is already taken'),new Phrase('To love oneself is the beginning of a lifelong romance'),new Phrase('I should just be quiet'),new Phrase ('I should have done better'),new Phrase('I will show you')]; 
        this.activePhrase = null;
 	}
 	getRandomPhrase(){
        const randomNum=Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomNum];
    }

    // startGame function calls the getRandomPhrase() method, and adds that phrase to the board by calling the
    // Phrase class' addPhraseToDisplay() method.
    startGame(){
        document.getElementById('overlay').style.display = 'none';

    	this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();
    }

    //this method checks to see if the button clicked by the player matches a letter in the phrase.
    handleInteraction(button){

        // if selected word matches, call the showMatchedLetter() method and call checkForWin()
        //if true show the letter onto the screen, else call removeLife()

        button.disabled = true

        if (this.activePhrase.phrase.includes(button.textContent)){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button);
            this.checkforwin();
        }else {
            button.classList.add('wrong');
            this.removeLife();

        }

    }


    //this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife(){
        const imageList = document.querySelectorAll("#scoreboard img");
        
        this.missed += 1;
        let changeNo = 5 - this.missed;
        imageList[changeNo].src = 'images/lostHeart.png';
        if (this.missed === 5){
            this.gameover();
        }
    }

    //this method checks to see if the player has selected all of the letters of the phrase.
    checkforwin(){
        let win = true
        let shownPhrase = document.querySelectorAll("#phrase li");
       
        for(let i = 0; i < shownPhrase.length; i++){
           
            if (shownPhrase[i].classList.contains('hide')){
                win = false;
                break;
            }
        }

        if (win){
            this.gameover();
        }

    }

    //this method displays a message if the player wins or a different message if they lose and resets the game parameters.
    gameover(){

        document.getElementById('overlay').classList.remove('start')

        if (this.missed === 5){
            document.getElementById('overlay').children[1].textContent = "Sorry you lost. Better luck next time";
            document.getElementById('overlay').classList.add('lose')
        }else {
            document.getElementById('overlay').children[1].textContent = "Well done. You won";
            document.getElementById('overlay').classList.add('win')
        }

        document.getElementById('overlay').style.display = '';
        this.resetGame()

    }

    /*
    Resetting the keyboard, lives, phrase list items, and missed property.
    */

    resetGame(){

        //remove lis from the phrase
        document.querySelectorAll("#phrase li").forEach(el => el.remove());

        // reset all buttons been disabled
        document.querySelectorAll("#qwerty button").forEach(el => {
            el.className = 'key';
            el.disabled = false;
        });

        //reset heart lives?
        document.querySelectorAll("#scoreboard img").forEach(el => el.src = 'images/liveHeart.png')

        //resetting missed
        this.missed = 0;

    }
 }