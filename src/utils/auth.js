// src/utils/auth.js
export const getUserData = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    return window.Telegram.WebApp.initDataUnsafe.user;
  }
  return null;
};