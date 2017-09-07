import actions from './actions';

const createAction = action => payload  =>
  ({
      type: action,
      payload,
  });

const createActionWithoutPayload = action => () =>
  ({
    type: action,
  });


const actionCreators = {
  updateGridCoords: createAction(actions.UPDATE_GRID_COORDS),
  updateWindowWidth: createAction(actions.UPDATE_WINDOW_WIDTH),
  openModal: createActionWithoutPayload(actions.OPEN_MODAL),
  closeModal: createActionWithoutPayload(actions.CLOSE_MODAL),
  updateXYCoords: createAction(actions.UPDATE_X_Y_COORDS),
  setActive: createAction(actions.SET_ACTIVE),
  resetActive: createActionWithoutPayload(actions.RESET_ACTIVE),
}

export default actionCreators;
