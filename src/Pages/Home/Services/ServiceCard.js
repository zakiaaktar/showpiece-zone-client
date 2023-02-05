import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;


    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
            <figure><img src={img} alt="service-img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-blue-900">{title}</h2>
                <p>{description}</p>
                <p className='text-xl text-blue-900 font-bold'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                    <button className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none mt-3 pr-24 pl-24 border-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;