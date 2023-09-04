import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Callback from "./components/Callback";
import authConfig from "./authConfig";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

function App() {

    const userManager = useMemo(() => new UserManager({
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        ...authConfig,
    }), []);

    function handleLogin() {
        userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
    }

    function handleLogout() {
        userManager.signoutRedirect();
    }

    const [authenticated, setAuthenticated] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        userManager.getUser().then((user) => {
            console.info(`Got user UserManager:`, user)
            if (user) {
                setAuthenticated(true);
                console.info(`setAuthenticated(true) called, authenticated=${authenticated}`)
            } else {
                setAuthenticated(false);
            }
        });
    }, [authenticated, userManager]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login authenticated={authenticated} handleLogin={handleLogin} />}
                />
                <Route
                    path="/callback"
                    element={
                        <Callback
                            authenticated={authenticated}
                            setAuthenticated={setAuthenticated}
                            userInfo={userInfo}
                            setUserInfo={setUserInfo}
                            handleLogout={handleLogout}
                            userManager={userManager}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
