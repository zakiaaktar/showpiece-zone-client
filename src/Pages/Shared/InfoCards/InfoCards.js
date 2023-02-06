import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm Everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-br from-blue-900 to-purple-500 rounded-lg'
        },
        {
            id: 2,
            name: 'Location',
            description: 'Rotterdam, The Netherlands',
            icon: marker,
            bgClass: 'bg-gradient-to-r from-gray-400  to-gray-300 rounded-lg'
        },
        {
            id: 3,
            name: 'Contact',
            description: 'Cell: 012 345 678',
            icon: phone,
            bgClass: 'bg-gradient-to-br from-blue-900 to-purple-500 rounded-lg'
        }
    ]


    return (

        <section className='my-16'>

            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>Contact Info..</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-20'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default InfoCards;