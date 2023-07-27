export const authErrors = (error) => {

  if(error === "auth/invalid-email") {return ["Введен неверный email", "error1"]}

  return false;
}