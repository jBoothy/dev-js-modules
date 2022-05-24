// Importing Module
console.log("Importing module");

// Named export:
// FIRST WAY -------------------------------------------------------
// import {addToCart, totalPrice as /* Renames the import to whatever you want */ price, qty} /*Need to be in curly brackets*/ from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);
//------------------------------------------------------------------


// SECOND WAY ------------------------------------------------------
// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default Export --------------------------------------------------
import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('taquito', 12);
add('steak', 2);

console.log(cart)
//------------------------------------------------------------------

// Not as ideal
// async function x(){
    
// }

// Idealish
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// Ideal
const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body};
}

const lastPost = getLastPost();
// console.log(lastPost); // Show's promise but not what we want

// Not clean
// lastPost.then(last => console.log(last))

// Clean
const lastPost2 = await getLastPost();
console.log(lastPost2);
