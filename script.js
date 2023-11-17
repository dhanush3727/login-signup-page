const show = document.querySelector(".show");
const input = document.querySelector(".pwd");
const showPassword = document.querySelector(".show-img");
const passwordBox = document.querySelector(".pass");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const signUp = document.querySelector(".new-user span");
const login = document.querySelector(".old-user span");

show.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
showPassword.addEventListener("click", () => {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
  } else {
    passwordBox.type = "password";
  }
});
signUp.addEventListener("click", () => {
  front.style.zIndex = "1";
  back.style.zIndex = "2";
  front.style.transform = "rotateY(180deg)";
  back.style.transform = "rotateY(0deg)";
});
login.addEventListener("click", () => {
  front.style.zIndex = "2";
  back.style.zIndex = "1";
  front.style.transform = "rotateY(0deg)";
  back.style.transform = "rotateY(180deg)";
});
