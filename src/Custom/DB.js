///

const addToDatabase = id => {
    let shoppingCart = {};
    // localStorage.setItem('shoping-cart', id);

    // get previous data from local storage
    const storedCart = localStorage.getItem('shoping-cart', id);
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let inObj = {};
    const storedcard = localStorage.getItem('shoping-cart')
    if (storedcard) {
        inObj = JSON.parse(storedcard)
    }
    return inObj;
}



export { addToDatabase, getStoredCart };