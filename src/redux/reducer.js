/* @flow */
type StateType = {
  list: object
};

const initState: StateType = {
  object: { }
};

const reducer = (state: StateType = initState, action: object): StateType => {
  switch (action.type) {
    case 'FETCH-BILLS': {
      return state;
    }
    default: return state
  }
}

export default reducer;
