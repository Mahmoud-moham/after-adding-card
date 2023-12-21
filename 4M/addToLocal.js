var cart = document.querySelector(".cart-box");
let carBoxClass = document.querySelector(".prduct-card-home")
let cartBtn = document.querySelector(".cart-btn")
var userCard = document.querySelector(".user");
cartBtn.onclick = () => {
  showInCard(localobj, carBoxClass)
  cart.classList.toggle("active");
  userCard.classList.remove("active");
};

function goToCardPage() {
    window.open('card.html', 'blanck')
  }


// /==================================== show data and set to Add to card =================================================/ 

let obj;

let containerCardProducts = document.querySelector('.products-container')

function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "pro.json");
    xhttp.send();
    xhttp.onload = function () {
        obj = JSON.parse(xhttp.responseText)
    }

}
// counter func//
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


getData()

let localobj = localStorage;

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