import { InputProps } from "../../components/Input/input";

export type ChatType = {
  name: string;
  id: number;
};

export type PageChatsPropsType = {
  chats: ChatType[];
  users: any[];
  activeChat: number | null;
  showAddChatModal: boolean;
  showAddUserToChatModal: boolean;
  addChatInput: InputProps;
  addUserInput: InputProps;
};
