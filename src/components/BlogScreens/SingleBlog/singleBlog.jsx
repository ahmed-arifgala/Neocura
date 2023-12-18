import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Wrapper from '../../shared/Wrapper/Wrapper';
import CircularProgress from '@mui/material/CircularProgress';
import classes from './singleBlog.module.css'
import { useState,useEffect } from 'react';
import axios from "axios"

const SingleBlog = () => {

  const Location=useLocation()
  const [blogsData,setBlogsData]=useState([])
  const [loader,setloader]=useState(true)
  const FetchData=async()=>{
      await axios.get("http://localhost:5000/blogs").then((res)=>{console.log(setBlogsData(res.data))}).catch((err)=>{console.log(err)})
      setloader(false)
  }
  useEffect(()=>{
    FetchData()
  },[])
  const blogData=Location.state && Location.state.slug?blogsData.find((e)=>e.blogId==Location.state.slug):""
  console.log(blogData)
  const blogdata={
    title:"T",
    img_url:``,
    "content":`
    
    
    `,
    "author":"Dr. Salman Mansoor",
    "date":"June 5, 2023",
    "tags":["technology","programming"],
    "read":"5 min",
  }
  return (
  <>
    {loader?<main style={{height: '100vh',display: 'flex',justifyContent: 'center',alignItems:"center"}}>
    <CircularProgress/>
    </main>:
    <Wrapper>
      <div className={classes.ParentContainer}>
        <h1>{blogData.title}</h1>
        <img src={blogData.img_url}/>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: blogData.content }} />
      </div>
    </Wrapper>}
      </>
  )
}

export default SingleBlog