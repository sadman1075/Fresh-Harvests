import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import reviewer from "../../../public/reviewer.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const TestiMonial = () => {
    return (
        <div>
            <div className=' mb-20 mt-20'>
                <div className='flex justify-center'>
                    <p className="text-[rgb(116,155,63)] p-2 text-center  w-28 bg-lime-100  ">Testimonial</p>

                </div>

                <div>
                    <h1 className='text-center font-bold text-5xl mt-5'>What Our Customers Say</h1>
                    <p className='text-center mt-5'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest</p>
                </div>

            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto' src={reviewer}  alt=""  />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                                <p className='mt-6 '><b>Jane Doe-</b>Professional-chef</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto' src={reviewer}  alt=""  />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                                <p className='mt-6 '><b>Jane Doe-</b>Professional-chef</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='lg:flex justify-center items-center pb-10'>
                            <div className='w-full lg:w-1/2'>
                                <img className='mx-auto' src={reviewer}  alt=""  />
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <p>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                                <p className='mt-6 '><b>Jane Doe-</b>Professional-chef</p>
                            </div>
                        </div>
                    </SwiperSlide>
                   

                </Swiper>
            </div>
        </div>
    );
};

export default TestiMonial;