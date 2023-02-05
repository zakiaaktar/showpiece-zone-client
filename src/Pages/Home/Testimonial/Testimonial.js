import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';



const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Joe Deo',
            img: people1,
            review: 'Consumers have many uncertainties when making an online purchase. Product reviews are social proof that a product is good and what the lesser',
            location: 'USA'
        },
        {
            _id: 1,
            name: 'Mathen',
            img: people2,
            review: 'Consumers have many uncertainties when making an online purchase. Product reviews are social proof that a product is good and what the lesser',
            location: 'Canada'
        },
        {
            _id: 1,
            name: 'Joegr',
            img: people3,
            review: 'Consumers have many uncertainties when making an online purchase. Product reviews are social proof that a product is good and what the lesser',
            location: 'Australia'
        },
    ]


    return (
        <section className='my-16'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 border-x-4 border-blue-900 w-11/12 md:w-8/12 lg:w-3/12 mx-auto'>What Our Client Say..</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-14'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;