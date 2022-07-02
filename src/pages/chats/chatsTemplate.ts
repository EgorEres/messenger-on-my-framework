const chatsTemplate: string = `<div class='wrapper'>
  <div class='list'>
    <header>
      <div class='profile-menu' id='go-to-settings'></div>
      <input class='search' placeholder="Поиск" />
    </header>

    <container>
      {{#each chats}}
        <div
          class='contact{{#if isActive}}-active{{/if}}'
          id='{{id}}'
        >
          {{title}}
        </div>
      {{/each}}
      </container>
    <footer>
      <div
        class='contact'
        id='create-new-chat'
      >
        <span>создать чат</span>
      </div>
      <div class='contact' id="go-to-500">
        <span>посмотреть 500</span>
      </div>
    </footer>
  </div>
  <div id='chat-section' class='section'></div>

  <div class='userList {{#if activeChat}}userList-show{{/if}}'>
    <container>
      {{#each users}}
        <div class='user'>
          {{display_name}}
        </div>
      {{/each}}
    </container>
    <footer>
      <div
        class='contact'
        id='add-user-to-chat'
      >
        <span>добавить пользователя</span>
      </div>
    </footer>
  </div>

  <div class='addChat_modal-wrapper {{#if showAddChatModal}}addChat_modal-wrapper_show{{/if}}'>
    <form class='addChat_modal-form' id='addChat-modal'>
      <h2>Введите название чата</h2>
      <div class='addChat_modal-buttons'>
        <input type="submit" value="Создать" form="addChat-modal">
        <button class="secondary-button" id="closeAddChatModal-button">Отмена</button>
      </div>
    </form>
  </div>

  <div
    class='addUserToChat_modal-wrapper {{#if showAddUserToChatModal}}addUserToChat_modal-wrapper_show{{/if}}'
  >
  <form class='addUserToChat_modal-form' id='addUserToChat-modal'>
    <h2>Что-бы добавить введите ID</h2>
    <div class='addUserToChat_modal-buttons'>
      <input type="submit" value="Добавить" form="addUserToChat-modal">
      <button class="secondary-button" id="closeAddUserModal-button">Отмена</button>
    </div>
  </form>
</div>

</div>`;

export const emptyChatTemplate: string = `<p class='chat_messages'>Что-бы начать общаться выберите чат</p>`;

export default chatsTemplate;
