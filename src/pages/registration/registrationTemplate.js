export const registrationTemplate = `<div class='_registration__registration-wrapper'>
  <div class='_registration__registration-block'>
    <h2>Регистрация</h2>
    <div class='_registration__inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='_registration__buttons-block'>
      <button id='registration-sign-up'><a href="./chats.html">Зарегистрироваться</a></button>
      <button id='registration-sign-in'><a href="./">Войти</a></button>
    </div>
  </div>
</div>`