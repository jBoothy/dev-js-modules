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
import add from './shoppingCart.js';
add('pizza', 2);
//------------------------------------------------------------------