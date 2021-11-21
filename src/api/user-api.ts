import HTTPTransport from "./HTTPTransport";

function getUser() {
  HTTPTransport.get("/auth/user")
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => console.log(err));

  return "sdf";
}

function postUserSignIn(data) {
  return HTTPTransport.post("/auth/signin", { data: JSON.stringify(data) })
    .then((res) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return res.response;
    })
    .catch((err) => console.log(err));
}

function postUserSignUp(data) {
  return HTTPTransport.post("/auth/signup", { data: JSON.stringify(data) })
    .then((res) => ({ response: res.response, code: res.code }))
    .catch((err) => console.log(err));
}

export default {
  getUser,
  postUserSignIn,
  postUserSignUp,
};

// email: "email@mail.ru"
// first_name: "string"
// login: "EropEropErop"
// password: "string"
// phone: "900-8009924"
// second_name: "string"
