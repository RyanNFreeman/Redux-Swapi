import { FETCH_ACTION_FETCHING, FETCH_ACTION_SUCCESS, FETCH_ACTION_FAILURE} from "../actions";
/* we need our action types here*/ 

const initialState = {
  fetching: false,
  characters: [],
  error: null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTION_FETCHING: 
    return {
      ...state,
      fetching: true
    }
    case FETCH_ACTION_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false, error: action.payload
      }
    case FETCH_ACTION_FAILURE: 
      return {
        ...state,
        fecthing: false
      }
    

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
