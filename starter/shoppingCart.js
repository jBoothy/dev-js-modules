// Exporting Module

console.log("Exporting module");

const shippingCost = 10;
const cart = [];

// Named export ---------------------------------------------------
export const addToCart = function(product, quantity){
    cart.push({product, quantity})
    console.log(`${quantity} ${product}(s) were added to the cart.`)
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qty}
//-----------------------------------------------------------------

// Default exports

export default function(product, quantity){
    cart.push({product, quantity})
    console.log(`${quantity} ${product}(s) were added to the cart.`)
};