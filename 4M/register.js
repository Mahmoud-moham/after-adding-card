let Username = document.getElementById("UserName");
let email = document.getElementById("Email");
let password = document.getElementById("password");
let registerBtn = document.getElementById("register");
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("username", Username.value);
  localStorage.setItem("Email", email.value);
  localStorage.setItem("Password", password.value);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
});
