const settingsTemplate = `<div class='_global-style__position-on-center _settings__wrapper'>
  <div class='_settings__settings-block'>
    <div class='_settings__avatar'>Avatar</div>
    <form class='_settings__inputs-block' id='settings-form' /></from>

    <div class='_settings__button-save'>
      <input type="submit" value="{{submitButtonText}}" form="settings-form">
      {{{button}}}
    </div>
  </div>

</div>`;

export default settingsTemplate;
