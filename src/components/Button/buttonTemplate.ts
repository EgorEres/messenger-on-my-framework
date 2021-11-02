const buttonTemplate: string = `<button
  {{#if className}}
    class="{{className}}"
  {{/if}}

  {{#if id}}
    id='{{id}}'
  {{/if}}

  {{#if type}}
    id='{{type}}'
  {{/if}}

  {{#if form}}
    form='{{form}}'
  {{/if}}

>{{buttonText}}</button>`;

export default buttonTemplate;
