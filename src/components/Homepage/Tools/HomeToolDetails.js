import React from 'react';

const HomeToolDetails = ({ tool }) => {

    const { image, name, price, quantity, description } = tool;

    return (
        <div className=" card w-full shadow-xs ">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className='font-bold text-base'>Name: {name}</h2>
                <p className='font-bold'>Description: {description}</p>
                <h3 className='font-bold text-xl' >Quantity: {quantity}</h3>
                <h3 className='font-bold text-xl'>Price: ${price}</h3>
                <div className="card-actions">
                    <button className="btn btn-secondary btn-wide flex mx-auto">Order</button>
                </div>
            </div>

        </div >

    );
};

export default HomeToolDetails;