import * as actions from '../actions/index';

const initialRepositoryState= {
  guessArray: [],
  gameNumber: generateNumber(),
  fewestGuesses: undefined
}

export const repositoryReducer = (state=initialRepositoryState, action) => {
  switch (action.type) {

    case actions.MAKE_GUESS:
    var newState = {guessArray: [...state.guessArray, action.guess] }
    return Object.assign({}, state, newState)

    break;

    case actions.RESET_GAME:
    var newState =  {
      guessArray: [],
      gameNumber: generateNumber()
    }
    return Object.assign({}, state, newState)
    break;
    
    case actions.FETCH_GUESS_SUCCESS:
      var newState =  {
        fewestGuesses: action.guess
      }
    return Object.assign({}, state, newState)
    break;

    default:
      return state;
    break;
  }

};

function generateNumber(){
  return Math.floor(Math.random()*100)+1;
}

// else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
//         // Find the index of the matching repository
//         const index = state.findIndex(repository =>
//             repository.name === action.repository
//         );

//         if (index === -1) {
//             throw new Error('Could not find repository');
//         }

//         const before = state.slice(0, index);
//         const after = state.slice(index + 1);
//         const newRepository = Object.assign({}, state[index], {
//             description: action.description
//         });
//         return [...before, newRepository, ...after];
//     }




//     