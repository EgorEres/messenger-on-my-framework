const registrationTemplate = `<div class='_registration__registration-wrapper'>
  <div class='_registration__registration-block'>
    <h2>Регистрация</h2>
    <form class='_registration__inputs-block' id='registration-form'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </form>

    <p id="mainError">{{mainError}}</p>
    
    <div class='_registration__buttons-block'>
      <input type="submit" value="Зарегистрироваться" form="registration-form">
      {{{button}}}
    </div>
  </div>
</div>`;

export default registrationTemplate;
