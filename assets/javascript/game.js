

// Array storing all possible computer options
var characSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
				'l', 'm' ,'n' ,'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
				'w', 'x' ,'y' ,'z' ] //, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Declare the variables for wins, losses, and guesses so far:
var win = 0
var loss = 0
var lives = 9

document.getElementById("winCount").innerHTML = win;
document.getElementById("lossCount").innerHTML = loss;
document.getElementById("livesLeft").innerHTML = lives;

// Declares an empty array of guesses so far and a var for the user 
// guesses as they are input:
var userGuesses = [];
var userGuess;

// Use the "array".join() function to convert an array into a string
// output that shows all array values as a single list. Use .join(" ")
// to output a list with spaces between the values and nothing else


// This function is run whenever the user presses a key and needs to contain all the code I wish to run.
    document.onkeyup = function(event) {

    	// Sets "Guesses left" to 9 if not already at 9
    	// lives === 9;

	    // Randomly chooses a choice from the options array. This is the Computer's guess.
		var computerGuess = characSet[Math.floor(Math.random() * characSet.length)];

	    // Determines which key was pressed and inputs it as var userGuess:
	    var userGuess = event.key.toLowerCase();

	    // This builds the array of userGuesses
	    userGuesses.push(userGuess);

	    	// I don't think I NEED a for-loop.... I can set it to restart using the value of "lives"
		      // // Here is the for-loop that will build the userGuesses array:
		      // // For Loop Elements Repeats 9 Times
		      // for (var i = 1; i < 10; i++) {

		      //   // Asks to define userGuess with user input
		      //   userGuess = i;

		      //   // adds userGuess to UserGuesses @ index 0
		      //   userGuesses.push(userGuess);
		        

		      // };

		//This prints the array as a string concatenated with a space in between characters
		document.getElementById("guesssoFar").innerHTML = userGuesses.join(" ")

		// These don't seem to be working...

		if (userGuess === computerGuess){ win++

		}else if (lives === 0){loss++;
				userGuesses.clear();
				document.getElementById("guesssoFar").innerHTML = userGuesses.join(" ")

		}else if (userGuess !== computerGuess){lives--;

		};

	}




/*
        if (userGuess === computerGuess){
            alert("Comp picked that too! You tied.")
            tie++
            document.getElementById("tieCount").innerHTML = tie;
        }
        
        // -----------------------------------------
        else if ((computerGuess === "r") && (userGuess === "p")){
            alert("Comp picked rock. You win!")
            win++
            document.getElementById("winCount").innerHTML = win;
           
        }
        // ----------------------------------------
        else if ((computerGuess === "r") && (userGuess === "s")){
            alert("Comp picked rock. You lose :(")
            loss++
            document.getElementById("lossCount").innerHTML = loss;
        }
        // ----------------------------------------
        else if ((computerGuess === "p") && (userGuess === "r")){
            alert("Comp picked paper. You lose :(")
            loss++
            document.getElementById("lossCount").innerHTML = loss;
        }
        // ----------------------------------------
        else if ((computerGuess === "p") && (userGuess === "s")){
            alert("Comp picked paper. You win!")
            win++
            document.getElementById("winCount").innerHTML = win;
        }
        // ----------------------------------------
        else if ((computerGuess) === "s" && (userGuess === "r")){
            alert("Comp picked scissors. You win!")
            win++
            document.getElementById("winCount").innerHTML = win;
        }
        // ----------------------------------------
        else if ((computerGuess) === "s" && (userGuess === "p")){
            alert("Comp picked scissors. You lose!")
            loss++
            document.getElementById("lossCount").innerHTML = loss;
        }

         };

// Alternate Solution to RPS that works well (includes an HTML code to prettify the whole thing up!)
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

        //inlcude <div class = "game"></div> in HTML
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

        */