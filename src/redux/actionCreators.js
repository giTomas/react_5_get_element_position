import actions from './actions';


function updateProgress(payload) {
  return {
    type: actions.UPDATE_PROGRESS,
    payload,
  }
}

const actionCreators = {
  updateProgress,
}

export default actionCreators;
