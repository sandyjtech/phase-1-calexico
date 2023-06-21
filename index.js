// Write your code here...
const menuItemContainer = document.querySelector('#menu-items');
fetch('http://localhost:3000/menu')
.then(response => response.json())
.then((data) => renderFoodList(data));

function renderFoodList(menuItems){
menuItems.forEach((food) => {
    const span = document.createElement('span');
    span.textContent = food.name;
    const img = document.createElement('img');
    img.src = food.image;
    const h6 = document.createElement('h6');
    h6.textContent = food.description;
    const p  = document.createElement('p');
    p.textContent = food.price;
   menuItemContainer.appendChild(span);
   menuItemContainer.appendChild(img);
   menuItemContainer.appendChild(h6);
   menuItemContainer.appendChild(p);
})
}

// "id": 1,
// "name": "Chips & Guacamole",
// "image": "./assets/calexico-guac.webp",
// "description": "House-made tortilla chips with fresh daily made guacamole",
// "price": 13,
// "number_in_bag": 0
