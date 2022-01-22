export const UsePath = () => {
  return window.location.pathname;
};

export const UseRotaPrivada = () => {
  if (window.location.pathname === '/login' || window.location.pathname === '/') {
    return false;
  }
  return true;
};
