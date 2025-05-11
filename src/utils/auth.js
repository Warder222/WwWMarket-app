// src/utils/auth.js
export const getUserData = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    return window.Telegram.WebApp.initDataUnsafe.user;
  }
  return null;
};