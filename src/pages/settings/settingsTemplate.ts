const settingsTemplate = `<div class='position-on-center wrapper'>
  <div class='close-button' id='settings-closeButton'></div>
  <form id='avatar-input-from'>
    <input type="file" id="avatar-input" name="avatar" class="avatar-input">
  </form>
  <div class='settings-block'>
    <div class='avatar avatar{{#if avatar.isSuccessLoad}}-successLoad{{/if}}{{#if avatar.errorLoad}}-errorLoad{{/if}}'>
    <label for="avatar-input">
      {{#if avatar.url}}
        <img src="https://ya-praktikum.tech/api/v2/resources{{avatar.url}}">
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


    <form class='inputs-block' id='settings-form'></form>

    <div>
      <button class="secondary-button" id="changePass-button">Сменить пароль</button>
    </div>
    <div class='button-save'>
      <input type="submit" value="Сохранить" form="settings-form">
      <button class="secondary-button" id="logout-button">Выйти</button>
    </div>
  </div>

  <div class='change_pass_modal-wrapper {{#if showModal}}change_pass_modal-wrapper_show{{/if}}' id='changePass-modal'>
    <form class='change_pass_modal-form' id='changePass-form'>
      <h2>Смена пароля</h2>
      <div class='change_pass_modal-buttons'>
        <input type="submit" value="Обновить" form="changePass-form">
        <button class="secondary-button" id="closeModal-button">Отмена</button>
      </div>
    </form>
  </div>

</div>`;

export default settingsTemplate;
