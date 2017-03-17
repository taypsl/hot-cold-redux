import React from 'react';

import * as actions from '../actions/index';
import Feedback from './feedback';
import {connect} from 'react-redux';

export class GuessForm extends React.Component {
	constructor(props) {
        super(props);
        this.makeGuess = this.makeGuess.bind(this);
    }

    makeGuess() {
    	const guess = this.userGuess.value;
    	this.props.dispatch(actions.makeGuess(guess));
    }
    	// this is the part where I compare guess to state.gameNumber... ?

	render() {
		<div class="guess-form">
			<Feedback result={this.props.result}/>
			<form className="guess-form">
				<input id="guess" type="text" ref={ref => this.userGuess = ref} placeholder="Enter a number between 0 and 100">
				<button id="submit" type="submit" onClick={this.makeGuess}>
					Guess
				</button>
			</form>
		</div>
	}

}

const mapStateToProps = (state, props) => ({
    repositories: state     
});

export default connect(mapStateToProps)(Layout);


