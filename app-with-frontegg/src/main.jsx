import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-lwu2kycq5gqg.frontegg.com',
  clientId: '76321b66-640c-4c7a-b0e7-10602835ed6d',
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={false}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);
