let cart = [];
let modalQt = 0;
let modalKey = 0;

let qs = (el)=>document.querySelector(el);
let qsa = (el)=>document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
   let pizzaItem = qs('.menuOption').cloneNode(true);
   pizzaItem.setAttribute('data-key', index);
   qs('.menuOptions').append(pizzaItem);
   pizzaItem.querySelector('img').src = item.img;
   pizzaItem.querySelector('.optionTitle').innerHTML = item.name;
   pizzaItem.querySelector('.price').innerHTML = `R$${item.price.toFixed(2)}`;
   pizzaItem.addEventListener("click", (e)=>{
      let key = e.target.closest('.menuOption').getAttribute('data-key');
      modalKey = key;
      modalQt = 1;
      qs('.pizzaImg img').src = pizzaJson[key].img;
      qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      qs('.pizzaInfo-desc').innerHTML = pizzaJson[key].description;
      qs('.pizzaInfo-actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`;
      qs('.pizzaInfo-size.selected').classList.remove('selected');
      qsa('.pizzaInfo-size').forEach((size, sizeIndex)=>{
         if(sizeIndex == 2){
            size.classList.add('selected');
         }
         size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
      });
      qs('.pizzaInfo-qt').innerHTML = modalQt;
   });
});
qsa('.menuOption').forEach((e)=>{
   e.addEventListener('click',(e)=>{
      qs('.pizzaWindowArea').style.opacity = '0';
      qs('.pizzaWindowArea').style.display = 'flex';
      setTimeout(()=>{
         qs('.pizzaWindowArea').style.opacity = '1';
         qs('.pizzaWindowArea').style.marginTop = '0px';
      },50)
   })
});

drinksJson.map((item, index)=>{
   let drinkOption = qs('.drinkOption').cloneNode(true);
   drinkOption.setAttribute('data-key', index);
   qs('.drinksOptions').append(drinkOption);
   drinkOption.querySelector('img').src = item.img;
   drinkOption.querySelector('.drinkTitle').innerHTML = item.name;
   drinkOption.querySelector('.drinkPrice').innerHTML = `R$${item.price.toFixed(2)}`;
   drinkOption.addEventListener("click", (e)=>{
      let key = e.target.closest('.drinkOption').getAttribute('data-key');
      modalKey = key;
      modalQt = 1;
      qs('.drinkImg img').src = drinksJson[key].img;
      qs('.drinkInfo h1').innerHTML = drinksJson[key].name;
      qs('.drinkInfo-desc').innerHTML = drinksJson[key].description;
      qs('.drinkInfo-actualPrice').innerHTML = `R$${drinksJson[key].price.toFixed(2)}`;
      qs('.drinkInfo-size.selected').classList.remove('selected');
      qsa('.drinkInfo-size').forEach((size, sizeIndex)=>{
         if(sizeIndex == 2){
            size.classList.add('selected');
         }
         size.querySelector('span').innerHTML = drinksJson[key].sizes[sizeIndex];
      });
      qs('.pizzaInfo-qt').innerHTML = modalQt;
   });
});
qsa('.drinkOption').forEach((e)=>{
   e.addEventListener('click',(e)=>{
      qs('.drinkWindowArea').style.opacity = '0';
      qs('.drinkWindowArea').style.display = 'flex';
      setTimeout(()=>{
         qs('.drinkWindowArea').style.opacity = '1';
         qs('.drinkWindowArea').style.marginTop = '0px';
      },50)
   })
});

