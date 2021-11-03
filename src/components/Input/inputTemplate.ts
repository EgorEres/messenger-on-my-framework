const inputTemplate: string = `
  <label for='{{inputName}}'>{{name}}</label>
  <input
    {{#if id}}
      id='{{id}}'
    {{/if}}
    {{#if value}}
      value='{{value}}'
    {{/if}}
    name='{{inputName}}'
    type='{{type}}'
    class="{{inputErrorClassName}} {{className}}"
  />
  {{#if error}}
    <span class="_global-style__error-validation-input-error">{{error}}</span>
  {{/if}}
`;

export default inputTemplate;
