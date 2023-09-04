let slideBox = document.querySelector(".slider-box");
let listItem = document.querySelectorAll('.list-item');

/* product */
let products = [{
    id : 1,
    title : 'air force',
    price : 125,
    colors : [
        {
            code: 'black',
            img: './images/air.png',
        },
        {
            code: 'darkblue',
            img: './images/air2.png',
        },
    ]
},
{
    id : 2,
    title : 'jordan',
    price : 140,
    colors : [
        {
            code: 'white',
            img: './images/jordan.png',
        },
        {
            code: 'green',
            img: './images/jordan2.png',
        },
    ]
},
{
    id : 3,
    title : 'blazer',
    price : 180,
    colors : [
        {
            code: 'white',
            img: './images/blazer.png',
        },
        {
            code: 'green',
            img: './images/blazer2.png',
        },
    ]
},
{
    id : 4,
    title : 'crater',
    price : 200,
    colors : [
        {
            code: 'black',
            img: './images/crater.png',
        },
        {
            code: 'white',
            img: './images/crater2.png',
        },
    ]
},
{
    id : 5,
    title : 'hippie',
    price : 135,
    colors : [
        {
            code: 'gray',
            img: './images/hippie.png',
        },
        {
            code: 'black',
            img: './images/hippie2.png',
        },
    ]
}];

let choosenProduct = products[0];
let currentProductImg = document.querySelector('.product-img');
let currentProductTitle = document.querySelector('.product-title');
let currentProductPrice = document.querySelector('.product-price');
let currentProductColor = document.querySelectorAll('.color');
let currentProductSize = document.querySelectorAll('.size');
listItem.forEach( (item , index) => {
    item.addEventListener('click' , () =>{
        //change the current slide
        slideBox.style.transform = `translateX( ${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change info of the product-item
        //change img
        currentProductImg.src = choosenProduct.colors[0].img;
        //change title
        currentProductTitle.textContent = choosenProduct.title;
        //change price
        currentProductPrice.textContent = "$" + choosenProduct.price;
        //change color
        currentProductColor.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

//change the color of the product-img
currentProductColor.forEach( (color,index) => {
    color.addEventListener( "click" , ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

//change size
currentProductSize.forEach( (size,index) => {
    size.addEventListener( "click" , ()=>{
        currentProductSize.forEach((size) =>{
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    })
})

//payment
let buyNow = document.querySelector('.product-btn');
let payment = document.querySelector('.payment');
let close = document.querySelector('.close');

buyNow.addEventListener( 'click' , ()=>{
    payment.style.display = 'flex';
})
close.addEventListener( 'click' , ()=>{
    payment.style.display = 'none';
})

