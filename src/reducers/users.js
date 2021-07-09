import createReducer from '../utils/createReducer';

const initialState = {
  searchResult: [],
  isLoading: false,
  hasError: false,
}

const actions = {
  receiveUsers: (nextState, users) => {
    nextState.searchResult = users;
    nextState.isLoading = false;
    nextState.hasError = false;
    return nextState;
  },
  requestUsers: (nextState) => {
    nextState.isLoading = true;
    nextState.hasError = false;
    return nextState;
  },
  reportError: (nextState) => {
    nextState.isLoading = false;
    nextState.hasError = true;
    return nextState;
  }
}

export default createReducer(initialState, actions);
