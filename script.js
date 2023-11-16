const show = document.querySelector(".show");
const input = document.querySelector(".pwd");

show.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
