import React from 'react';
// Data
import { testimonialData } from "./data";
import Slide from './TestimonialSlide';

// Swiper Slider
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import TestimonialSlide from './TestimonialSlide';


export default function Testimonial() {
    return (
        <section id="testimonial" className="testimonial section_gap">
            <div className="container testimonial_container">
                <div className="title">
                    <h5>Clients Review</h5>
                    <h2>Testimonials</h2>
                </div>
                <div className="row">
                    <Swiper className="col-12 col-md-8"
                        // install Swiper modules
                        modules={[Pagination, Autoplay]}
                        spaceBetween={35}
                        speed={1500}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            testimonialData.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className="item">
                                        < TestimonialSlide name={data.name} img={data.img} desc={data.desc} />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
