export type ChangePassType = {
  oldPassword: string;
  newPassword: string;
};

export type CreateChatDataType = {
  title: string;
};

export type AddUsersToChatDataType = {
  users: number[];
  chatId: number;
};

export type RemoveUsersFromChatDataType = {
  users: number[];
  chatId: number;
};