// Eventos do window
function closeWindow (){
   qs('.pizzaWindowArea').style.opacity = '0';
   qs('.pizzaWindowArea').style.marginTop = '-100px';
   setTimeout(() => {
      qs('.pizzaWindowArea').style.display = 'none';
   }, 500);
   qs('.drinkWindowArea').style.opacity = '0';
   qs('.drinkWindowArea').style.marginTop = '-100px';
   setTimeout(() => {
      qs('.drinkWindowArea').style.display = 'none';
   }, 500);
};
qsa('.pizzaInfo-cancelBtn, .pizzaInfo-cancelMobileBtn, .drinkInfo-cancelBtn').forEach((item)=>{
   item.addEventListener('click', closeWindow)
});
qsa('.pizzaInfo-qtMenos, .drinkInfo-qtMenos').forEach((item)=>{
   item.addEventListener('click', ()=>{
      if(modalQt > 1){
         modalQt--;
      };
      qs('.pizzaInfo-qt').innerHTML = modalQt;
      qs('.drinkInfo-qt').innerHTML = modalQt;
   });
});
qsa('.pizzaInfo-qtMais, .drinkInfo-qtMais').forEach((item)=>{
   item.addEventListener('click', ()=>{
      modalQt++;
      qs('.pizzaInfo-qt').innerHTML = modalQt;
      qs('.drinkInfo-qt').innerHTML = modalQt;
   });
});
qsa('.pizzaInfo-size').forEach((size, sizeIndex)=>{
   size.addEventListener('click',(e)=>{
      qs('.pizzaInfo-size.selected').classList.remove('selected');
      size.classList.add('selected');
   });
});
qsa('.drinkInfo-size').forEach((size, sizeIndex)=>{
   size.addEventListener('click',(e)=>{
      qs('.drinkInfo-size.selected').classList.remove('selected');
      size.classList.add('selected');
   });
});
qs('.pizzaInfo-addBtn').addEventListener('click',(e)=>{
   let size = parseInt(qs('.pizzaInfo-size.selected').getAttribute('data-key'));
   let identifier = pizzaJson[modalKey].id+'@'+size;
   let key = cart.findIndex((item)=>item.identifier == identifier)
   if(key > -1){
      cart[key].qt += modalQt
   } else {
      cart.push({
         identifier,
         id:pizzaJson[modalKey].id,
         size,
         qt:modalQt
      });
   }
   updateCart();
   closeWindow();
});
qs('.drinkInfo-addBtn').addEventListener('click',(e)=>{
   let size = parseInt(qs('.drinkInfo-size.selected').getAttribute('data-key'));
   let identifier = drinksJson[modalKey].id+'@'+size;
   let key = cart.findIndex((item)=>item.identifier == identifier)
   if(key > -1){
      cart[key].qt += modalQt
   } else {
      cart.push({
         identifier,
         id:drinksJson[modalKey].id,
         size,
         qt:modalQt
      });
   }
   updateCartDrink();
   closeWindow();
});

function updateCart(){
   if(cart.length > 0){
      qs('aside').classList.add('show');
      qs('.cart').innerHTML = ''
      for(let i in cart){
         let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
         let cartItem = qs('.cart--item').cloneNode(true);

         let pizzaSizeName = '';
         switch (cart[i].size) {
            case 0:
               pizzaSizeName = "P"
               break;
            case 1:
               pizzaSizeName = "M"
               break;
            case 2:
               pizzaSizeName = "G"
               break;
         }
         let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

         cartItem.querySelector('img').src = pizzaItem.img;
         cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
         cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
         cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
            if(cart[i].qt > 1){
               cart[i].qt--;
            } else {
               cart.splice(i, 1);
            }
            updateCart();
         });
         cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
            cart[i].qt++;
            updateCart();
         });
         qs('.cart').append(cartItem);
      }
   } else {
      qs('aside').classList.remove('show');
   }
}
function updateCartDrink(){
   if(cart.length > 0){
      qs('aside').classList.add('show');
      qs('.cart').innerHTML = ''
      for(let i in cart){
         let drinkOption = drinksJson.find((item)=>item.id == cart[i].id);
         let cartItem = qs('.cart--item').cloneNode(true);

         let drinkSizeName = '';
         switch (cart[i].size) {
            case 0:
               drinkSizeName = "P"
               break;
            case 1:
               drinkSizeName = "M"
               break;
            case 2:
               drinkSizeName = "G"
               break;
         }
         let drinkName = `${drinkOption.name} (${drinkSizeName})`;

         cartItem.querySelector('img').src = drinkOption.img;
         cartItem.querySelector('.cart--item-nome').innerHTML = drinkName;
         cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
         cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
            if(cart[i].qt > 1){
               cart[i].qt--;
            } else {
               cart.splice(i, 1);
            }
            updateCartDrink();
         });
         cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
            cart[i].qt++;
            updateCartDrink();
         });
         qs('.cart').append(cartItem);
      }
   } else {
      qs('aside').classList.remove('show');
   }
}
qs('.menuCloser').addEventListener('click',()=>{
   qs('aside').classList.remove('show');
})
qs('.cart').addEventListener('click', ()=>{
   qs('aside').classList.add('show');
})