import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user}=useContext(UserContext)

    if(!user)
    return <h1>Please Login</h1>
    else
    return <h1>Welcome {user}</h1>
}

export default Profile