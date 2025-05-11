// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2>Личный кабинет</h2>
      {user ? (
        <>
          <p><strong>Имя:</strong> {user.first_name}</p>
          <p><strong>Фамилия:</strong> {user.last_name || 'Не указана'}</p>
          <p><strong>Username:</strong> @{user.username || 'не указан'}</p>
        </>
      ) : (
        <p>Данные пользователя не найдены.</p>
      )}
    </div>
  );
};

export default UserProfile;