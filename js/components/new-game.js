import React from 'react';

import * as actions from '../actions/index';

export class NewGame extends React.Component {
	constructor(props) {
		super(props);
		this.resetGame = this.resetGame.bind(this);
	}

	resetGame() {
        this.props.dispatch(
            actions.resetGame(this.props.gameNumber)
        );
	} // I'm confused about where I store the logic for this... it should generate new random number that is stored in state. 

	render() {
		<div className="new-game">
			<button type="button" id="reset" onClick={this.resetGame}>
				New Game
			</button>
		</div>
	}
}

