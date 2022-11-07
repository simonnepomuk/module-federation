import React from 'react';

const sendMessage = () => {
  const event = new CustomEvent('sendMessage', { message: 'Hello MFE!' });
  window.dispatchEvent(event);
};

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2</h1>
      <button onClick={sendMessage()}>Send Message</button>
    </div>
  );
};

export default App;
