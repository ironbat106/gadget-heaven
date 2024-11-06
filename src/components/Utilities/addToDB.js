import { toast } from "react-toastify";

const getStoredCart = () => {
    const datastoring = localStorage.getItem('cart')
    if (datastoring) {
        const storedCart = JSON.parse(datastoring)
        return storedCart;
    }
    else {
        return [];
    }
}


const addCart = (gadget) => {

    const cart = getStoredCart()

    const isExist = cart.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Already Added to Cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
    else {

        cart.push(gadget)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Added successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
}
const removeCart = (id) => {
    const carts = getStoredCart()
    const remaining = carts.filter(cart => cart.product_id !== id)
    localStorage.setItem('cart', JSON.stringify(remaining))
}

const removeAllCart = () => {
    localStorage.removeItem('cart')
}

const getStoredWish = () => {
    const storedWishdata = localStorage.getItem('wish')
    if (storedWishdata) {
        const storedwish = JSON.parse(storedWishdata)
        return storedwish;

    }
    else {
        return [];
    }
}

const addWish = (gadget) => {
    console.log(gadget);

    const wish = getStoredWish()

    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Already Added to Wish', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
    else {
        wish.push(gadget)
        localStorage.setItem('wish', JSON.stringify(wish))
        toast.success('Added successful', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        })
    }
}
const removeWish = (id) => {
    const wishes = getStoredWish()
    const remaining = wishes.filter(cart => cart.product_id !== id)
    localStorage.setItem('wish', JSON.stringify(remaining))
}
const removeAllWish = () => {
    localStorage.removeItem('wish')
}
export { getStoredCart, addCart, removeCart, addWish, getStoredWish, removeWish, removeAllCart, removeAllWish }