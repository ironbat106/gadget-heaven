import React, { useEffect, useState } from 'react';
import { getStoredCart, getStoredWish, removeCart, removeWish, removeAllCart, removeAllWish } from './Utilities/addToDB';
import { Link } from 'react-router-dom';
import Carts from './Carts';
import Wishes from './Wishes';
import paymentLogo from '../assets/assets/Group.png';

const Dashboard = () => {

    useEffect(() => {
        document.title = 'Dashboard - Gadget Heaven';
    }, []);

    const [cartProducts, setProduct] = useState([])
    useEffect(() => {
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }, [])

    const [wishProduct, setWishProduct] = useState([])
    useEffect(() => {
        const wishGadgets = getStoredWish()
        setWishProduct(wishGadgets)
    }, [])

    const [isActive, setActive] = useState(true)
    const handleTogging = (active) => {
        if (active) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    }

    const handleRemoveCart = id => {
        removeCart(id)
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }
    const handleRemoveWish = id => {
        removeWish(id)
        const wishGadgets = getStoredWish()
        setWishProduct(wishGadgets)
    }

    const [priceCart, setPriceCart] = useState(0)
    useEffect(() => {

        const sum = cartProducts.reduce((a, b) => a + (b.price || 0), 0);
        setPriceCart(parseFloat(sum).toFixed(2))

    }, [cartProducts])


    const [wishPrice, setWishPrice] = useState(0)
    useEffect(() => {

        const sum = wishProduct.reduce((a, b) => a + (b.price || 0), 0);
        setWishPrice(parseFloat(sum).toFixed(2))

    }, [wishProduct])

    const handleSortBYPrice = () => {
        if (isActive) {

            const sortProduct = [...cartProducts].sort((a, b) => b.price - a.price)
            setProduct(sortProduct)
        }
        else {

            const sortWishProduct = [...wishProduct].sort((a, b) => b.price - a.price)
            setWishProduct(sortWishProduct)
        }
    }

    const modal = document.getElementById('my_modal_1')
    const openModal = () => { modal.showModal() }

    const handleModalClose = (active) => {
        if (active) {
            removeAllCart()
            setProduct([])
        }
        else {
            removeAllWish()
            setWishProduct([])
        }
        if (modal) {
            modal.close()
        }
    }

    return (
        <div>
            <div className="hero bg-purple-700 pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">

                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                        <div className='flex justify-center gap-4 font-extrabold'>

                            <button onClick={() => handleTogging(true)}
                                className={`${isActive ? "text-purple-700 bg-white btn btn-xl btn-outline px-10 rounded-3xl font-extrabold" : "btn bg-purple-700 btn-xl px-10 rounded-3xl "}`}>Cart</button>

                            <button onClick={() => handleTogging(false)}
                                className={`${isActive ? "btn btn-xl bg-purple-700 px-10 rounded-3xl " : "text-purple-700 px-10 rounded-3xl bg-white btn btn-xl btn-outline font-extrabold"}`}>
                                Wish List</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center py-6 w-10/12 mx-auto'>

                <div>
                    <h1 className='text-lg font-bold'>{`${isActive ? "Cart" : "Wish"}`}</h1>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-4'>

                    <p className='font-bold'>Total Cost: {`${isActive ? priceCart : wishPrice}`}K</p>

                    <button onClick={() => handleSortBYPrice()}
                        className='btn btn-outline text-purple-700 rounded-3xl'>
                        Sort by price
                    </button>

                    <button
                        onClick={openModal}
                        disabled={cartProducts.length === 0}
                        className={`btn bg-purple-700 text-white rounded-3xl px-6 ${cartProducts.length === 0 ? 'bg-gray-200 text-gray-600 cursor-not-allowed' : 'bg-purple-700 text-white'}`}>
                        Purchase
                    </button>

                </div>
            </div>
            <div>
                {
                    isActive ?
                        <Carts
                            cartProducts={cartProducts}
                            handleRemoveCart={handleRemoveCart}
                        ></Carts> :
                        <Wishes
                            wishProduct={wishProduct}
                            handleRemoveWish={handleRemoveWish}
                        ></Wishes>
                }
            </div>

            <dialog id="my_modal_1" className="modal">

                <div className="modal-box text-center">

                    <div className='flex justify-center'>
                        <img src={paymentLogo} alt="" />
                    </div>

                    <p className="py-4 text-2xl font-bold">Payment Successful!</p>
                    <p>Thanks for Purchasing</p>
                    <p>Total: {`${isActive ? priceCart : wishPrice}`}K</p>

                    <div>
                        <form method="dialog ">
                            <Link to='/'><button onClick={() =>
                                handleModalClose(isActive)}
                                className="btn flex w-2/3 mx-auto rounded-3xl font-bold">Close</button></Link>
                        </form>
                    </div>

                </div>
            </dialog>

        </div>
    );
};

export default Dashboard;