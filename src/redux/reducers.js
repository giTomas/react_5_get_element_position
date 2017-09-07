import actions from './actions';
import getGridCoords from '../grid';

const initialState = {
  showModal: false,
  coordinates: {
    x: null,
    y: null,
  },
  active: '',
  gridCoords: [],
  wWidth: null,
}

function reducer(state=initialState, action) {
  switch (action.type) {
    case actions.UPDATE_GRID_COORDS:
      return {
        ...state,
        gridCoords: getGridCoords(state.wWidth),
        showModal: false,
        active: '',
      };
    case actions.UPDATE_WINDOW_WIDTH:
      console.log(action.payload)
      return {
        ...state,
        wWidth: action.payload,
        gridCoords: getGridCoords(action.payload),
        showModal: false,
        active: null,
      };
    case actions.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case actions.CLOSE_MODAL:
      console.log('close');
      return {
        ...state,
        showModal: false,
        active: '',
      };
    case actions.UPDATE_X_Y_COORDS:
      return {
        ...state,
        coordinates: {
          x: Math.round(action.payload.left),
          y: Math.round(action.payload.top),
        },
        showModal: true,
      };
    case actions.SET_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case actions.RESET_ACTIVE:
      return {
        ...state,
        active: '',
      }
    default:
      return state;

  }
}

export default reducer;
