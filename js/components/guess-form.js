import React from 'react';

import * as actions from '../actions/index';
import {connect} from 'react-redux';

export class GuessForm extends React.Component {
	constructor(props) {
        super(props);
        this.makeGuess = this.makeGuess.bind(this);
    }

    makeGuess(event) {
    	event.preventDefault();
    	const guess = this.userGuess.value;
    	this.props.dispatch(actions.makeGuess(guess));
    }
    	// this is the part where I compare guess to state.gameNumber... ?

	render() {
		return(
			<div className="guess-form">
				<form className="guess-form">
					<input id="guess" type="text" ref={ref => this.userGuess = ref} placeholder="Enter a number between 0 and 100" />
					<button id="submit" type="submit" onClick={this.makeGuess}>
						Guess
					</button>
				</form>
			</div>
		)
	}

}

export default connect()(GuessForm);


