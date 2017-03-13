require('babel-polyfill');

// REDUCERS
function hotColdApp(state, action) {
	switch (action.type) {
		case 'GUESS':

			break;
		case 'EVALUATE':

			break;
		case 'RETURN':

			break;

		default
			return state
	}
}

// STORE
var store = Redux.createStore(hotColdApp, state)

// ACTIONS
document.getElementById('guess')
	.addEventListener('click', function(e) {
		store.dispatch({ type: 'GUESS' }) // on click, dispatch actions to store
	})

