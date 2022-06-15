const chatsTemplate: string = `<div class='_chats__wrapper'>
  <div class='_chats__list'>
    <header>
      <div class='_chats__profile-menu' id='go-to-settings'></div>
      <input class='_chats__search' placeholder="Поиск" />
    </header>

    <container>
      {{#each chats}}
        <div
          class='_chats__contact{{#if isActive}}-active{{/if}}'
          id='{{id}}'
        >
          {{title}}
        </div>
      {{/each}}
      </container>
    <footer>
      <div
        class='_chats__contact'
        id='create-new-chat'
      >
        <span>создать чат</span>
      </div>
      <div class='_chats__contact' id="go-to-500">
        <span>посмотреть 500</span>
      </div>
    </footer>
  </div>
  <div id='chat-section' class='_chats__section'></div>

  <div class='_chats__userList {{#if activeChat}}_chats__userList-show{{/if}}'>
    <container>
      {{#each users}}
        <div class='_chats__user'>
          {{display_name}}
        </div>
      {{/each}}
    </container>
    <footer>
      <div
        class='_chats__contact'
        id='add-user-to-chat'
      >
        <span>добавить пользователя</span>
      </div>
    </footer>
  </div>

  <div class='_chats__addChat_modal-wrapper {{#if showAddChatModal}}_chats__addChat_modal-wrapper_show{{/if}}'>
    <form class='_chats__addChat_modal-form' id='addChat-modal'>
      <h2>Введите название чата</h2>
      <div class='_chats__addChat_modal-buttons'>
        <input type="submit" value="Создать" form="addChat-modal">
        <button class="_global-style__secondary-button" id="closeAddChatModal-button">Отмена</button>
      </div>
    </form>
  </div>

  <div
    class='_chats__addUserToChat_modal-wrapper {{#if showAddUserToChatModal}}_chats__addUserToChat_modal-wrapper_show{{/if}}'
  >
  <form class='_chats__addUserToChat_modal-form' id='addUserToChat-modal'>
    <h2>Что-бы добавить введите ID</h2>
    <div class='_chats__addUserToChat_modal-buttons'>
      <input type="submit" value="Добавить" form="addUserToChat-modal">
      <button class="_global-style__secondary-button" id="closeAddUserModal-button">Отмена</button>
    </div>
  </form>
</div>

</div>`;

export const emptyChatTemplate: string = `<p class='_chats__messages'>Что-бы начать общаться выберите чат</p>`;

export default chatsTemplate;
