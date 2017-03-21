const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const state = {
	fewest: 100
}

function checkGuesses(state, guesses) {
	if (guesses < state.fewest) {
		state.fewest = guesses;
	}
}

app.use('/', express.static('js'));

app.get('/fewest-guesses', function(req, res) {
	res.send(JSON.stringify(state.fewestGuesses));

});

app.post('/fewest-guesses', jsonParser, function(req, res) {
	checkGuesses(state, ) // how ddo I get current guessArray from redux state?
});

app.listen(process.env.PORT || 8080);