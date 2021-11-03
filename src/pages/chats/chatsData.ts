// import { PageChatsProps } from "./interfaces";

const data = {
  urlToSettings: "./settings.html",
  chats: [
    {
      id: "chat-kvjvwh3g1",
      name: "Jordan Walke",
      isActive: false,
    },
    {
      id: "chat-kvjvwh3g2",
      name: "Sebastian Markbåge",
      isActive: false,
    },
    {
      id: "chat-kvjvwh3g3",
      name: "Dan Abramov",
      isActive: false,
    },
    {
      id: "chat-kvjvwh3g4",
      name: "Rachel Nabors",
      isActive: false,
    },
    {
      id: "chat-kvjvwh3g5",
      name: "Andrew Clark",
      isActive: false,
    },
  ],
  messages: {
    "chat-kvjvwh3g1": [
      {
        direction: "from",
        type: "text",
        createdAt: 1635962424487,
        message: "Hi",
      },
      {
        direction: "to",
        type: "text",
        createdAt: 1635962424487,
        message: "Oy, hello Jordan",
      },
    ],
    "chat-kvjvwh3g2": [
      {
        direction: "from",
        type: "text",
        createdAt: 1635962424487,
      },
    ],
    "chat-kvjvwh3g3": [],
    "chat-kvjvwh3g4": [
      {
        direction: "from",
        type: "text",
        createdAt: 1635962424487,
      },
    ],
    "chat-kvjvwh3g5": [
      {
        direction: "from",
        type: "text",
        createdAt: 1635962424487,
      },
    ],
  },
  // activeChats: {"chat-kvjvwh3g1": true, id: true, id: true},
  activeChats: [],
  emptyText: "Что-бы начать общаться выберите контакт или группу",
};

export default data;
