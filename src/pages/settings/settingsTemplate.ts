const settingsTemplate = `<div class='_global-style__position-on-center _settings__wrapper'>
  <div class='_settings__settings-block'>
    <div class='_settings__avatar'>Avatar</div>
    <div>
      <div class='_settings__inputs-block'>
        {{#each inputs}}
          {{{input}}}
        {{/each}}
      </div>
    </div>
    <div>
      <div class='_settings__inputs-block'>
        <div class='_settings__password_tip'>Для смены пароля введите новый и подтвердите</div>
          {{#each inputs}}
            {{{passInput}}}
          {{/each}}
        <span id="_settings__error"></span>

        <div class='_settings__button-save'>
          {{#each buttons}}
            {{{button}}}
          {{/each}}
        </div>
      </div>
    </div>
  </div>
</div>`;

export default settingsTemplate;
