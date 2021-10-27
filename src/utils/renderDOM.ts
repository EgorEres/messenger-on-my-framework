export default function render(query: string, block) {
  const root = document.querySelector(query) as Node;

  if (!root) {
    throw new Error("query selector not found");
  }

  root.appendChild(block.getContent());
  return root;
}
