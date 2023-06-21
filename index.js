// Write your code here...
const menuItemContainer = document.querySelector('#menu-items');
const dishContainer = document.querySelector('#dish');
let dishImage = document.querySelector('#dish-image');
let dishName = document.querySelector('#dish-name');
let dishDescription = document.querySelector('#dish-description');
let dishPrice = document.querySelector('#dish-price');
let numberInCart = document.getElementById("number-in-cart");
let cartForm = document.getElementById("cart-form");

fetch('http://localhost:3000/menu')
.then(response => response.json())
.then((data) => renderFoodList(data));

function renderFoodList(menuItems){

menuItems.forEach((food) => {
const span = document.createElement('span');
span.textContent = food.name;      
menuItemContainer.appendChild(span);
span.setAttribute('id', food.id);
////////////Dish Section
dishName.textContent = food.name; 
dishImage.src = food.image; 
dishDescription.textContent = food.description;   
dishPrice.textContent = food.price;
numberInCart.textContent = food.number_in_bag;
dishContainer.appendChild(dishImage);
dishContainer.appendChild(dishName);
dishContainer.appendChild(dishDescription);
dishContainer.appendChild(dishPrice);

//Event listener to change dish item
span.addEventListener('click', (e) => {
e.preventDefault();

dishName.textContent = food.name; 
dishImage.src = food.image; 
dishDescription.textContent = food.description;   
numberInCart.textContent = food.number_in_bag;
});


})
//Update cart number on click
cartForm.addEventListener('submit', (e) => {
    let input  = document.querySelector("#cart-amount");
    e.preventDefault()
    console.log(e);
     numberInCart.textContent = parseInt(input.value) + parseInt(numberInCart.textContent);
   
})
}

// "id": 1,
// "name": "Chips & Guacamole",
// "image": "./assets/calexico-guac.webp",
// "description": "House-made tortilla chips with fresh daily made guacamole",
// "price": 13,
// "number_in_bag": 0
