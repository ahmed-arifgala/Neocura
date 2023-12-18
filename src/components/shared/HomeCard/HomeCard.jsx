import React from 'react';
import classes from './HomeCard.module.css';
import onlinedr from '../../../assets/images/HomeImages/onlinedr.jpg'
import hospital from '../../../assets/images/HomeImages/hospital6.jpg'
import blog from '../../../assets/images/HomeImages/blogImg.png'
import lab from '../../../assets/images/HomeImages/labImg.jpg'
import doc from '../../../assets/images/HomeImages/drImg2 (2).jpg'
const HomeCard = ({ title, desc, img }) => {
  console.log(img)
    return (
    <div>
      <div className={classes.card}>
        <img alt="Home Card Pic" src={img=="onlinedr"?onlinedr:img=="hospital"?hospital:img=="blog"?blog:img=="lab"?lab:img=="doc"?doc:""}/>
        <div className={classes.card__content}>
          <p className={classes.card__title}>{title}</p>
          <p className={classes.card__description}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
