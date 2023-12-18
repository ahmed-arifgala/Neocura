import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import Slider from "./Slider/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./AllBlog.module.css";
import BlogsSection from "./BlogsSection/BlogsSections";
import axios from "axios";
const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loader,setloader]=useState(true)
  const FetchData=async()=>{
      await axios.get('http://localhost:5000/blogs').then((res)=>{console.log(setBlogsData(res.data))}).catch((err)=>{console.log(err)})
      setloader(false)
  }
  useEffect(()=>{
    FetchData()
  },[])
  const scrollToCities = (selectionName) => {
    const citiesSec = document.getElementById('blogsection');
    citiesSec.scrollIntoView({behavior: 'smooth'});
    setSelectedName(selectionName);
}
  
  console.log(blogsData);
  return (
    <>
      {loader ? (
        <main
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(236, 248, 248)",
          }}
        >
          <CircularProgress />
        </main>
      ) : (
        <main className={classes.main}>
          <HeroSection move={scrollToCities}/>
          <Slider data={blogsData} />
          <div id="blogsection">
          <BlogsSection data={blogsData} />
          </div>
        </main>
      )}
    </>
  );
};

export default AllBlogs;