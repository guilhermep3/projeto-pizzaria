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
   promoOption.addEventListener('click', (e)=>{
      let keyPromo = e.target.closest('.promoOption').getAttribute('data-key');
      console.log(promotionJson[keyPromo])
      qs('.pizzaImg img').src = promotionJson[keyPromo].img;
      qs('.pizzaInfo h1').innerHTML = promotionJson[keyPromo].name;
      qs('.pizzaInfo-desc').innerHTML = promotionJson[keyPromo].description;
      qs('.pizzaInfo-actualPrice').innerHTML = `R$${promotionJson[keyPromo].price.toFixed(2)}`;
      qsa('.pizzaInfo-size').forEach((size, sizeIndex)=>{
         size.querySelector('span').innerHTML = promotionJson[keyPromo].sizes[sizeIndex];
      });
   })
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

   pizzaItem.setAttribute('data-key', index);
   qs('.menuOptions').append(pizzaItem);
   pizzaItem.querySelector("img").src = item.img;
   pizzaItem.querySelector('.optionTitle').innerHTML = item.name;
   pizzaItem.querySelector('.price').innerHTML = `R$${item.price.toFixed(2)}`;
   pizzaItem.addEventListener("click", (e)=>{
      let key = e.target.closest('.menuOption').getAttribute('data-key');
      qs('.pizzaImg img').src = pizzaJson[key].img;
      qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      qs('.pizzaInfo-desc').innerHTML = pizzaJson[key].description;
      qs('.pizzaInfo-actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`;
      qsa('.pizzaInfo-size').forEach((size, sizeIndex)=>{
         size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
      });
   });
});
qsa('.menuOption').forEach((e)=>{
   e.addEventListener('click',(e)=>{
      qs('.pizzaWindowArea').style.opacity = '0'
      qs('.pizzaWindowArea').style.display = 'flex'
      setTimeout(()=>{
         qs('.pizzaWindowArea').style.opacity = '1'
         qs('.pizzaWindowArea').style.marginTop = '0px'
      },50)
   })
});