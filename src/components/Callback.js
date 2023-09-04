import React, { useEffect, useState } from 'react';
import authConfig from '../authConfig';
import { Navigate } from 'react-router-dom';

const Callback = ({ authenticated, setAuthenticated, userManager, userInfo, setUserInfo, handleLogout }) => {

    console.debug(`[Callback.js] authenticated=${authenticated}, userInfo=`, userInfo)

    const [loginRequired, setLoginRequired] = useState(null);

    useEffect(() => {
        if (authenticated === null) {
            userManager.signinRedirectCallback().then((user) => {
                console.debug(`[Callback.js] Got user=`, user)
                if (user) {
                    setAuthenticated(true);
                    const access_token = user.access_token;
                    // Make a request to the userinfo endpoint using the access token.
                    fetch(authConfig.userinfo_endpoint, {
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    })
                        .then(response => response.json())
                        .then(userInfo => setUserInfo(userInfo))
                } else {
                    setAuthenticated(false);
                }
            }).catch((error) => {
                console.error(`[Callback.js] Having authenticated=${authenticated}, userManager.signinRedirectCallback() error:`, error)
                setAuthenticated(false);
                // Force the logout.
                handleLogout();
                setLoginRequired(true);
            });
        }
    }, [authenticated, userManager, setAuthenticated, setUserInfo, userInfo, handleLogout]);


    if (authenticated === true) {
        if (userInfo) {
            return <Navigate to="/home" />;
        } else {
            // Only try to process a login response if the state exists.
            // TODO
        }
    } else if (loginRequired) {
        return <Navigate to="/" />
    }
    else {
        return <div>Loading user info ...</div>;
    }

};

export default Callback;
