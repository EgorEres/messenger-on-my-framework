import messengerApi from "../../../api/messenger-api";
import Input from "../../../components/Input/input";

const createChatHelper = (element, setProps, input) => {
  element.querySelector("#create-new-chat").addEventListener("click", () => {
    setProps({ showAddChatModal: true });
  });

  element.querySelector("#closeAddChatModal-button")?.addEventListener("click", () => {
    setProps({ showAddChatModal: false });
  });

  const form = element.querySelector("#addChat-modal") as HTMLFormElement;
  const inputContent = new Input(input).getContent();
  form.appendChild(inputContent);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title: string = formData.get("chat_name") as string;
    if (!title) {
      setProps({
        addChatInput: {
          ...input,
          error: "Поле не должно быть пустым",
          inputErrorClassName: "_global-style__error-validation",
        },
      });
    } else {
      messengerApi.createNewChats({ title }).then(() => {
        messengerApi.getChats().then((chats) => {
          setProps({
            chats,
            showAddChatModal: false,
          });
        });
      });
    }
  });
};

export default createChatHelper;
