import React from 'react';
import InfoCards from '../../Shared/InfoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <InfoCards></InfoCards>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;