var cart = document.querySelector(".cart-box");
let carBoxClass = document.querySelector(".prduct-card-home")
let cartBtn = document.querySelector(".cart-btn")
var userCard = document.querySelector(".user");
cartBtn.onclick = () => {
  if (localStorage.getItem('username') && localStorage.getItem('Password')) {
    showInCard(localobj, carBoxClass)
    cart.classList.toggle("active");
    userCard.classList.remove("active");
  }
  else {

    window.open('Register.html', '_blanck')

  }

};

document.querySelector(".user-btn").onclick = () => {
  userCard.classList.toggle("active");
  cart.classList.remove("active");
};

let UserName = document.querySelector("#UserName");
let user_btn = document.querySelector(".user-btn");
if (localStorage.getItem("username")) {
  UserName.innerHTML += ` ${localStorage.getItem(
    "username"
  )} <br> <a id='logout'>Logout</a>`;
  userCard.classList.remove("active");
}

// /==================================== show data and set to Add to card =================================================/ 

let obj;

let containerCardProducts = document.querySelector('.products-container')

function getData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "../js/pro.json");
  xhttp.send();
  xhttp.onload = function () {
    obj = JSON.parse(xhttp.responseText)

  }
}
getData()

// counter func//
function setProductFromId(id_) {

  if (localStorage.getItem('username') && localStorage.getItem('Password')) {



    if (!localStorage.getItem(id_)) {
      localStorage.setItem(`counter${id_}`, 1)
    } else {
      let counter = localStorage.getItem(`counter${id_}`);
      ++counter
      localStorage.setItem(`counter${id_}`, counter)
    }
    obj.map((i) => {

      if (i.id == id_) {
        localStorage.setItem(id_, JSON.stringify(i))
      }
    })
  }
  else {
    window.open('Register.html', '_blanck')
  }


}

// ********************************
let localobj = localStorage

function showInCard(localobj, divProduct) {
  divProduct.innerHTML = ''
  for (let iterator in localobj) {
    if (typeof localobj[+iterator] == 'string') {
      var objProduct = JSON.parse(localobj[iterator])
      // console.log(objProduct)
      divProduct.innerHTML += `
            <div class="box">
            <img src="${objProduct.image}" alt="" />
            <div class="box-text">
              <h3>${objProduct.title}</h3>
              <span>${objProduct.price}$</span>
            </div>
            <a class="delCart" onclick="deleteProduct(${objProduct.id},this)"> <i class="fa-solid fa-trash"></i></a>
          </div>

            `
    }

  }
}

function deleteProduct(id, ev) {
  localobj.removeItem(id)
  ev.parentNode.remove()

}


// Appending data from JSON file in main home Page
var menSec = document.querySelector(".men")
var womenSec = document.querySelector(".women")
var kidsSec = document.querySelector(".kids")

document.addEventListener("DOMContentLoaded", () => {
  const url = "../js/pro.json";
  var menCounter = 0
  var womenCounter = 0
  var kidsCounter = 0
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        let { id, title, image, rating, price, category } = item;
        const productContainer = document.querySelector(".products-container");
        if (category == "men's clothing") {

          if (menCounter < 6) {


            const newProduct = document.createElement("div");
            newProduct.classList.add("box");

            newProduct.innerHTML = `
          <img src="${image}" alt="${title}" />
          <div class="content">
            <h2 class="PName">${title}</h2>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon name="star-half" type="solid"></box-icon>
            <br />
            <span class="PPrice">EGP ${price} </span>
              <button class="addToCart" onclick='setProductFromId(${id})'">
                <i  class="fa-solid fa-cart-plus"></i>
              </button>
          </div>
        `;

            menCounter++
            menSec.appendChild(newProduct);
            if (menCounter == 6) {
              document.getElementById("men").innerHTML += `<div >
              <a href="men.html" class="btn seeAll">See All</a>
              </div>`
            }

          }

        } else if (category == "women's clothing") {
          if (womenCounter < 6) {
            const newProduct = document.createElement("div");
            newProduct.classList.add("box");

            newProduct.innerHTML = `
          <img src="${image}" alt="${title}" />
          <div class="content">
            <h2 class="PName">${title}</h2>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon name="star-half" type="solid"></box-icon>
            <br />
            <span class="PPrice">EGP ${price} </span>
              <button class="addToCart" onclick='setProductFromId(${id})'">
                <i  class="fa-solid fa-cart-plus"></i>
              </button>
          </div>
        `;

            womenSec.appendChild(newProduct);
            womenCounter++
            if (womenCounter == 6) {
              document.getElementById("women").innerHTML += `<div>
              <a href="women.html" class="btn seeAll">See All</a>
              </div>`
            }
          }
        } else if (category == "kid's clothing") {
          if (kidsCounter < 6) {
            const newProduct = document.createElement("div");
            newProduct.classList.add("box");

            newProduct.innerHTML = `
          <img src="${image}" alt="${title}" />
          <div class="content">
            <h2 class="PName">${title}</h2>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon name="star-half" type="solid"></box-icon>
            <br />
            <span class="PPrice">EGP ${price} </span>
              <button class="addToCart" onclick='setProductFromId(${id})'">
                <i  class="fa-solid fa-cart-plus"></i>
              </button>
          </div>
        `;
            kidsSec.appendChild(newProduct);
            kidsCounter++
            if (kidsCounter == 6) {
              document.getElementById("kids").innerHTML += `<div>
              <a href="kids.html" class="btn seeAll">See All</a>
              </div>`
            }
          }
        }

      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// =====================================

UserName
let username_Saved = localStorage.getItem("username");
let password_Saved = localStorage.getItem("Password");
let loginBtn = document.getElementById("login_btn");
let user_login = document.getElementById("UserName_login");
let password_login = document.getElementById("Password_login");
let logout_btn = document.getElementById("logout");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    username_Saved.trim() === user_login.value &&
    password_Saved === password_login.value
  ) {
    alert("Welcome!");
    userCard.classList.remove("active");
    UserName.style.display = "flex";
  } else {
    alert("Incorrect username or password.");
  }
});
logout_btn.addEventListener("click", function () {
  localStorage.removeItem('username');
  localStorage.removeItem('Password');
  localStorage.removeItem('Email');
  UserName.innerHTML = "";
  localStorage.clear()
});