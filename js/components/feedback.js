import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

function Feedback(props) { 
	function checkGuess(gameNumber, currentGuess) {
		if (!currentGuess) {
			return 'Make your guess!'
		}

		else if (gameNumber == currentGuess) {
		     props.dispatch(
            	actions.sendGuesses(props.guessArray.length)
        	);
			return 'You Won!';
		}
		else if ((gameNumber < 0) || (currentGuess >101)) {
			alert("Only guess a number between 0 and 100")
			return true;
		}
		else if (Math.abs(gameNumber - currentGuess) < 10) {
			return 'Hot';
		}
		else if (Math.abs(gameNumber - currentGuess) < 20) {
			return 'Kinda Hot';
		}
		else if (Math.abs(gameNumber - currentGuess) < 30) {
			return 'Luke Warm';
		}
		else {
			return 'Cold as Ice';
		}
	}
    return (
        <div>
        	<div className="feedback">
	            { checkGuess(props.gameNumber, props.guessArray[props.guessArray.length - 1]) } 
	        </div>
	        <div>
	        	{ props.fewestGuesses }
	        </div>
	    </div>
    );
}

Feedback.defaultProps = {
    result: 'Make your guess!'
};


export default connect()(Feedback);


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

