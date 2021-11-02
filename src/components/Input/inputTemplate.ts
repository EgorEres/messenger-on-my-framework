const inputTemplate: string = `
  <span>{{name}}</span>
  <input
    {{#if id}}
      id='{{id}}'
    {{/if}}
    name='{{inputName}}'
    type='{{type}}'
  />
`;

export default inputTemplate;
