import React, { useState } from 'react';
import classes from './Slider.module.css';
import Wrapper from '../../../shared/Wrapper/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Parallax,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import 'swiper/css/effect-coverflow';
import BlogBox from '../../../shared/BlogBox/BlogBox';


const Slider = ({data}) => {
  return (
    <section>
    <Wrapper>
      <div className={classes.mainContainer}>

            <div className={classes.Heading}>
                <h1>Top Trendings </h1>
                <div className={classes.Line}></div>
            </div>
        <Swiper
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        cssMode={true}
        modules={[Navigation,EffectCoverflow, Pagination, Scrollbar, A11y]}
        spaceBetween={60} 
        navigation
        loop={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}  
        onSlideChange={() => console.log('slide change')}
    >
      {data.map((e,i)=>{
                    return(
                      <>
                        {e.category_names.includes("General Health"||"COVID-19")&&<div key={i}>
                        <SwiperSlide><BlogBox linkTo={`/blogs/${e.title}`} key={i} latest={true} data={e.content} title={e.title} date={e.publishDate} author={e.blogger_name} read={e.readTime} img={e.img_url} slug={e.blogId} /></SwiperSlide>
                        </div>}
                      </>
                    )
                  })}
      
    </Swiper>
      </div>
    </Wrapper>
    </section>
  )
}

export default Slider