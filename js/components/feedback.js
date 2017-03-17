import React from 'react';

function Feedback(props) { 
	function checkGuess(props) {
		if (state.gameNumber == state.guess) {
		return nextState.result = 'You Won!';
		}
		else if ((state.guess < 0) || (state.guess >101)) {
			alert("Only guess a number between 0 and 100")
			return true;
		}
		else if (Math.abs(state.gameNumber - state.guess) < 10) {
			return nextState.result = 'Hot';
		}
		else if (Math.abs(state.gameNumber - state.guess) < 20) {
			return nextState.result = 'Kinda Hot';
		}
		else if (Math.abs(state.gameNumber - state.guess) < 30) {
			return nextState.result = 'Luke Warm';
		}
		else {
			return nextState.result = 'Cold as Ice';
		}
	}
    return (
        <span className="feedback">
            {nextState.result}
        </span>
    );
}

Feedback.defaultProps = {
    result: 'Make your guess!'
};

export default Feedback;


// function Feedback(props) {
// 	const resultArray = ''; 
// 	switch (state.gameNumber) {
// 		case state.guess:
// 			resultsArray = 'You Won!';
// 			break;
// 		case ((state.guess < 0) || (state.guess >101)):
// 			alert("Only guess a number between 0 and 100");
// 			return true;
// 			break;
// 		case (Math.abs(state.gameNumber - state.guess) < 10):
// 			resultsArray = 'You Won!';
// 			break;
// 		...
// 	}
    

//     return (
//         <span className="feedback">
//             {resultsArray}
//         </span>
//     );

// }

