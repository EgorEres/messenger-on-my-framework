import userReducer from "./user-reducer";
import messagesReducer from "./messenger-reducer";
import combineReducers from "./combineReducers";

const [combReducer, initialState] = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

function createStore(reducer, state) {
  return {
    dispatch: (action) => {
      state = reducer(state, action);
    },
    getState: (path?) => {
      if (!path) return state;

      return path
        .split(".")
        .reduce((acc, key) => (acc && key in acc ? acc[key] : null), state);
    },
  };
}

export default createStore(combReducer, initialState);
