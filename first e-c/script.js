var cart = document.querySelector(".cart-box");
// console.log(cart)
let carBoxClass = document.querySelector(".prduct-card-home")
let cartBtn = document.querySelector(".cart-btn")
var userCard = document.querySelector(".user");
cartBtn.onclick = () => {
  showInCard(localobj, carBoxClass)
  cart.classList.toggle("active");
  userCard.classList.remove("active");

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

// add event click on button checkout
function goToCardPage() {
  // let checkoutButton = document.querySelector('.btn')
  window.open('card.html', 'blanck')
}

// add event click on icon card to show product in check out menu
// let cartIcon = document.querySelector('') 

{
  /*
    // document.addEventListener("DOMContentLoaded", () => {
    //   const url = "pro.json";
  
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       data.forEach((item) => {
    //         let { id, title, image, rating, price } = item;
  
    //         const productContainer = document.querySelector(".products-container");
  
    //         const newProduct = document.createElement("div");
    //         newProduct.classList.add("box");
  
    //         newProduct.innerHTML = `
    //         <img src="${image}" alt="${title}" />
    //         <div class="content">
    //           <h2 class="PName">${title}</h2>
    //           <box-icon type="solid" name="star"></box-icon>
    //           <box-icon type="solid" name="star"></box-icon>
    //           <box-icon type="solid" name="star"></box-icon>
    //           <box-icon type="solid" name="star"></box-icon>
    //           <box-icon name="star-half" type="solid"></box-icon>
    //           <br />
    //           <span class="PPrice">EGP ${price} </span>
    //              <button class="addToCart" onclick="console.log('hello world')">
    //               <i  class="fa-solid fa-cart-plus"></i>
    //             </button>
    //         </div>
    //       `;
  
    //         productContainer.appendChild(newProduct);
    //       });
    //     })
    //     .catch((error) => {
    //       console.error("Error ===============:", error);
    //     });
    // });
  */
}

// /========================================================================================================================/
// /==================================== show data and set to Add to card =================================================/ 

let obj;
// let sectionBusket = document.querySelector('buske-product')
let containerCardProducts = document.querySelector('.products-container')
// console.log(containerCardProducts)
function getData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "pro.json");
  xhttp.send();
  xhttp.onload = function () {
    obj = JSON.parse(xhttp.responseText)
    // console.log(obj)
    let insertDataCard = obj.map((product) => {
      containerCardProducts.innerHTML += `
                <div class="box">
                <img src="${product.image}" alt="" />
                <div class="content">
                  <h2>${product.title}</h2>
                  <box-icon type="solid" name="star"></box-icon>
                  <box-icon type="solid" name="star"></box-icon>
                  <box-icon type="solid" name="star"></box-icon>
                  <box-icon type="solid" name="star"></box-icon>
                  <br />
                  <span class="PPrice">EGP ${product.price} </span>
                  <button class="addToCart" onclick='setProductFromId(${product.id})'>
                    <i class="fa-solid fa-cart-plus"></i>
                  </button>
                </div> -->
                `
    })

  }

}
getData()
/*4444444444444 --------- ignor this function*/
function printObj() {
  console.log('start')
  for (let i = 0; i < obj.length; i++) {
    for (let e in obj[i]) {
      if (obj[i]['id'] == localStorage.getItem(`product${i}`)) {
        console.log(obj[i]['id'])
      } else {
        console.log(obj[i]['id'])
      }
    }
  }
}

// function of get add the id of product
function getId() {

  // localStorage.setItem(`product${id}`, {});
  console.log(localStorage.getItem(`product6`))
}

function setProductFromId(id_) {
  if (!localStorage.getItem(id_)) {
    localStorage.setItem(`counter${id_}`, 1)
  } else {
    let counter = localStorage.getItem(`counter${id_}`);
    ++counter
    localStorage.setItem(`counter${id_}`, counter)
  }
  obj.map((i) => {

    if (i.id == id_) {
      console.log(i)
      localStorage.setItem(id_, JSON.stringify(i))
    }
  })

}

// ********************************
// let carBoxClass = document.querySelector(".prduct-card-home")
// let cartBoxProduct = document.getElementsByClassName('cart-box')
let localobj = localStorage
// console.log(carBoxClass)
function showInCard(localobj, divProduct) {
  divProduct.innerHTML = ''
  for (let iterator in localobj) {
    if (typeof localobj[+iterator] == 'string') {
      var objProduct = JSON.parse(localobj[iterator])
      console.log(objProduct)
      divProduct.innerHTML += `
            <div class="box">
            <img src="${objProduct.image}" alt="" />
            <div class="box-text">
              <h3>${objProduct.title}</h3>
              <span>${objProduct.price}$</span>
            </div>
            <a class="delCart" href="#"> <i class="fa-solid fa-trash"></i></a>
          </div>

            `
    }

  }
}
// showInCard(localobj, carBoxClass)
// showInCard(localobj, cart)
// addin action to
/* ========================*/
// class="delCart"  **************** button delete 
let delCartClass = document.getElementsByClassName('delCart')
// console.log(delCartClass.length)
for (let counter = 0; counter < delCartClass.length; counter++) {
  delCartClass[counter].addEventListener('click', function () {
    console.log(this.parentNode.remove())
  })
}
// /========================================================================================================================/
// /========================================================================================================================/ 


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
});

// var swiper = new Swiper(".swiper-container", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
