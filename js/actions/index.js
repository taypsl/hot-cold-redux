// make a guess // submit guess
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess: " .... "
})

// generate new random number
export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
	type: RESET
})
