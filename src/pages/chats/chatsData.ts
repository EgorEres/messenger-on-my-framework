import { PageChatsPropsType } from "./types";

const data: PageChatsPropsType = {
  chats: [],
  users: [],
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
