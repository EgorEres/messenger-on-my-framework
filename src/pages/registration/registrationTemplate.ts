const registrationTemplate = `<div class='registration-wrapper'>
  <div class='registration-block'>
    <h2>Регистрация</h2>
    <form class='inputs-block' id='registration-form'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </form>

    <p id="mainError">{{mainError}}</p>
    
    <div class='buttons-block'>
      <input type="submit" value="Зарегистрироваться" form="registration-form">
      {{{button}}}
    </div>
  </div>
</div>`;

export default registrationTemplate;
