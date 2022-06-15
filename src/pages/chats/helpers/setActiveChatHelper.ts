import messengerApi from "../../../api/messenger-api";

const setActiveChatHelper = (element, setProps, chats) => {
  element.querySelector("container")?.addEventListener("click", (e) => {
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
};

export default setActiveChatHelper;
