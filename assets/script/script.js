let qs = (el)=>{
   return document.querySelector(el);
};
let qsa = (el)=>{
   return document.querySelectorAll(el);
};

promotionJson.map((item, index)=>{
   let promoOption = document.querySelector('.promoOption').cloneNode(true);
   document.querySelector('.promotionsOptions').append(promoOption);
});

pizzaJson.map((item, index)=>{
   let pizzaItem = document.querySelector('.menuOption').cloneNode(true);
   document.querySelector('.menuOptions').append(pizzaItem);
});