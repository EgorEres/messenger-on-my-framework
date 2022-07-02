import messengerApi from "../../../api/messenger-api";
import Input, { InputProps } from "../../../components/Input/input";
import { SetPropsType } from "../../../modules/block";

const setCreateChatListenersHelper = (
  element: HTMLElement,
  setProps: (nextProps: SetPropsType) => void,
  input: InputProps
) => {
  const createElement = element.querySelector("#create-new-chat");
  if (createElement) {
    createElement.addEventListener("click", () => {
      setProps({ showAddChatModal: true });
    });
  }

  const closeBtn = element.querySelector("#closeAddChatModal-button");
  if (closeBtn) {
    element.querySelector("#closeAddChatModal-button")?.addEventListener("click", () => {
      setProps({ showAddChatModal: false });
    });
  }
  const form = element.querySelector("#addChat-modal") as HTMLFormElement;
  if (form) {
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
            inputErrorClassName: "error-validation",
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
  }
};

export default setCreateChatListenersHelper;
