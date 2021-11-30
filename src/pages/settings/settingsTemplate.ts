const settingsTemplate = `<div class='_global-style__position-on-center _settings__wrapper'>
  <div class='_settings__close-button' id='settings-closeButton'></div>
  <form id='avatar-input-from'>
    <input type="file" id="avatar-input" name="avatar" class="_settings__avatar-input">
  </form>
  <div class='_settings__settings-block'>
    <div class='_settings__avatar _settings__avatar{{#if avatar.isSuccessLoad}}-successLoad{{/if}}{{#if avatar.errorLoad}}-errorLoad{{/if}}'>
    <label for="avatar-input">
      {{#if avatar.url}}
        <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar.url}}">
      {{/if}}
      Avatar
    </label>
    </div>
    <p>
    {{#if avatar.isSuccessLoad}}
      Новое изображение успешно загружено
    {{/if}}

    {{#if avatar.errorLoad}}
      {{avatar.errorLoad}}
    {{/if}}
    </p>


    <form class='_settings__inputs-block' id='settings-form'></form>

    <div class='_settings__button-save'>
      <input type="submit" value="Сохранить" form="settings-form">
      <button class="_global-style__secondary-button" id="logout-button">Выйти</button>
    </div>
  </div>

</div>`;

export default settingsTemplate;
