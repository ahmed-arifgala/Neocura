import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Parallax,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import 'swiper/css/effect-coverflow';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
// SwiperCore.use([Navigation, Pagination, Parallax]);
// import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import vid from "../../assets/images/HomeImages/homeVideo.mp4";
import SearchBar from "./SearchBar";
import LocationBar from "./LocationBar";
import HomeCard from "../shared/HomeCard/HomeCard";
import Wrapper from "../shared/Wrapper/Wrapper";
import Symtoms from "./Symtoms";
import Disease from "./Disease";
import Blog from "./Blog";
import doc from '../../assets/images/HomeImages/drImg2 (2).jpg';
import doc2 from '../../assets/images/HomeImages/drImg.jpg';
import icon from '../../assets/images/HomeImages/ratin.gif';
import like from '../../assets/images/HomeImages/like.png';
import person1 from '../../assets/images/HomeImages/person1.jpg';
import person2 from '../../assets/images/HomeImages/person2.jpg';
import person3 from '../../assets/images/HomeImages/person3.jpg';
import person4 from '../../assets/images/HomeImages/person4.jpg';

const Home = () => {
 const Data=[
  {name:"Misbah Khan",tag:"Good",img:person1,content:"It is really good initiative to connect with health care personals. If you feel a need for help then helpline is there to take care of it. overall very good experience.",star:4},
  {name:"Irfan Muddasir",tag:"Excelletnt",img:person2,content:"My first appointment today.It was a very smooth experience and the skin specialist was very helpful and professional experiences so far facility is also very good.",star:3},
  {name:"Aisha Kiran",tag:"Awsome",img:person3,content:"I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",star:4},
  {name:"Ahmed Irfan",tag:"Satisfied",img:person4,content:"My first appointment today.It was a very smooth experience and the skin specialist was very helpful and professional experiences so far facility is also very good.",star:3},
  {name:"Aisha Kiran",tag:"Good",img:doc,content:"I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",star:4},
  {name:"Ahmed Irfan",tag:"Excellent",img:doc2,content:"I got late on my appointment, but after 10 minutes, the doctor called me and prescribed medicines, which is far better than appointing physically and waiting!",star:3},
]
const CardData=[
  {title:"Instant Video Consultation",desc:"Provinf you doctor at your home",img:"onlinedr"},
  {title:"Find Doctors Near You",desc:"Bringing You the Best in Healthcare: Uniting Informative Articles in One Comprehensive Hub",img:"doc"},
  {title:"Hospitals",desc:"Healing Lives, Building Hope: Your Path to Wellness",img:"hospital"},
  // {title:"Laboratories",desc:"Discover Lab Locations: Convenient Access to Comprehensive Diagnostics in One Place",img:"lab"},
  {title:"Health Blogs",desc:"Bringing You the Best in Healthcare: Uniting Informative Articles in One Comprehensive Hub",img:"blog"},
]
  return (
    <div className={classes.Home}>
      <video src={vid} className={classes.Video} autoPlay muted loop />      
        <h1 className={classes.Title} >Find The Best Doctor Near You</h1>
      <div className={classes.SerachBarContainer}>
        <LocationBar />
        <SearchBar />
      </div>
      <Wrapper>
        <div className={classes.Lowersection}>
        <ScrollAnimation
            animateIn={"fadeInLeft"}
            className={classes.left}
            >
        <h1>How can we help you Today?</h1>
        </ScrollAnimation>
        <div className={classes.CardBox}>
          {CardData.map((e,i)=>(
            <ScrollAnimation
            animateIn={"fadeInLeft"}
            delay={(i+1)*300}
            key={i}
            // className={"sec-1 "}
            // animatePerScroll={false}
          >
                <HomeCard key={i} title={e.title} desc={e.desc} img={e.img} />
                </ScrollAnimation>
          ))}
      </div>
      <div className={classes.IconMainContainer}>
        <Symtoms/>
        <Disease/>
      </div>
      <Blog/>
      </div>
      <div className={classes.review}>
      <ScrollAnimation
            animateIn={"fadeInUp"}
            // delay={400}
            className={classes.reviewH1}
          >
        <h1 >What our Users have to say</h1>
          </ScrollAnimation>
          <ScrollAnimation
              animateIn={"fadeInUp"}
              delay={300}
              // className={"sec-1 "}
              // animatePerScroll={false}
            >
        <Swiper
        grabCursor={true}
        slidesPerView={3}
        centeredSlides={true}
        cssMode={true}
        modules={[Navigation,EffectCoverflow, Pagination, Scrollbar, A11y]}
        spaceBetween={10} 
        navigation
        draggable={true}
        style={{paddingLeft:"70px",paddingTop:"50px",display:"flex",justifyContent:"center",marginBottom:"80px"}}
        loop={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}  
        onSlideChange={() => console.log('slide change')}
    >
          {Data.map((e,i)=>{
            return(
              <SwiperSlide style={{paddingTop:"20px",paddingBottom:"20px"}}> 
              <div  className={classes.reviewBox}>
            <img style={{borderRadius:"999px",height:"130px",width:"130px",border:"6px solid white",objectFit:"cover"}} src={e.img}/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <h1>{e.name}</h1>
            <img style={{height:"30px"}} src={like}/>
            </div>
            <p>{e.content}</p> 
                <div style={e.star===4?{backgroundColor:"#99EDC3"}:{backgroundColor:"#FEC5E5"}} className={classes.BottomReview}>
            <div style={{marginRight:"10px"}}>
              <i>
{              [...Array(e.star+1)].map((e,i)=>(
                <img src={icon} style={{height:"26px",marginRight:"4px"}}/>  
          ))}

              </i>
            </div>
            <p><i>{e.tag}</i></p>

          </div>
          </div>
          </SwiperSlide>
            )
          })}
    </Swiper>
          </ScrollAnimation>

      </div>
      </Wrapper>
    </div>
  );
};

export default Home;
