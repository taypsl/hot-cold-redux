import React from 'react';

import * as actions from '../actions/index';
import {connect} from 'react-redux';
import GuessForm from './guess-form';
import NewGame from './new-game';
import Feedback from './feedback';
import GuessArray from './guess-array';


export class Layout extends React.Component {

	   componentDidMount() {
        this.props.dispatch(
            actions.fetchGuesses()
        );
    }


	render() {
		return (
			<div className="page-layout">
				<NewGame />
				<Feedback 
					guessArray={this.props.guessArray} 
					gameNumber={this.props.gameNumber} 
					fewestGuesses={this.props.fewestGuesses} 
				/>
				<GuessForm />
				<GuessArray guessArray={this.props.guessArray}/>
			</div>
		)
	}
}


const mapStateToProps = (state, props) => ({
    gameNumber: state.gameNumber, 
    guessArray: state.guessArray,
    fewestGuesses: state.fewestGuesses    
});

export default connect(mapStateToProps)(Layout);


 