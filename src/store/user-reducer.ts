const initialState = {
  id: null,
  first_name: "Имя",
  second_name: "Фамилия",
  login: "logininyshka",
  email: "email@mail.com",
  phone: "900123123",
  avatar: null,
  withoutGetUserInfo: false,
};

function userReducer(state = initialState, action?) {
  switch (action?.type) {
    case "SET_USER_DATA":
      return { ...state, ...action?.payload };
    case "SET_WITHOUT_GET_USER_INFO":
      return { ...state, withoutGetUserInfo: action.payload };
    case "RESET_USER_DATA":
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
