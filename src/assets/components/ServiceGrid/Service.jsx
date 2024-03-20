/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ServiceCard from './ServiceCard';

const ServiceCarousel = ({ services }) => {
    const [isHovered, setIsHovered] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !isHovered,
        autoplaySpeed: 2500 
    };

    return (
        <Slider
            { ...settings }
            onMouseEnter={ () => setIsHovered( true ) }
            onMouseLeave={ () => setIsHovered( false ) }
        >
            { services.map( ( service ) =>
            {
                return (
                    <div
                        className='py-10'
                        key={ service.id }>
                        <ServiceCard
                            serviceImage={ service.image }
                            serviceName={ service.name }
                            serviceText={ service.description }
                        />
                    </div>
                )
            } ) }
        </Slider>
    );
};

export default ServiceCarousel;