//Global Variales
//--------------------------------------------------------------

// Crystals Variables
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	purple:
	{
		name: "Purple",
		value: 0
	},

	yellow:
	{
		name: "Yellow",
		value: 0
	}

};

// Scores (Current and Target)

var currentScore = 0;
var targetScore = 0;

//Wins and Loses
var winCount = 0;
var lossCount = 0;





//Functions
//--------------------------------------------------------------
//functions for getting ramdom numbers

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts and restart the Game

 startGame = function() {

 // Reset the Current Score
  currentScore = 0;

 // Set a new Target Score (between 19 and 120)

 targetScore = getRandom(19, 120);

 // Set different values for each of the crystals (between 1 and 12)
 crystal.blue.value 	= getRandom(1,12);
 crystal.green.value 	= getRandom(1,12);
 crystal.purple.value	= getRandom(1,12);
 crystal.yellow.value 	= getRandom(1,12);

 // Change the HTML to reflect all if these changes
 $("#yourScore").html(currentScore);
 $("#targetScore").html(targetScore);

 //Testing Console
 //console.log("------------------")
 //console.log("targetScore: " + targetScore);
 //console.log("Blue: " + crystal.blue.value + "| Green: " + crystal.green.value + "| Purple: " + crystal.purple.value + "| Yellow: " +crystal.yellow.value);
 //console.log("------------------")

}
//Respond to clicks on the crystals
var addValues = function(crystal) {


// Change currentScore	
currentScore = currentScore + crystal.value;

// Change the HTML to reflect changes in currentScore
$("#yourScore").html(currentScore);
	
// Call the checkWin Function
checkWin();

// Testing Console
console.log("your Score: " + currentScore);

}

//check if User won or Lost and Reset the Game
var checkWin = function() {

// Check if currentAcore is larger than targetScore
	if(currentScore > targetScore){
		alert("Sorry. You lost");
		console.log("You Lost");

		//Add to loss Counter
		lossCount++;

		//Change loss Count HTML
		$("#lossCount").html(lossCount);

		// Restart the game
		startGame();


	}

	else if (currentScore == targetScore) {
		alert("Congratulations! You Won!");
		console.log("You Won!");

		//Add to Win Counter
		winCount++;
		

		//Change Win Count HTML
		$("#winCount").html(winCount);

		// Restart the game
		startGame();

	}
}



//Main Process
//---------------------------------------------------------------
//starts the Game for the first time
startGame();

$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#green").click(function() {
	addValues(crystal.green);
});

$("#purple").click(function() {
	addValues(crystal.purple);
});

$("#yellow").click(function() {
	addValues(crystal.yellow);
});

