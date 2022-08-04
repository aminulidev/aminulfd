import Image from "next/image";

import client1 from "../../public/assets/client1.jpg";
import client2 from "../../public/assets/client2.jpg";
import client3 from "../../public/assets/client3.jpg";

// Swiper Slider
import { Pagination, Autoplay } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper Style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



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
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="item">
                        <div className="img">
                            <Image src={client1} alt="Client1" />
                        </div>
                        <h5>John Smith</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, nostrum molestias? Ea voluptatem eveniet repellendu.</p>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="img">
                            <Image src={client2} alt="Client2" />
                        </div>
                        <h5>John Smith</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, nostrum molestias? Ea voluptatem eveniet repellendu.</p>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                        <div className="img">
                            <Image src={client3} alt="Client3" />
                        </div>
                        <h5>John Smith</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, nostrum molestias? Ea voluptatem eveniet repellendu.</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}
