require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Layout from './components/layout';

import store from './store';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	<Provider store={store}>
    		<Layout />
    	</Provider>, 
    	document.getElementById('app'))
);
