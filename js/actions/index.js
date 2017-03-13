// make a guess // submit guess
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS, 
	guess
})

//Q: when should I use a switch case? CAn I use a switch case when writing reducers instead of if, else statements?

// generate new random number
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const generateNumber = number => ({
	type: GENERATE_NUMBER,
	number
})

// compare guess to actual number
export const COMPARE_GUESS = 'COMPARE_GUESS';
export const compareGUess = (guess, number) => ({
	type: COMPARE_GUESS,
	guess,
	number
	// if within X distance, return true; else return false
})

// state hot or cold -- this might be part of compare guess, if close, return hot, if false return cold
export const RETURN_HOT_OR_COLD = 'RETURN_HOT_OR_COLD';
export const returnHotOrCold = //?? 





