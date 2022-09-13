import React from 'react';
import Image from "next/image";
import {SwiperSlide} from 'swiper/react';

const TestimonialSlide = ({name, img, desc}) => {
    return (
        < >
            <div className="img">
                <Image src={img} height={100} width={100} alt={name} />
            </div>
            <h5>{name}</h5>
            <p>{desc}</p>
        </>
    )
}

export default TestimonialSlide