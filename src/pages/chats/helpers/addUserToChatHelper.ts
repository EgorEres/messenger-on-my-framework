import messengerApi from "../../../api/messenger-api";
import Input from "../../../components/Input/input";
import { SetPropsType } from "../../../modules/block";
import { PageChatsPropsType } from "../types";

const addUserToChatHelper = (
  element: HTMLElement,
  setProps: (nextProps: SetPropsType) => void,
  props: PageChatsPropsType
) => {
  const addElement = element.querySelector("#add-user-to-chat");
  if (addElement) {
    addElement.addEventListener("click", () => {
      setProps({ showAddUserToChatModal: true });
    });
  }

  const closeButton = element.querySelector("#closeAddUserModal-button");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      setProps({ showAddUserToChatModal: false });
    });
  }

  const form = element.querySelector("#addUserToChat-modal") as HTMLFormElement;
  if (form) {
    const inputContent = new Input(props.addUserInput).getContent();
    form.appendChild(inputContent);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const userId: string = formData.get("user_id") as string;
      if (!userId) {
        setProps({
          addUserInput: {
            ...props.addUserInput,
            error: "Поле не должно быть пустым",
            inputErrorClassName: "_global-style__error-validation",
          },
        });
      } else {
        messengerApi.addUsersToChat({ users: [Number(userId)], chatId: props.activeChat! }).then(() => {
          messengerApi.getUsersByChat(props.activeChat!).then((res) => {
            setProps({
              users: res,
              showAddUserToChatModal: false,
            });
          });
        });
      }
    });
  }
};

export default addUserToChatHelper;
