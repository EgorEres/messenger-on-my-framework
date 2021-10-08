export const chatsTemplate = `<div>
  <div class='_chats__wrapper'>
    <div class='_chats__list'>
      <div class='_chats__search-wrapper'>
        {{!-- [TODO] change this to burger image --}}
        <div class='_chats__profile-menu'><a href="{{urlToSettings}}">S</a></div>
        <input class='_chats__search' placeholder="Поиск" />
      </div>

      {{#each chats}}
        <div class='_chats__contact'>
          <span>{{this.name}}</span>
        </div>
      {{/each}}

      <a href="./500.html">
        <div class='_chats__contact'>
          <span>go to 500</span>
        </div>
      </a>

      <a href='./404.html'>
        <div class='_chats__contact'>
          <span>go to 404</span>
        </div>
      </a>
    </div>
    <div class='_chats__messages'>
      <div class='_global-style__position-on-center _chats__messages-list'>
        <span class='_chats__messages-place'>
          {{emptyText}}
        </span>
      </div>

      <input type="text" class='_chats__message-input' />
    </div>
  </div>
</div>`