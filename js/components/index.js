

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
