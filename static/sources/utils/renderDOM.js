export function render(query, block) {
    const root = document.querySelector(query);
    if (!root) {
        throw new Error('query selector not found');
    }
    root.appendChild(block.getContent());
    return root;
}
