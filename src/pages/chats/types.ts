export type PageChatsPropsType = {
  chats: {
    name: string;
  }[];
  users: any[];
  activeChat: string | null;
  showAddChatModal: boolean;
  showAddUserToChatModal: boolean;
  addChatInput: {
    name: string;
    type: string;
    inputName: string;
    id: string;
    value: string;
  };
  addUserInput: {
    name: string;
    type: string;
    inputName: string;
    id: string;
    value: string;
  };
};
