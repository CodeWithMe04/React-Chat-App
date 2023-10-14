      import React, { useState } from 'react';
      import './App.css';

      export default function App() {
        const [name, setName] = useState('arin');
        const [chats, setChats] = useState([
          { name: 'ansh', message: 'hi' },
          { name: 'arin', message: 'hello' },
        ]);
        const [msg, setMsg] = useState('');

        const sendChat = () => {
          const newChats = [...chats];
          newChats.push({ name, message: msg });
          setChats(newChats);
          setMsg(''); // Clear the message input after sending
        };

        return (
          <div>
            {!name ? (
              <div>
                <input
                  type="text"
                  placeholder="Enter your name to chat"
                  onBlur={(e) => setName(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <h1>User: {name}</h1>
                <div className="chat-container">
                  {chats.map((c, index) => (
                    <div
                      key={index}
                      className={`container ${c.name === name ? 'me' : ''}`}
                    >
                      <p className="chatbox">
                        <strong>{c.name}: </strong>
                        <span>{c.message}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="btm">
                  <input
                    type="text"
                    onInput={(e) => setMsg(e.target.value)}
                    value={msg}
                    placeholder="Enter your message"
                  />
                  <button onClick={sendChat}>Send</button>
                </div>
              </div>
            )}
          </div>
        );
      }
