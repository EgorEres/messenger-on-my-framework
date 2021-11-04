export default function render(component) {
  const root = document.getElementById("app-root") as HTMLElement;

  if (!root) {
    throw new Error("not found app-root element");
  }
  root.append(component.getContent());
  return root;
}
