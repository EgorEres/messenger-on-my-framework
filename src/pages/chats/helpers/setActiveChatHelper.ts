import messengerApi from "../../../api/messenger-api";
import { SetPropsType } from "../../../modules/block";
import { ChatType } from "../types";

const setActiveChatHelper = (element: HTMLElement, setProps: (nextProps: SetPropsType) => void, chats: ChatType[]) => {
  const container = element.querySelector("container");
  if (container) {
    container.addEventListener("click", (e: any) => {
      const chatId = e.target.id;
      if (chatId) {
        messengerApi.getUsersByChat(chatId).then((res) => {
          setProps({ users: res });
        });
      }

      setProps({
        activeChat: chatId,
        chats: chats.map((chat) =>
          chat.id.toString() === chatId ? { ...chat, isActive: true } : { ...chat, isActive: false }
        ),
      });
    });
  }
};

export default setActiveChatHelper;
