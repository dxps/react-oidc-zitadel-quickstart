import { Navigate } from "react-router-dom";

const Home = ({ authenticated, userInfo, handleLogout }) => {

    console.debug(`[Home.js] authenticated=${authenticated}`);

    if (authenticated === true && userInfo) {
        return (
            <div>
                <h1>Welcome, {userInfo.name}!</h1>
                <h2>Your User Profile Information</h2>
                <h3>Name:  {userInfo.name}</h3>
                <h3>Email: {userInfo.email}</h3>
                <h3>Email Verified: {userInfo.email_verified ? "Yes" : "No"}</h3>
                <h3>Locale: {userInfo.locale}</h3>

                <button onClick={handleLogout}>Log out</button>
            </div>
        );
    } else {
        return <Navigate to="/" />;
    }
};

export default Home;
