import React, { useState } from 'react';
import classes from './BlogsSection.module.css'
import Wrapper from '../../../shared/Wrapper/Wrapper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BlogBox from '../../../shared/BlogBox/BlogBox';


const BlogsSection = ({data}) => {
  return (
    <section id="blogs">
    <Wrapper>
        <div className={classes.mainContainer}>
            <div className={classes.Heading}>
                <h1>All Blogs</h1>
                <div className={classes.Line}></div>
            </div>
            <div className={classes.blogContainer}>
                {data.map((e,i)=>{
                    return(
                        <div key={i}>
            <BlogBox key={i} linkTo={`/blogs/${e.title}`} title={e.title} date={e.publishData} author={e.blogger_name} read={e.readTime} img={e.img_url} slug={e.blogId} />
                        </div>
                    )
                })}
            </div>
        </div>
    </Wrapper>
    </section>
  )
}

export default BlogsSection;