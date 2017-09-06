import actions from './actions';

fucntion createAction(action) {
  return {
    type: action,
    payload,
  }
}

fucntion createActionWithoutPayload(action) {
  return {
    type: action,
  }
}

function updateProgress(payload) {
  return {
    type: actions.UPDATE_PROGRESS,
    payload,
  }
}

const actionCreators = {
  updateGridCoords: createAction(actions.UPDATE_GRID_COORDS),
  updateWindowWidth: createAction(actions.UPDATE_WINDOW_WIDTH),
  closeModal: createAction(actions.CLOSE_MODAL),
  updateXYCoords: createAction(actions.UPDATE_X_Y_COORDS),
}

export default actionCreators;
