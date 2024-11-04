const getStoredCart = () => {
    const storeddata = localStorage.getItem('cart')
    if (storeddata) {
        const storedCart = JSON.parse(storeddata)
        return storedCart

    } else {
        return []
    }
}


const addCartToLs = (gadget) => {

    const cart = getStoredCart()

    const isExist = cart.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        alert('already added')
    } else {

        cart.push(gadget)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
const removeCartFromLs = (id) => {
    const carts = getStoredCart()
    const remaining = carts.filter(cart => cart.product_id !== id) 
    localStorage.setItem('cart', JSON.stringify(remaining))
}

const getStoredWish = () => {
    const storedWishdata = localStorage.getItem('wish')
    if (storedWishdata) {
        const storedwish = JSON.parse(storedWishdata)
        return storedwish

    } else {
        return []
    }
}

// add to local storadge 
const addWishtToLs = (gadget) => {
    console.log(gadget);

    const wish = getStoredWish()

    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        alert('already added')
    } else {

        wish.push(gadget)
        localStorage.setItem('wish', JSON.stringify(wish))
    }
}
const removeWishFromLs = (id) => {
    const wishes = getStoredWish()
    const remaining = wishes.filter(cart => cart.product_id !== id) 
    localStorage.setItem('wish', JSON.stringify(remaining))

}
export { getStoredCart, addCartToLs,removeCartFromLs, addWishtToLs,getStoredWish,removeWishFromLs}