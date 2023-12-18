import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"
import classes from './Home.module.css'
import { Button } from '@mui/material'
import BlogBox from '../shared/BlogBox/BlogBox'
import axios from "axios"
import { Link } from "react-router-dom";


const Blog = () => {
const [blogsData,setBlogsData]=useState([])
  const [loader,setloader]=useState(true)
  const FetchData=async()=>{
      await axios.get('http://localhost:5000/blogs').then((res)=>{console.log(setBlogsData(res.data))}).catch((err)=>{console.log(err)})
      setloader(false)
  }
  useEffect(()=>{
    FetchData()
  },[])
  return (
    <div className={classes.mainBlogBox}>
      <div className={classes.blogLeft}>
        <div>
        <ScrollAnimation
            animateIn={"fadeInUp"}
            delay={100}
          >

        <h1>Read top articles from health experts</h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn={"fadeInUp"}
            delay={260}
          >

        <p>
        Health articles that keep you informed about good health practices and achieve your goals.
        </p>
          </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn={"fadeInUp"}
            delay={400}
          >
        <Link to={'/blogs'}><button className={classes.button}> See all articles
</button></Link>
        </ScrollAnimation>
      </div>
      <div>
      {blogsData.slice(0,1).map((e,i)=>{
        return(
          <ScrollAnimation
            animateIn={"fadeInRight"}
            delay={700}
          >

          <div key={i}>
                        <BlogBox key={i} linkTo={`/blogs/${e.title}`} title={e.title} date={e.publishData} author={e.blogger_name} read={e.readTime} img={e.img_url} slug={e.blogId} />
                        </div>
          </ScrollAnimation>
                    )
                  })}
      </div>
      
    </div>
  )
}

export default Blog