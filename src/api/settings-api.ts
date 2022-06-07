import HTTPTransport from "./HTTPTransport";

function updateProfile(data) {
  return HTTPTransport.put("/user/profile", {
    data: JSON.stringify(data),
  })
    .then((res: XMLHttpRequest) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }

      return JSON.parse(res.response);
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Не удалось, попробуйте позднее" };
    });
}

function updateAvatar(file) {
  return HTTPTransport.put("/user/profile/avatar", {
    data: file,
    headers: { accept: "application/json" },
  })
    .then((res: XMLHttpRequest) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return JSON.parse(res.response);
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Не удалось, попробуйте позднее" };
    });
}

function updatePassword(data) {
  return HTTPTransport.put("/user/password", { data: JSON.stringify(data) })
    .then((res: XMLHttpRequest) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return JSON.parse(res.response);
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Не удалось, попробуйте позднее" };
    });
}

export default {
  updateProfile,
  updateAvatar,
  updatePassword,
};
