import settingsApi from "../../../api/settings-api";

const changePassHelper = (element, setProps, avatarProps) => {
  const avatarForm = element.querySelector("#avatar-input-from") as HTMLFormElement;
  element.querySelector("#avatar-input")?.addEventListener("change", (e) => {
    const [file] = e.target.files;
    if (!file.type.includes("image")) {
      setProps({
        avatar: {
          ...avatarProps,
          errorLoad: "Неверный формат аватарки, должно быть изображение",
        },
      });
    } else {
      const avatarFormData = new FormData(avatarForm);
      settingsApi.updateAvatar(avatarFormData).then((res) => {
        setProps({
          avatar: {
            url: res.avatar,
            errorLoad: res.errorText || "",
            isSuccessLoad: !!res.avatar,
          },
        });
        const user = localStorage.getItem("user");
        const userParse = user ? JSON.parse(user) : {};
        const newUserData = { ...userParse, avatar: res.avatar };
        localStorage.setItem("user", JSON.stringify(newUserData));
      });
    }
  });
};

export default changePassHelper;
