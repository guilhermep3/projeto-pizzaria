let pizzaJson = [
    {id:1, name:'Muçarela', img:'assets/images/pizza/pizzamucarela.png', price:29.19, sizes:['300g', '530g', '860g'], description:'Molho de tomate natural e muçarela, temperado com orégano'},
    {id:2, name:'Calabresa', img:'assets/images/pizza/pizzacalabresa.png', price:28.00, sizes:['320g', '530g', '860g'], description:'Calabresa, Muçarela, 1 cebola em rodelas, Azeite de oliva'},
    {id:3, name:'Quatro Queijos', img:'assets/images/pizza/pizzaquatroqueijos.png', price:27.11, sizes:['320g', '530g', '860g'], description:'Muçarela, Provolone, Gorgonzola e parmesão ralado'},
    {id:4, name:'Frango com Catupiry', img:'assets/images/pizza/pizzafrangocomcatupiry.png', price:29.00, sizes:['320g', '530g', '860g'], description:'Frango desfiado, catupiry e azeitona '},
    {id:5, name:'Bacon', img:'assets/images/pizza/pizzabacon.png', price:31.43, sizes:['320g', '530g', '860g'], description:'Bacon, presunto, cebola, milho, ervilha e requeijão'},
    {id:6, name:'Brócolis', img:'assets/images/pizza/pizzabrocolis.png', price:29.77, sizes:['320g', '530g', '860g'], description:'Brócolis, Cogumelo, Queijo prevolone, palmito, tomate e azeitona preta'},
    {id:7, name:'Legumes', img:'assets/images/pizza/pizzalegumes.png', price:28.36, sizes:['320g', '530g', '860g'], description:'Massa vegana, pimentão, beringela, cebola, muçarela, pimenta malagueta'},
    {id:8, name:'Margherita', img:'assets/images/pizza/pizzamargherita.png', price:34.50, sizes:['320g', '530g', '860g'], description:'Tomate, Manjericão fresco, cebola, alho, muçarela e azeite'},
    {id:9, name:'Napolitana', img:'assets/images/pizza/pizzanapolitana.png', price:28.00, sizes:['320g', '530g', '860g'], description:'Muçarela, pepperoni, alho poró em rodelas, manjericão, tomate'},
    {id:10, name:'Pimenta', img:'assets/images/pizza/pizzapimenta.png', price:28.55, sizes:['320g', '530g', '860g'], description:'Pimenta malagueta, dedo de moça, gorgonzola, azeitona e milho'},
    {id:11, name:'Lombo Canadense', img:'assets/images/pizza/pizzalombocanadense.png', price:34.50, sizes:['320g', '530g', '860g'], description:'Lombo, cebola, muçarela, requeijão, milho e azeitona'},
    {id:12, name:'Atum', img:'assets/images/pizza/pizzaatum.png', price:34.50, sizes:['320g', '530g', '860g'], description:'Atum, cebola, queijo minas, palmito, ervilha, muçarela'},
    {id:13, name:'Tomate', img:'assets/images/pizza/pizzatomate.png', price:30.36, sizes:['320g', '530g', '860g'], description:'Tomate, palmito, parmesão, muçarela, azeitona'},
    {id:14, name:'Chocolate', img:'assets/images/pizza/pizzachocolate.png', price:31.36, sizes:['320g', '530g', '860g'], description:'Chocolate e m&m'},
    {id:15, name:'Morango e Nutella', img:'assets/images/pizza/pizzamorangoenutella.png', price:35.50, sizes:['320g', '530g', '860g'], description:'Morango, nutella e chocolate branco'}
];
let drinksJson = [
    {id:1, name:'Amstel', img:'assets/images/drink/amstel.png', price:5.76, sizes:['2L', '2.5L','3L'], description:'O melhor preço para você'},
    {id:2, name:'Brahma', img:'assets/images/drink/brahma.png', price:5.30, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'},
    {id:3, name:'Coca-Cola', img:'assets/images/drink/cocacola.png', price:9.00, sizes:['2L', '2.5L','3L'], description:'O melhor preço para você'},
    {id:4, name:'Coca-Cola Zero', img:'assets/images/drink/cocacolazero.png', price:9.75, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'},
    {id:5, name:'Fanta Laranja', img:'assets/images/drink/fanta.png', price:4.10, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'},
    {id:6, name:'Fanta Uva', img:'assets/images/drink/fantauva.png', price:4.10, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'},
    {id:7, name:'Guaraná', img:'assets/images/drink/guarana.png', price:7.50, sizes:['2L', '2.5L','3L'], description:'O melhor preço para você'},
    {id:8, name:'Heineken', img:'assets/images/drink/heineken.png', price:6.78, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'},
    {id:9, name:'Skol', img:'assets/images/drink/skol.png', price:5.61, sizes:['250ml', '350ml', '500ml'], description:'O melhor preço para você'}
]
let promotionJson = [
    {id:1, name:'Frango com Catupiry', img:'assets/images/pizza/pizzafrangocomcatupiry.png', price:29.00, discount:32.99, sizes:['320g','530g','860g'], description:'Promoção com desconto pizza em oferta'},
    {id:2, name:'Coca-Cola', img:'assets/images/drink/cocacola.png', price:9.00, discount:11.90, sizes:['2L', '2.5L','3L'], description:'O melhor preço para você'},
    {id:3, name:'Guaraná', img:'assets/images/drink/guarana.png', price:7.50, discount:9.50, sizes:['2L', '2.5L','3L'], description:'Super oferta somente hoje'},
    {id:4, name:'Quatro Queijos', img:'assets/images/pizza/pizzaquatroqueijos.png', price:27.11, discount:29.50, sizes:['320g','530g','860g'], description:'Super oferta somente hoje'},
    {id:5, name:'Heineken', img:'assets/images/drink/heineken.png', price:6.78, discount:8.10, sizes:['250ml', '350ml', '500ml'], description:'Super oferta somente hoje'},
    {id:6, name:'Chocolate', img:'assets/images/pizza/pizzachocolate.png', price:31.36, discount:33.50, sizes:['320g','530g','860g'], description:'Super oferta somente hoje'},
    {id:7, name:'Fanta Laranja', img:'assets/images/drink/fanta.png', price:4.10, discount:5.15, sizes:['250ml', '350ml', '500ml'], description:'Super oferta somente hoje'}
]