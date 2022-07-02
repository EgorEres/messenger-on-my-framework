const messengerTemplate = `<div id="id" class="messages-list">
  {{#each messages}}
    <p class='message-direction-{{direction}}'>{{createdAt}}: {{message}}</p>
  {{/each}}
</div>`;

export default messengerTemplate;
