let qs = (el)=>document.querySelector(el);
let qsa = (el)=>document.querySelectorAll(el);

promotionJson.map((item, index)=>{
   let promoOption = qs('.promoOption').cloneNode(true);

   promoOption.setAttribute('data-key', index)
   qs('.promotionsOptions').append(promoOption);
   promoOption.querySelector('img').src = item.img;
   promoOption.querySelector('.promoOptionTitle').innerHTML = item.name;
   promoOption.querySelector('.discount').innerHTML = `R$${item.discount.toFixed(2)}`;
   promoOption.querySelector('.promoPrice').innerHTML = `R$${item.price.toFixed(2)}`;
});
qsa('.promoOption').forEach((e)=>{
   e.addEventListener('click',()=>{
      qs('.pizzaWindowArea').style.opacity = '0'
      qs('.pizzaWindowArea').style.display = 'flex'
      setTimeout(()=>{
         qs('.pizzaWindowArea').style.opacity = '1'
         qs('.pizzaWindowArea').style.marginTop = '0px'
      },50)
   })
});

pizzaJson.map((item, index)=>{
   let pizzaItem = qs('.menuOption').cloneNode(true);

   pizzaItem.setAttribute('data-key', index)
   qs('.menuOptions').append(pizzaItem);
   pizzaItem.querySelector("img").src = item.img
   pizzaItem.querySelector('.optionTitle').innerHTML = item.name;
   pizzaItem.querySelector('.price').innerHTML = `R$${item.price.toFixed(2)}`
});
qsa('.menuOption').forEach((e)=>{
   e.addEventListener('click',()=>{
      qs('.pizzaWindowArea').style.opacity = '0'
      qs('.pizzaWindowArea').style.display = 'flex'
      setTimeout(()=>{
         qs('.pizzaWindowArea').style.opacity = '1'
         qs('.pizzaWindowArea').style.marginTop = '0px'
      },50)
   })
});