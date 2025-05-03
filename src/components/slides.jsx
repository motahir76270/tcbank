import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Tc from '../assets/tc.jpeg'
import Tcb from '../assets/tcb.jpeg'
import Bank from '../assets/bank.jpg'
import Man from '../assets/man.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const Slides = () => {
  return (
      <>
    <div>
        <Swiper 
        modules={[Pagination , Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={ {delay: 1500 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     
      >
      <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-100' src={Tcb} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-100' src={Man} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-100' src={Tc} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center w-95%'>
         <img className='w-500 h-100' src={Bank} alt="Rupay credit card on upi"></img>
        </div>
        </SwiperSlide>
     
    </Swiper>
    </div>
    </>
  )
}

export default Slides