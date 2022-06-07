import "./chats.css";
import chatsTemplate, { emptyChatTemplate } from "./chatsTemplate";
import Block from "../../modules/block";
import data from "./chatsData";
import Messenger from "./chatComponents/massanger/index";
import router from "../../router";

class Chats extends Block {
  constructor() {
    super(chatsTemplate, data);
  }

  componentWillMount() {
    if (this.props.activeChats.length) {
      const newChatsList = this.props.chats.map((chat) => {
        if (this.props.activeChats.includes(chat.id)) {
          return { ...chat, isActive: true };
        }
        return chat;
      });
      this.setProps({ chats: newChatsList });
    }
  }

  componentDidMount() {
    const chatSectionNode = this._element.querySelector("#chat-section") as Element;

    // отрисовываем чаты
    if (this.props.activeChats.length) {
      this.props.activeChats.forEach((chatId) => {
        const chatData = this.props.chats.find(({ id }) => chatId === id);
        const messengerContent = new Messenger({
          ...chatData,
          messages: this.props.messages[chatData.id],
        }).getContent();
        chatSectionNode.appendChild(messengerContent);
      });
    } else {
      chatSectionNode.innerHTML = emptyChatTemplate;
    }

    this._element.querySelector("container")?.addEventListener("click", (e: { target }) => {
      const usedId = e.target.id;
      this.setProps({
        activeChats: [usedId],
        chats: this.props.chats.map((chat) =>
          chat.id === usedId ? { ...chat, isActive: true } : { ...chat, isActive: false }
        ),
      });
    });

    // temporary listeners for routing
    this._element.querySelector("#go-to-500")?.addEventListener("click", () => router.go("/500"));

    this._element.querySelector("#go-to-settings")?.addEventListener("click", () => router.go("/settings"));
  }
}

export default Chats;
