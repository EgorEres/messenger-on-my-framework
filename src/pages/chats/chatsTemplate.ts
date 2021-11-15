const chatsTemplate: string = `<div class='_chats__wrapper'>
  <div class='_chats__list'>
    <header>
      <div class='_chats__profile-menu' id='go-to-settings'>S</div>
      <input class='_chats__search' placeholder="Поиск" />
    </header>

    <container>
      {{#each chats}}
        <div
          class='_chats__contact{{#if isActive}}-active{{/if}}'
          id='{{id}}'
        >
          {{name}}
        </div>
      {{/each}}
    </container>
    <footer>
      <div class='_chats__contact' id="go-to-500">
        <span>go to 500</span>
      </div>
    </footer>
  </div>
  <div id='chat-section' class='_chats__section'></div>
</div>`;

export const emptyChatTemplate: string = `<p class='_chats__messages'>Что-бы начать общаться выберите контакт или группу</p>`;

export default chatsTemplate;
