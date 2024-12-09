const allMessages = [
  { conversationId: 1, message: 'Hello, World!' },
  { conversationId: 2, message: 'How are you?' },
  { conversationId: 3, message: 'Goodbye!' },
  { conversationId: 1, message: 'What are you doing?' },
  { conversationId: 2, message: 'I am good.' },
  { conversationId: 3, message: 'See you later!' },
  { conversationId: 1, message: 'Goodbye!' },
  { conversationId: 2, message: 'Goodbye!' },
  { conversationId: 3, message: 'Goodbye!' },
];

const conversations = allMessages.reduce((acc, message) => {
  const { conversationId, message: messageText } = message;
  if (!acc[conversationId]) {
    acc[conversationId] = [];
  }
  acc[conversationId].push(messageText);
  return acc;
}, {});

console.log(null===null);