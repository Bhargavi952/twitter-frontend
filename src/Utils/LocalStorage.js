export const getData = (data) => {
    let loginData = localStorage.getItem(data)
    return loginData === null ? [] : JSON.parse(loginData)

};
export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
