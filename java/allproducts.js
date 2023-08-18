const allproducts = [{
    img:'img/whey-1.jpeg',
    name:'DYMATIZE ELITE 100% WHEY PROTEIN, 5 LBS.',
    price:{
        org:'12999.00',
        discount:'5850.00',
    }
},
{
    img:'img/whey-2.jpg',
    name:'BSN SYNTHA 6, 5 LBS  2.270 GM (EXP 5/24) (GLANBIA IMPORTER )',
    price:{
        org:'7399.00',
        discount:'4900.00',
    }
},
{
    img:'img/whey-3.jpg',
    name:' DYMATIZE NUTRITION ISO 100 – 2.26 KG MUSCLE HOUSE IMPORTER 2024 EXP FREE DELIVERY',
    price:{
        org:'7399.00',
        discount:'4900.00',
    }
  },  
  {
        img:'img/whey-4.webp',
        name:'DYMATIZE ELITE 100% WHEY PROTEIN, 5 LBS.',
        price:{
            org:'12999.00',
            discount:'5850.00',
        }
    }
    ,{
        img:'img/whey-2.jpg',
        name:'BSN SYNTHA 6, 5 LBS  2.270 GM (EXP 5/24) (GLANBIA IMPORTER )',
        price:{
            org:'7399.00',
            discount:'4900.00',
        }
    },
    {
        img:'img/whey-1.jpeg',
        name:'DYMATIZE ELITE 100% WHEY PROTEIN, 5 LBS.',
        price:{
            org:'12999.00',
            discount:'5850.00',
        }
    },
    {
        img:'img/whey-4.webp',
        name:'DYMATIZE ELITE 100% WHEY PROTEIN, 5 LBS.',
        price:{
            org:'12999.00',
            discount:'5850.00',
        }
    }
    ,
];


let productsHTML ='';

allproducts.forEach((product) => {
    productsHTML +=`  
    <div class="p-w-1">
    <div class="p-img" ><img src="${product.img}" alt="" class="w-1"></div>
    <h3  class="p-heading">${product.name}</h3>
    <p class="price"><span class="real-price">₹${product.price.org}</span> ₹${product.price.discount}</p>
    <button class="add-to-cart">Add To Cart</button>
</div> `;
 

});

document.querySelector('.js-product-1').innerHTML = productsHTML;

