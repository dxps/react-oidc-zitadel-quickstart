import { Navigate } from "react-router-dom";

const Login = ({ authenticated, handleLogin }) => {
    console.debug(`[Login.js] authenticated=${authenticated}`)
    return (
        <div>
            {authenticated === null && <div>Login is in progress ...</div>}
            {authenticated === false && (
                <div>
                    <h1>Welcome!</h1>
                    <button
                        onClick={() => {
                            // Perform the authorization request, including the code challenge.
                            handleLogin();
                        }}
                    >
                        Please log in
                    </button>
                </div>
            )}
            {authenticated && <Navigate to="/callback" />}
        </div>
    );
};

export default Login;
