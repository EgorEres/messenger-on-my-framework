const initialState = {
  id: 123,
  first_name: "Petya",
  second_name: "Pupkin",
  display_name: "Petya Pupkin",
  login: "userLogin",
  email: "my@email.com",
  phone: "89223332211",
  avatar: "/path/to/avatar.jpg",
};

function userReducer(state = initialState, action?) {
  switch (action?.type) {
    case "SET_USER_DATA":
      return action?.payload;
    case "RESET_USER_DATA":
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
