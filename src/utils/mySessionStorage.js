export const setSessionStorage = (key,data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getSessionStorage = (key) => {
  const dataString = sessionStorage.getItem(key);
  return dataString ? JSON.parse(dataString) : [];
};
