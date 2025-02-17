import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log('isAuthenticated:', isAuthenticated);
    console.log('user:', user);

    if (isLoading) {
        return <h1 className="text-center text-primary">Loading...</h1>;  
    }

    if (!isAuthenticated || !user) {
        return (
            <>
                <h1 className="text-center text-danger">Please log in to view your profile.</h1> 
            </>
        );
    }
    else if (isAuthenticated && user) {
        return (
            <>
                <div className="container">
                    <p className="userInfo" id="userInfo1">Name: {user.name}</p>
                    <p className="userInfo" id="userInfo2">Given Name: {user.given_name}</p>
                    <p className="userInfo" id="userInfo3">Family Name: {user.family_name}</p>
                    <p className="userInfo" id="userInfo4">Email: {user.email}</p>
                </div>
                <LogoutButton />
            </>
        );
    }
    
};

export default Profile;
