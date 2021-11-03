const loginTemplate: string = `<div class='_login__login-wrapper'>
  <div class='_login__login-block'>
    <h2>Вход</h2>
    <form id='login-form' name='login-form' class='_login__inputs-block'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </form>

    <div class='_login__buttons-block'>
      <input type="submit" value="{{loginButtonText}}" form="login-form">
      {{{button}}}
    </div>
  </div>
</div>`;

export default loginTemplate;
