import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;



    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`} data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure>
                <img src={icon} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
               
            </div>
        </div>
    );
};

export default InfoCard;