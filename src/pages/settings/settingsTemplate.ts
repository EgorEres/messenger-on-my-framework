const settingsTemplate = `<div class='_global-style__position-on-center _settings__wrapper'>
  <div class='_settings__close-button' id='settings-closeButton'></div>
  <div class='_settings__settings-block'>
    <div class='_settings__avatar'>Avatar</div>

    <form class='_settings__inputs-block' id='settings-form'></form>

    <div class='_settings__button-save'>
      <input type="submit" value="Сохранить" form="settings-form">
      <button class="_global-style__secondary-button" id="logout-button">Выйти</button>
    </div>
  </div>

</div>`;

export default settingsTemplate;
