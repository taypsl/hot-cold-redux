// form with input and submit

// wrapped in app-container

import React from 'react';
import * as actions from '../actions/index';
import Feedback from './feedback';

export class AppContainer extends React.Component {
	constructor(props) {
        super(props);
        this.makeGuess = this.makeGuess.bind(this);
    }

    makeGuess() {
    	const guess = this.userGuess.value;
    	this.props.dispatch(actions.makeGuess(guess));
    }

	render() {
		<div class="guess-form">
			<Feedback />
			<form className="guess-form">
				<input id="guess" type="text" ref={ref => this.userGuess = ref} placeholder="Enter a number between 0 and 100">
				<button id="submit" type="submit" onClick={this.makeGuess}>
					Guess
				</button>
			</form>
		</div>
	}

}



