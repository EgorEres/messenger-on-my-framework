const messengerTemplate = `<div id="id" class="_chats__messages-list">
  {{#each messages}}
    <p class='_chats__message-direction-{{direction}}'>{{createdAt}}: {{message}}</p>
  {{/each}}
</div>`;

export default messengerTemplate;
