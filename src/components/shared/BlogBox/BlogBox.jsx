import React, { useState } from "react";
import classes from "./BlogBox.module.css";
import { Link, useNavigate } from "react-router-dom";

const BlogBox = ({ img, title, slug,linkTo, author, date, data,read,latest }) => {
  const navigate=useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  let truncatedData;
  if(data){
    truncatedData = data.split(" ").slice(0, 30).join(" ") + " ...</p>";
    console.log(truncatedData)
  }
  const move=()=>{
    navigate(linkTo,{state:{slug:slug}})
  }
  return (
    <div className={latest?classes.ParentBox:""}>
      <div className={!latest?classes.container:classes.container2}>
        <img onClick={()=>{move()}} src={img} alt="Blog Image" className={!latest?classes.BlogImage:classes.BlogImage2} />
        <div className={!latest?classes.textContainer:classes.textContainer2}>
          <div onClick={()=>{move()}}>
            <h2 className={classes.title}>{title.length>30?title.slice(0,30)+" ...":title}</h2>
            <p className={classes.author}>
              By : <strong>{author}</strong>
            </p>
          </div>
          {
            latest?<div onClick={()=>{move()}} className={classes.ContentPara} dangerouslySetInnerHTML={{ __html: truncatedData }}>
            </div>:""
          }
          <div className={classes.bottomPart}>
            <div className={!latest?classes.dateRead:classes.dateRead2}>
              <p>{new Date(date).toLocaleDateString("en-US",{year: "numeric",month: "long",day: "numeric"})}</p>
              <p>
                <li>{read} min read</li>
              </p>
            </div>
            {!latest&&<button
              className={isSaved ? classes.saveIcon : classes.unSaveIcon}
              onClick={() => {
                setIsSaved(!isSaved);
              }}
            ></button>}
          </div>        </div>      </div>    </div>);};

export default BlogBox;