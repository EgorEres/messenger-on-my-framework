const inputTemplate: string = `
  <div class="{{className}}">
    <span>{{name}}</span>
    <input
      {{#if id}}
        id='{{id}}'
      {{/if}}
      name='{{inputName}}'
      type='{{type}}'
    />
  </div>
`;

export default inputTemplate;
