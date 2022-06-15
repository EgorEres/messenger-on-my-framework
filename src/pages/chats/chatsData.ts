import { PageChatsPropsType } from "./types";

const data: PageChatsPropsType = {
  chats: [],
  users: [
    {
      id: 123,
      first_name: "petya",
      second_name: "petrov",
      display_name: "petya petrov",
      login: "my-login",
      email: "my@email.com",
      phone: "89223332211",
      avatar: "/path/to/my-file.jpg",
      role: "admin",
    },
  ],
  addChatInput: {
    name: "Название",
    type: "text",
    inputName: "chat_name",
    id: "input-chat_name",
    value: "",
  },
  addUserInput: {
    name: "Идентификатор пользователя",
    type: "number",
    inputName: "user_id",
    id: "input-user_id",
    value: "",
  },
  activeChat: null,
  showAddChatModal: false,
  showAddUserToChatModal: false,
};

export default data;
