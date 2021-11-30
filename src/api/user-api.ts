import HTTPTransport from "./HTTPTransport";

// получение пользователя (сработает если есть куки)
function getUser() {
  return HTTPTransport.get("/auth/user")
    .then((res) => {
      if (res.status !== 200) {
        console.error("can not get user:", res.response);
        return null;
      }

      return JSON.parse(res.response);
    })
    .catch((err) => console.error(err));
}

// логин
function postUserSignIn(data) {
  return HTTPTransport.post("/auth/signin", { data: JSON.stringify(data) })
    .then((res) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return res.response;
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Неуспешная авторизация, попробуйте позднее" };
    });
}

// логаут
function postUserLogout() {
  return HTTPTransport.post("/auth/logout").catch((err) => console.error(err));
}

const mock = true;

const mockPromise = new Promise((resolve) => {
  resolve();
}).then(() => {
  return {
    errorText: "email is not validч",
  };
});

// регистрация
function postUserSignUp(data) {
  if (mock) {
    return mockPromise;
  }
  return HTTPTransport.post("/auth/signup", { data: JSON.stringify(data) })
    .then((res) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return JSON.parse(res.response);
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Не удалось зарегистрироваться, попробуйте позднее" };
    });
}

export default {
  getUser,
  postUserSignIn,
  postUserSignUp,
  postUserLogout,
};
