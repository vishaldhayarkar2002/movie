import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (!isAuthenticated) return null; // Hide button if not logged in

    return (
        <button
            className="btn btn-primary mx-5 my-5 px-4"
            onClick={() => {
                logout({ returnTo: window.location.origin });
                navigate('/'); 
            }}
        >
            Log Out
        </button>
    );
};

export default LogoutButton;