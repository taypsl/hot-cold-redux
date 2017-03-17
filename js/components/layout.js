import React from 'react';
import {connect} from 'react-redux';

import AppContainer from './app-container';
import * as actions from '../actions/index';

import NewGame from './new-game';

export class Layout extends React.Component {
	render() {
		<div className="page-layout">
			<NewGame />
			<AppContainer />
		</div>
	}
}

export default connect()(Layout)


/// hot cold app:
// generate random number at new game, and save that number in the store (NewGame)
// let people make guesses, 
// save guesses to an array 
// and compare their guess to the number in the store. 
	// if its the same as the guess, return WINNER
	// if its the same as a previous guess: return NOPE YOU DID THAT ALREADY
	// if its within 10, return ON FIRE
	// within 15 return HOT 
	// within 20 return WARM
	// within 25 ++ return ICE COLD

// =======================================
// when that's working==> 
	// display guesses 
	// display number of attemps 
