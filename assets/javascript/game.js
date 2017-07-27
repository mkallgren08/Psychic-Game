

// Array storing all possible computer options
var characSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
				'l', 'm' ,'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
				'w', 'x' ,'y' ,'z' ] //, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Declare the variables for wins, losses, and guesses so far:
var win = 0
var loss = 0
var lives = 9


document.getElementById("lossCount").innerHTML = loss;
document.getElementById("livesLeft").innerHTML = lives;

// Declares an empty array of guesses so far and a var for the user 
// guesses as they are input:
var userGuesses = [];
var userGuess;
var computerGuess = characSet[Math.floor(Math.random() * characSet.length)];
console.log(computerGuess);
// Use the "array".join() function to convert an array into a string
// output that shows all array values as a single list. Use .join(" ")
// to output a list with spaces between the values and nothing else


// This function is run whenever the user presses a key and needs to contain all the code I wish to run.
    document.onkeyup = function(event) {
    	function gameReset(){
		// Resets lives to 9 and writes it to page
		lives = 9;
		document.getElementById("livesLeft").innerHTML = lives;
		// Resets the usetGuesses array to be blank and clears the screen
		userGuesses = [];
		document.getElementById("guesssoFar").innerHTML = userGuesses;
		computerGuess = characSet[Math.floor(Math.random() * characSet.length)];
		console.log(computerGuess);
		};

		function gameWinner(){
				console.log("You win!")
				win++;
				document.getElementById("winCount").innerHTML = win;
			}

		function gameLoser(){
				loss++;
				document.getElementById("lossCount").innerHTML = loss;
			}

		function loseLife(){
			lives--;
			document.getElementById("livesLeft").innerHTML = lives;
		}

	    // Determines which key was pressed and inputs it as var userGuess:
	    var userGuess = event.key.toLowerCase();

	    // This builds the array of userGuesses
	    if (characSet.indexOf(userGuess) === -1){
	    	console.log("Invalid character entry!")
	    } else if (userGuesses.indexOf(userGuess) >= 0){
	    	console.log("Repeated entry, entry ignored");
	    	// This was the only way I could keep lives from going down on a repeated
	    	// keystroke :/
	    	lives++;
	    } else {
	    	userGuesses.push(userGuess);
	    }
		
		//This prints the array as a string concatenated with a space in between characters
		document.getElementById("guesssoFar").innerHTML = userGuesses.join(" ")
		document.getElementById("livesLeft").innerHTML = lives;
	    //This first case will only run if the key is pressed AND lives equal 9
	    //if (lives === 9){
	    	// Randomly chooses a choice from the options array. This is the Computer's guess.
			// var computerGuess = characSet[Math.floor(Math.random() * characSet.length)];
			// console.log(computerGuess);
	    //}

	    if (userGuess === computerGuess){ 
			gameWinner();
			gameReset();
		}

	    else if (lives === 0){
			gameLoser();
			gameReset();
		}

	    else if (userGuess !== computerGuess && characSet.indexOf(userGuess) > -1){
			loseLife();
		}
		
		// }else if (lives === 9){
	 //    	// Randomly chooses a choice from the options array. This is the Computer's guess.
		// 	var computerGuess = characSet[Math.floor(Math.random() * characSet.length)];
		// 	console.log(computerGuess);
	 //    }





	}
