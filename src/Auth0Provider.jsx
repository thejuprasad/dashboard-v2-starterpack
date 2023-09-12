// src/Auth0Provider.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-m55t17jswogupmgy.us.auth0.com'; // Replace with your Auth0 domain
  const clientId = 'u5V9uis9mWoD3jDXb8Tq4bwx2k3ju3b6'; // Replace with your Auth0 client ID

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
