import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, review: userReview } = review;
    return (
        <div className="card shadow-xl rounded-none border-none" data-aos="flip-up">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold text-blue-900">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;