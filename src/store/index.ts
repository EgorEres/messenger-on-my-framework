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
    getState: () => state,
  };
}

export default createStore(combReducer, initialState);
