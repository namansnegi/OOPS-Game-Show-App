/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Setting up the Phrase class. Phrases can only be letters and spaces.
 class Phrase{
 	constructor(phrase){
 		this.phrase = phrase.toLowerCase();
 	}

 	/**
     * addPhraseToDisplay() method adds letter placeholders to the display when the game starts.
     */
 	addPhraseToDisplay(){
 		//first, generate the html of the content
 		let contentHTMLFormat = `<ul>`
 		for(let i =0;i<this.phrase.length;i++){
 			if (this.phrase[i]===" "){
 				contentHTMLFormat+=`<li class="space"> </li>`;
 			}else{
 				contentHTMLFormat+=`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
 			}
 		}
 		contentHTMLFormat+=`</ul>`

 		// use DOM to add content
 		let divPhrase = document.getElementById("phrase");
 		divPhrase.innerHTML=contentHTMLFormat;
 	}

 	 /**
     * checkLetter method checks to see if letter selected by player matches a letter in the phrase.
     */
 	checkLetter(letter){
 		return this.phrase.includes(letter);
 	}

 	 /**
     * showMatchedLetter() method reveals the letter(s) on the board that matches player's selection.
     */
 	showMatchedLetter(button){

 		let letter = button.textContent;

 		let boxes = document.querySelectorAll("#phrase li");
 		
 		for(let i =0;i<boxes.length;i++){
 			
 			if (boxes[i].textContent===letter){
 				boxes[i].classList.remove('hide');
 				boxes[i].classList.add('show');
 			}
 		}


 	}
 }