import React from 'react';
import hero from '../../../assets/images/hero.png'
import banner from '../../../assets/images/banner.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section 
           style={{
            background: `url(${banner})`
           }}
        >
            <div className="hero">
                <div className="-mb-4 hero-content flex-col lg:flex-row">
                    <img src={hero} alt="" className="hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-4xl text-white font-bold'>Welcome</h4>
                        <h1 className="text-white text-4xl font-bold">To Our Website</h1>
                        <p className="text-white py-6">Showpieces serve as decorative objects that are used to enhance the appearance of a room or space. They can add aesthetic appeal, create a focal point, and set the tone for the rest of the décor. While not strictly necessary, showpieces can add personality and style to a room, making it feel more inviting and personal. Ultimately, the necessity of a showpiece is subjective and depends on the individual's personal taste and style.</p>
                       <PrimaryButton>More Info</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;