import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Личный кабинет</h2>
      <p>Имя: {user.first_name}</p>
      <p>Фамилия: {user.last_name}</p>
      <p>Username: @{user.username}</p>
    </div>
  );
};

export default UserProfile;