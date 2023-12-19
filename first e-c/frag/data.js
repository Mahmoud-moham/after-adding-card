let obj;
let sectionBusket = document.querySelector('buske-product')
let containerCardProducts = document.querySelector('.content')
function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "products.json");
    xhttp.send();
    xhttp.onload = function () {
        obj = JSON.parse(xhttp.responseText)
        // console.log(containerCardProducts)
        let insertDataCard = obj.map((product) => {
            containerCardProducts.innerHTML += `
                <div class="card-items">
                    <h2>${product.category}</h2>
                    <img src="${product.image}" alt="">
                    <p>description</p>
                    <p>rating</p>
                    <p>price</p>
                    <button onclick='getId(${product.id},)'>add To Card</button>
                </div>
                `
        })

    }

}
getData()

function getId(id) {
    console.log(id)
    localStorage.setItem(`product${id}`, id);
    localStorage.getItem(`product${id}`);
}

function printObj() {
    for (let i = 0; i < obj.length; i++) {
        for (let e in obj[i]) {
            if (obj[i]['id'] == 1) {
                console.log(obj[i][e])
            }
        }
    }

}


// function getLocalHost() {
//     console.log(obj)
//     let id = 0
//     while (localStorage.length) {
//         if (localStorage.getItem(`product${id}`))
//             console.log(localStorage.getItem(`product${id}`))

//         id++
//     }
// }





