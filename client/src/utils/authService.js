function clearUserData() {
  localStorage.removeItem(`user`);
}
function getUserData() {
  let user = localStorage.getItem(`user`);

  if (user) {
      return JSON.parse(user);
  }
  
}
function saveUserData(data) {
  let { email, uid } = data;
  localStorage.setItem(`user`, JSON.stringify({ email, uid }));
  console.log();
}

export default 
{clearUserData, getUserData, saveUserData};
