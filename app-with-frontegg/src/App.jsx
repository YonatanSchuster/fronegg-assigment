import './App.css';
// import { useEffect } from 'react';

import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';

import { AdminPortal } from '@frontegg/react';
import { useAuthActions } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();

  const handleClick = () => {
    AdminPortal.show();
  };

  const handleSwitchTenant = () => {
    switchTenant({ tenantId: 'new-tenant-id' });
  };

  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  // loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className='App'>
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={handleClick}>Settings</button>
          </div>
          <div>
            <button onClick={handleSwitchTenant}>Select Active Tenant</button>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
