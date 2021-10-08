export const settingsTemplate = `<div class='_global-style__position-on-center _settings__wrapper'>
  <div>
    <div class='_settings__avatar'>Avatar</div>
    <div>
      <div class='_settings__inputs-block'>
        {{#each inputs}}
          <span>{{this.name}}</span>
          <input name='{{this.inputName}}' type='{{this.type}}' />
        {{/each}}
      </div>
    </div>
    <div>
      <div class='_settings__inputs-block'>
        <div class='_settings__password_tip'>Для смены пароля введите новый и подтвердите</div>
        {{#each passInputs}}
          <span>{{this.name}}</span>
          <input name='{{this.inputName}}' type='{{this.type}}' />
        {{/each}}
        <div class='_settings__button-save'>
          <button><a href="./">Выйти</a></button>
          <button><a href="./chats.html">Сохранить</a></button>
        </div>
      </div>
    </div>
  </div>
</div>`

