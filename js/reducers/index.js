import * as actions from '../actions/index';

const initialRepositoryState= {
  guessArray: [],
  gameNumber: generateNumber(),
}

export const repositoryReducer = (state=initialRepositoryState, action) => {
  switch (action.type) {

    case actions.MAKE_GUESS:
    return {
      gameNumber: state.gameNumber,
      guessArray: [...state.guessArray, action.guess]
    }
    break;

    case actions.RESET_GAME:
    return {
      guessArray: [],
      gameNumber: generateNumber()
    }
    break;

    default:
      return state;
    break;
  }

};

function generateNumber(){
  return Math.floor(Math.random()*100)+1;
}
