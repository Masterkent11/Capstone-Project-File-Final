import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="">
          <div className="">
            <GoogleOAuthProvider 
                clientId="1028814407207-gu8d0bcn6k4mitf26sfciu3g6dj5ft53.apps.googleusercontent.com"
                >
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                   Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
          </div>
    </div>
  )
}

export default GoogleLoginPage