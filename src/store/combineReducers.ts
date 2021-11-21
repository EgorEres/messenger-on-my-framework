function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  const initState = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    finalReducers[key] = reducers[key];
    initState[key] = reducers[key]() || {};
  }
  const finalReducerKeys = Object.keys(finalReducers);

  return [
    function combination(state = {}, action) {
      const nextState = {};
      for (let i = 0; i < finalReducerKeys.length; i++) {
        const key = finalReducerKeys[i];
        const reducer = finalReducers[key];
        const previousStateForKey = state[key];
        const nextStateForKey = reducer(previousStateForKey, action);

        nextState[key] = nextStateForKey;
      }
      return nextState;
    },
    initState,
  ];
}

export default combineReducers;
