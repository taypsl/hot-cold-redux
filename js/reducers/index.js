import * as actions from '../actions/index';

const initialRepositoryState= {
  guessArray: [],
  gameNumber: generateNumber(),
}

export const repositoryReducer = (state=initialRepositoryState, action) => {

  switch (action.type) {

    case 'GUESS':
    return {
      gameNumber: state.gameNumber,
      guessArray: [...state.guessArray, action.guess];
    }
    //assessGuess()
    //returnFeedback();
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
  gameNumber = Math.floor(Math.random()*100)+1;
  return state.gameNumber
}
