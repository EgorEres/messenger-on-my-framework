const loginTemplate = `<div class='_login__login-wrapper'>
  <div class='_login__login-block'>
    <h2>Вход</h2>
    <div class='_login__inputs-block'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </div>
    <div class='_login__buttons-block'>
      {{#each buttons}}
        {{{button}}}
      {{/each}}
    </div>
    </div>
</div>`;

export default loginTemplate;
