// container for app

// has feedback, form, guesses 
import React from 'react';

import GuessForm from './guess-form';
import GuessCount from './guess-count';


export class AppContainer extends React.Component {
	render() {
		<div class="app-container">
			<GuessForm />
			<GuessCount />
			<Guesses />
		</div>
	}

}
