// make a guess // submit guess
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess: " .... "
})

//Q: when should I use a switch case? CAn I use a switch case when writing reducers instead of if, else statements?

// generate new random number
export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
	type: RESET
})
