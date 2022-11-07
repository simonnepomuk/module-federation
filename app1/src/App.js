import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  const [message, setMessage] = React.useState('No message received yet...');

  React.useEffect(() => {
    window.addEventListener('sendMessage', (event) => {
      console.log(event);
      setMessage(event.message);
    });
    return () => {
      window.removeEventListener('sendMessage');
    };
  }, []);
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
