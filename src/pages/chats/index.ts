import "./chats.css";
import chatsTemplate, { emptyChatTemplate } from "./chatsTemplate";
import Block from "../../modules/block";
import data from "./chatsData";
import Messenger from "./chatComponents/massanger/index";
import router from "../../router";
import messengerApi from "../../api/messenger-api";
import createChatHelper from "./helpers/createChatHelper";
import setActiveChatHelper from "./helpers/setActiveChatHelper";
import addUserToChatHelper from "./helpers/addUserToChatHelper";

class Chats extends Block {
  constructor() {
    super(chatsTemplate, data);
  }

  componentWillMount() {
    messengerApi.getChats().then((chats) => {
      this.setProps({ chats });
    });
    // if (this.props.activeChats.length) {
    //   const newChatsList = this.props.chats.map((chat) => {
    //     if (this.props.activeChats.includes(chat.id)) {
    //       return { ...chat, isActive: true };
    //     }
    //     return chat;
    //   });
    //   this.setProps({ chats: newChatsList });
    // }
  }

  componentDidMount() {
    const chatSectionNode = this._element.querySelector("#chat-section") as Element;

    setActiveChatHelper(this._element, this.setProps, this.props.chats);
    createChatHelper(this._element, this.setProps, this.props.addChatInput);
    addUserToChatHelper(this._element, this.setProps, this.props);

    // отрисовываем чаты
    if (this.props.activeChats) {
      const chatData = this.props.chats.find(({ id }) => this.props.activeChats === id);
      const messengerContent = new Messenger({
        ...chatData,
        messages: [],
      }).getContent();
      chatSectionNode.appendChild(messengerContent);
    } else {
      chatSectionNode.innerHTML = emptyChatTemplate;
    }

    // temporary listeners for routing
    this._element.querySelector("#go-to-500")?.addEventListener("click", () => router.go("/500"));

    this._element.querySelector("#go-to-settings")?.addEventListener("click", () => router.go("/settings"));
  }
}

export default Chats;
