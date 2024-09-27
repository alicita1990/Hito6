import React, { useContext } from 'react';
import { UserContext } from '../context/Usercontext';

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
