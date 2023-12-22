let Username = document.getElementById("UserName");
let nameValue;
let email = document.getElementById("Email");
// let emailValue
let password = document.getElementById("password");
let passValue
let registerBtn = document.getElementById("register");

let namevvv = false
let passvvv = false
let emailvvv = false
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((namevvv == true) && (passvvv == true) && (emailvvv == true)) {
    Username.style.backgroundColor = 'green'
    password.style.backgroundColor = 'green'
    email.style.backgroundColor = 'green'
    console.log('success')
    localStorage.setItem("username", Username.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  } else {
    Username.style.backgroundColor = 'red'
    password.style.backgroundColor = 'red'
    email.style.backgroundColor = 'red'
  }

});

Username.addEventListener('input', function (event1) {
  let nameValue = event1.target.value
  validName(nameValue, event1)

})


password.addEventListener('input', function (event3) {

  passValue = event3.target.value
  validPass(passValue, event3)

})
email.addEventListener('input', function (event2) {

  emailValue = event2.target.value
  validEmail(emailValue, event2)

})


//  ============= valid name function
function validName(nameVal, even) {
  var nameRegex = /^[a-zA-Z \-_]{10,24}$/;
  if (nameRegex.test(nameVal)) {
    console.log(true)
    namevvv = true
    even.target.style.backgroundColor = 'green'
    return true
  }
  else {
    passvvv = false
    even.target.style.backgroundColor = 'red'
    return false
  }
}
//  ============= valid name function
function validEmail(emailVal, even) {
  var emailRegex = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;
  if (emailRegex.test(emailVal)) {
    console.log(true)
    emailvvv = true
    even.target.style.backgroundColor = 'green'
    return true
  }
  else {
    emailvvv = false
    console.log(even)
    even.target.style.backgroundColor = 'red'
    return false
  }
}
//  ============= valid Pass function
function validPass(passVal, even) {
  var passRegex = /[0-9a-zA-Z@]{8,12}$/;

  if (passRegex.test(passVal)) {
    console.log(true)
    passvvv = true
    even.target.style.backgroundColor = 'green'
    return true
  }
  else {
    passvvv = false
    console.log('false password')
    even.target.style.backgroundColor = 'red'
    return false
  }
}
