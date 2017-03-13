require('babel-polyfill');


// STORE
var initialState = {
	guessArray: [],
	gameNumber: gameNumber,
}

var store = Redux.createStore(hotColdApp, state)
var guessArray = document.getElementById('guess-container');
var resultDisplay = document.getElementById('results-container');
var guess; 

function render() {
	var state = store.getState();
	displayArray.innerHTML = state.guessArray;
	resultDisplay.innerHTML = state.result;
}


// ACTIONS
document.getElementById('guess')
	.addEventListener('click', function(e) {
		store.dispatch({ type: 'GUESS' }) // on click, dispatch actions to store
	})

document.getElementById('reset')
	.addEventListener('click', function(e) {
		store.dispatch({ type: 'RESET' }) // on click, dispatch actions to store
	})


// REDUCERS
function hotColdApp(state=initialState, action) {
	var nextState = {
		guessArray: state.guessArray,
		result: state.result, 
	}

	switch (action.type) {
		case 'GUESS':
			guess = document.getElementById('guess').value(); 
			assessGuess()
			returnFeedback();
		// evaluate
		// return hot or cold
		// if guessed twice, alert
		// keep track of guesses
		// say if won

			break;
		case 'RESET':
		// generate random number between 0 and 100
			nextState.gameNumber = generateNumber();
			return nextState
			break;

		default
			return state;
	}
}

function youWon() {
	var winner = document.getElementById('winner')
	winner.innerHTML = 'YOU WON!';
}

function assessGuess() {
	if ((guess < 0) || (guess >101)) {
		alert("Only guess a number between 0 and 100")
		return true;
	}
}

function returnFeedback() {
	if (state.gameNumber == guess) {
		return youWon();
	}
	else if (Math.abs(state.gameNumber - guess) < 10) {
		return nextState.result = 'Hot';
	}
	else if (Math.abs(state.gameNumber - guess) < 20) {
		return nextState.result = 'Kinda Hot';
	} 
	else if (Math.abs(state.gameNumber - guess) < 30) {
		return nextState.result = 'Luke Warm';
	} 
	else {
		return nextState.result = 'Cold as Ice';
	}  
}

function generateNumber(){
  		gameNumber = Math.floor(Math.random()*100)+1;
  		return state.gameNumber
  	}

