// make a guess // submit guess
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess: guess
})

// generate new random number
export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
	type: RESET_GAME
})

export const FETCH_GUESS_SUCCESS = 'FETCH_GUESS_SUCCESS';
export const fetchGuessSuccess = (guess) => ({
    type: FETCH_GUESS_SUCCESS,
    guess
});

export const FETCH_GUESS_ERROR= 'FETCH_GUESS_ERROR';
export const fetchGuessError = (error) => ({
    type: FETCH_GUESS_ERROR,
    error
});

export const fetchGuesses = () => dispatch => {
    const url = `http://localhost:8081/fewest-guesses`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchGuessSuccess(data.fewest))
    )
    .catch(error =>
        dispatch(fetchGuessError(error))
    );
};

export const sendGuesses = (guesses) => dispatch => {
    const url = `http://localhost:8081/fewest-guesses`;
    return fetch(url, {
	  method: "POST",
	  fewest: guesses
	})
    .then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    // .then(data =>
    //     // dispatch(fetchGuessSuccess(data.fewest))
    // )
    .catch(error =>
        dispatch(fetchGuessError(error))
    );
};