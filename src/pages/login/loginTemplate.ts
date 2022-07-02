const loginTemplate: string = `<div class='login-wrapper'>
  <div class='login-block'>
    <h2>Вход</h2>
    <form id='login-form' name='login-form' class='inputs-block'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </form>
    <p id="mainError">{{mainError}}</p>
    <div class='buttons-block'>
      <input type="submit" value="{{loginButtonText}}" form="login-form">
      {{{button}}}
    </div>
  </div>
</div>`;

export default loginTemplate;
