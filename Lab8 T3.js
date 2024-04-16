import React, { useState } from 'react';
const MessagingApp = () => {
const [conversations, setConversations] = useState([
{ id: 1, name: 'Family', messages: [] },
{ id: 2, name: 'Friends', messages: [] },
]);
const [selectedConversation, setSelectedConversation] = useState(null);
const [newMessage, setNewMessage] = useState('');
const handleConversationClick = (conversationId) => {
setSelectedConversation(conversationId);
};
const handleSendMessage = () => {
if (newMessage.trim() !== '' && selectedConversation) {
const updatedConversations = conversations.map((conversation) =>
conversation.id === selectedConversation
? {
...conversation,
messages: [
{ text: newMessage, timestamp: new Date().toLocaleTimeString() },
...conversation.messages,
],
}
: conversation
);
setConversations(updatedConversations);
setNewMessage('');
}
};
return (
<div>
<h1>Messaging App</h1>
<div style={{ display: 'flex' }}>
{/* List of Conversations */}
<div style={{ flex: '1', borderRight: '1px solid #ccc', padding: '10px' }}>
<h2>Conversations</h2>
<ul>
{conversations.map((conversation) => (
<li key={conversation.id} onClick={() =>
handleConversationClick(conversation.id)}>
{conversation.name}
</li>
))}
</ul>
</div>
{/* Chat Interface */}
<div style={{ flex: '3', padding: '10px' }}>
{selectedConversation && (
<div>
<h2>Chat with {conversations.find((conv) => conv.id ===
selectedConversation).name}</h2>
<div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc',
padding: '10px' }}>

{conversations
.find((conv) => conv.id === selectedConversation)
.messages.map((message, index) => (
<div key={index} style={{ borderBottom: '1px solid #eee', paddingBottom:
'5px' }}>
<strong>{message.timestamp}</strong>: {message.text}
</div>
))}
</div>
<textarea
rows="3"
value={newMessage}
onChange={(e) => setNewMessage(e.target.value)}
/>
<button onClick={handleSendMessage}>Send</button>
</div>
)}
</div>
</div>
</div>
);
};
export default MessagingApp;
