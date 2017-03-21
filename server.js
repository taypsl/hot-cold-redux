const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var cors = require('cors')


app.use(cors())

const state = {
	fewest: 100
}

app.use('/', express.static('js'));

app.get('/fewest-guesses', function(req, res) {
	res.json( {fewest:state.fewest} );
	console.log('get')

});

app.post('/fewest-guesses', jsonParser, function(req, res) {
	console.log('checking post')
	if (req.body.fewest < state.fewest) {
		state.fewest = req.body.fewest
	}
	res.json( {fewest:state.fewest} );
	
});

app.listen(process.env.PORT || 8081);  