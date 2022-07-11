import { AddUsersToChatDataType, CreateChatDataType, RemoveUsersFromChatDataType } from "./apiTypings";
import HTTPTransport from "./HTTPTransport";

function getChats() {
  return HTTPTransport.get("/chats")
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

function createNewChats(data: CreateChatDataType) {
  return HTTPTransport.post("/chats", {
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

function getUsersByChat(id: number) {
  return HTTPTransport.get(`/chats/${id}/users`)
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

function addUsersToChat(data: AddUsersToChatDataType) {
  return HTTPTransport.put("/chats/users", {
    data: JSON.stringify(data),
  })
    .then((res: XMLHttpRequest) => {
      if (res.status !== 200) {
        const errorText = JSON.parse(res.response)?.reason;
        return { errorText };
      }
      return res.response;
    })
    .catch((err) => {
      console.error(err);
      return { errorText: "Не удалось, попробуйте позднее" };
    });
}

function removeUsersFromChat(data: RemoveUsersFromChatDataType) {
  return HTTPTransport.delete("/chats/users", {
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

export default {
  getChats,
  createNewChats,
  getUsersByChat,
  addUsersToChat,
  removeUsersFromChat,
};
