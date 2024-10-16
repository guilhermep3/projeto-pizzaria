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
      modalQt = 1;
      modalKey = key;
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

// Eventos do window
function closeWindow (){
   qs('.pizzaWindowArea').style.opacity = '0';
   qs('.pizzaWindowArea').style.marginTop = '-100px';
   setTimeout(() => {
      qs('.pizzaWindowArea').style.display = 'none';
   }, 500);
};
qsa('.pizzaInfo-cancelBtn, .pizzaInfo-cancelMobileBtn').forEach((item)=>{
   item.addEventListener('click', closeWindow)
});
qsa('.pizzaInfo-qtMenos').forEach((item)=>{
   item.addEventListener('click', ()=>{
      if(modalQt > 1){
         modalQt--;
      };
      qs('.pizzaInfo-qt').innerHTML = modalQt;
   });
});
qsa('.pizzaInfo-qtMais').forEach((item)=>{
   item.addEventListener('click', ()=>{
      modalQt++;
      qs('.pizzaInfo-qt').innerHTML = modalQt;
   });
});
qsa('.pizzaInfo-size').forEach((size, sizeIndex)=>{
   size.addEventListener('click',(e)=>{
      qs('.pizzaInfo-size.selected').classList.remove('selected');
      size.classList.add('selected');
   });
});
qs('.pizzaInfo-addBtn').addEventListener('click',(e)=>{
   let size = parseInt(qs('.pizzaInfo-size.selected').getAttribute('data-key'));
   let identifier = pizzaJson[modalKey].id+'@'+size
   let key = cart.findIndex((item)=>item.identifier == identifier)
   if(key > -1){
      cart[key].qt += modalQt
   } else {
      cart.push({
         identifier,
         id:pizzaJson[modalKey].id,
         size,
         qt: modalQt
      })
   }
   updateCart();
   closeWindow();
});

function updateCart(){
   qs('.cartLogo span').innerHTML = cart.length;
   qs('.cart').innerHTML = '';
   let subtotal = 0;
   let desconto = 0;
   let total = 0;
   if(cart.length > 0){
      qs('aside').classList.add('show');
      qs('aside').style.display = 'block';
      for(let i in cart){
         let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
         subtotal += pizzaItem.price * cart[i].qt;

         let cartItem = qs('.cart--item').cloneNode(true);
         let pizzaSizeName = '';
         switch(cart[i].size){
            case 0:
               pizzaSizeName = 'P'
               break;
            case 1:
               pizzaSizeName = 'M'
               break;
            case 2:
               pizzaSizeName = 'G'
               break;
         }
         let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
         cartItem.querySelector('img').src = pizzaItem.img;
         cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
         cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
         cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
            if(cart[i].qt > 1){
               cart[i].qt--;
            } else {
               cart.splice(i, 1);
               qs('aside').style.display = 'none';
            }
            updateCart();
         });
         cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
            cart[i].qt++;
            updateCart();
         });
         qs('.cart').append(cartItem);
      }
      desconto = subtotal * 0.1;
      total = subtotal - desconto;

      qs('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
      qs('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
      qs('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
   } else {
      qs('aside').classList.remove('show');
      qs('aside').style.display = 'none';
   }
}
qs('.menuCloser').addEventListener('click',()=>{
   qs('aside').classList.remove('show');
   qs('aside').style.display = 'none';
})
qs('.cart').addEventListener('click', ()=>{
   qs('aside').classList.add('show');
})
qs('.cartLogo').addEventListener('click', ()=>{
   qs('aside').classList.toggle('show');
})

window.sr = ScrollReveal({reset: true})
sr.reveal('.revealTop', {
   duration: 1000,
   distance: '70px',
   origin: 'top'
})
sr.reveal('.revealRight', {
   duration: 1000,
   distance: '70px',
   origin: 'right'
})
sr.reveal('.revealBottom',{
   duration: 1000,
   distance: '70px',
   origin: 'bottom'
})

/*
   aside {
   background-color:#93AA80;
   width:0vw;
   max-height: 100vh;
   overflow-y: auto;
   font-family:'Hepta Slab', Helvetica, Arial;
   transition:all ease 0.3s;
   overflow-x:hidden;
   position: fixed;
   top: 50px;
   right: -3px;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   border: 1px solid #000;
}
aside.show {
   width:25vw;
}
*/