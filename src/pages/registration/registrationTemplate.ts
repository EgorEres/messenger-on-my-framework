const registrationTemplate = `<div class='_registration__registration-wrapper'>
  <div class='_registration__registration-block'>
    <h2>Регистрация</h2>
    <div class='_registration__inputs-block'>
      {{#each inputs}}
        {{{input}}}
      {{/each}}
    </div>
    <span id="_registration__error"></span>
    <div class='_registration__buttons-block'>
      {{#each buttons}}
        {{{button}}}
      {{/each}}
    </div>
  </div>
</div>`;

export default registrationTemplate;
