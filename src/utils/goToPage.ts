export default function goToPage(url: string) {
  if (url === "login") {
    window.location.assign("/");
  } else {
    window.location.assign(`./${url}.html`);
  }
}
