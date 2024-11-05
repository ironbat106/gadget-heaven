import React from 'react';

const DetailsTitle = ({ title, subtitle }) => {
    return (
        <div className="hero bg-purple-700 pb-20 text-white">

            <div className="hero-content text-center">

                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{subtitle}</p>
                </div>

            </div>
        </div>
    );
};

export default DetailsTitle;