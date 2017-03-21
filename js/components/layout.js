import React from 'react';

import * as actions from '../actions/index';
import {connect} from 'react-redux';
import GuessForm from './guess-form';
import NewGame from './new-game';
import Feedback from './feedback';
import GuessArray from './guess-array';


export class Layout extends React.Component {
	render() {
		return (
			<div className="page-layout">
				<NewGame />
				<Feedback currentGuess={this.props.currentGuess[this.props.currentGuess.length - 1]} gameNumber={this.props.gameNumber}/>
				<GuessForm />
				<GuessArray guessArray={this.props.guessArray}/>
			</div>
		)
	}
}


const mapStateToProps = (state, props) => ({
    currentGuess: state.guessArray,
    gameNumber: state.gameNumber, 
    guessArray: state.guessArray    
});

export default connect(mapStateToProps)(Layout);


 