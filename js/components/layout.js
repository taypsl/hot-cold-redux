// import new game button

// import main app

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