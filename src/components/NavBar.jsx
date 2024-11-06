import { NavLink, useLocation, Link } from "react-router-dom";
import { getStoredCart, getStoredWish } from "./Utilities/addToDB";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const links =
        <>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive
                            ?
                            'bg-purple-700 text-white font-semibold focus:outline-none hover:bg-transparent underline' : 'text-gray-800 font-semibold focus:outline-none hover:bg-transparent'}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to='/statistics'
                    className={({ isActive }) =>
                        isActive
                            ?
                            'bg-white text-purple-700 font-semibold focus:outline-none hover:bg-transparent underline' : 'text-gray-800 font-semibold focus:outline-none hover:bg-transparent'}>
                    Statistics
                </NavLink>
            </li>

            <li>
                <NavLink
                    to='/dashboard'
                    className={({ isActive }) =>
                        isActive
                            ?
                            'bg-white text-purple-700 font-semibold focus:outline-none hover:bg-transparent underline' : 'text-gray-800 font-semibold focus:outline-none hover:bg-transparent'}>
                    Dashboard
                </NavLink>
            </li>

            <li>
                <NavLink
                    to='/support'
                    className={({ isActive }) =>
                        isActive
                            ?
                            'bg-white text-purple-700 font-semibold focus:outline-none hover:bg-transparent underline' : 'text-gray-800 font-semibold focus:outline-none hover:bg-transparent'}>
                    Support
                </NavLink>
            </li>
        </>

    const [cartProducts, setCartProduct] = useState([])
    useEffect(() => {
        const cartGadgets = getStoredCart();
        setCartProduct(cartGadgets);
    }, [])

    const [priceCart, setPriceCart] = useState(0)
    useEffect(() => {
        const sum = cartProducts.reduce((a, b) => a + (b.price || 0), 0);
        setPriceCart(parseFloat(sum).toFixed(2))
    }, [cartProducts])

    const [wishProducts, setWishProducts] = useState([])
    useEffect(() => {
        const wishGadgets = getStoredWish()
        setWishProducts(wishGadgets)
    }, [])

    const homeRoute = location.pathname === '/' || location.pathname.startsWith('/gadgets/');

    return (
        <div className={`navbar w-11/12 mx-auto mt-4  ${homeRoute ? 'bg-purple-700 rounded-t-[24px]' : 'bg-white'}`}>
            <div className="navbar-start">
                <div>

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                </div>

                <Link to="/" className="btn btn-ghost text-2xl border-0 focus:outline-none hover:bg-transparent">
                    <span className={isHomePage ? "text-white" : "text-black"}>
                        <FontAwesomeIcon icon={faGears} /> <span></span>
                        Gadget Heaven
                    </span>
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">

                <div className="flex-none">
                    <div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white mb-2">
                            <Link to="/dashboard">
                                <div className="indicator">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>

                                    <span className="badge badge-sm indicator-item">{cartProducts.length}</span>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <button className="btn btn-ghost btn-circle bg-white mb-2 ml-2">

                    <Link to="/dashboard">
                        <div className="indicator">
                            <FaRegHeart className="text-xl" />
                            <span className="badge badge-sm  badge-white indicator-item">{wishProducts.length}</span>
                        </div>
                    </Link>
                    
                </button>

            </div>
        </div>);
};

export default Navbar;