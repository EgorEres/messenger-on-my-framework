export const loginTemplate = `<div class='_login__login-wrapper'>
  <div class='_login__login-block'>
    <h2>Вход</h2>
    <div class='_login__inputs-block'>
      {{#each inputs}}
        <span>{{this.name}}</span>
        <input name='{{this.inputName}}' type='{{this.type}}' />
      {{/each}}
    </div>
    <div class='_login__buttons-block'>
      <button id='login-sign-in'><a href="./chats.html">Войти</a></button>
      <button id='login-sign-up'><a href="./registration.html">Зарегистрироваться</a></button>
    </div>
  </div>
</div>`
