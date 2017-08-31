import actions from './actions';

const initialState = {
  scrollY: 0,
  scrollDown: false,
  scrollUp: false,
  showElement: true,
}

function scrollProgressReducer(state=initialState, action) {
  if (action.type === actions.UPDATE_PROGRESS) {
    return {
      ...state,
      progress: action.payload
    };
  }
  else {
    return state;
  }
}

export default scrollProgressReducer;
