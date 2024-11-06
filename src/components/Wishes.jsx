import React from 'react';
import Wish from './Wish';

const Wishes = ({ wishProduct, handleRemoveWish }) => {
    
    return (
        <div className='py-5'>
            {
                wishProduct.map((wish, index) =>
                    <Wish
                        key={index}
                        wish={wish}
                        handleRemoveWish={handleRemoveWish}
                    ></Wish>)
            }
        </div>
    );
};

export default Wishes;