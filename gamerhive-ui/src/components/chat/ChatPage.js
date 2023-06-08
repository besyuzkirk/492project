// ChatPage.js
import React, { useState } from 'react';
import './ChatPage.scss';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Me', content: 'Hello there!', date: '2023-06-01' },
    { id: 2, sender: 'Jane', content: 'Hi Me!', date: '2023-06-02' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleMessageSend = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = {
        id: messages.length + 1,
        sender: 'Me',
        content: newMessage,
        date: new Date().toISOString().split('T')[0],
      };

      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-app-container">
      <div className="active-chat">
        <div className="chat-screen">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'Me' ? 'right' : 'left'}`}
              style={{
                backgroundColor: message.sender === 'Me' ? '#ff2a6d' : '#fff',
                color: message.sender === 'Me' ? '#fff' : '#000',
              }}
            >
              {message.sender === 'Me' ? (
                <div className="message-content">
                  {message.content}
                  <span className="date">{message.date}</span>
                </div>
              ) : (
                <div className="message-content">
                  <div className="sender">{message.sender}</div>
                  <div className="content">{message.content}</div>
                  <span className="date">{message.date}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={{ backgroundColor: '#fff', color: '#000' }}
          />
          <button onClick={handleMessageSend} style={{ backgroundColor: '#ff2a6d', color: '#fff' }}>
            Send
          </button>
        </div>
      </div>
      <div className="chat-history">
        <h2>Chat History</h2>
        <ul className="history-list">
          <li>
            <div className="history-card">
              <div className="profile-picture-s"></div>
              <div className="card-content-s">
                <div className="name">David</div>
                <div className="status online"></div>
              </div>
              <div className="date">2023-06-01</div>
            </div>
          </li>
          <li>
            <div className="history-card">
              <div className="profile-picture-s"></div>
              <div className="card-content-s">
                <div className="name">Sarah</div>
                <div className="status offline"></div>
              </div>
              <div className="date">2023-06-02</div>
            </div>
          </li>
          <li>
            <div className="history-card">
              <div className="profile-picture-s"></div>
              <div className="card-content-s">
                <div className="name">Michael</div>
                <div className="status online"></div>
              </div>
              <div className="date">2023-06-03</div>
            </div>
          </li>
          <li>
            <div className="history-card">
              <div className="profile-picture-s"></div>
              <div className="card-content-s">
                <div className="name">Emily</div>
                <div className="status offline"></div>
              </div>
              <div className="date">2023-06-04</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatPage;
