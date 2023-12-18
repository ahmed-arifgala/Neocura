import React from 'react'
import classes from './footer.module.css'
import logo from '../../../assets/images/HomeImages/logo.png'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <div>
      
    <div className={classes.Footer}>
   
    <div className={classes.col1}>
    <Link to={'/'} ><img src={logo} className={classes.logo}/> </Link>
    <p className={classes.tagline}>Aims to improve access to healthcare services by providing an easy-to-use platform for patients to search for doctors, view their profiles, and book appointments online.</p>
    <p className={classes.bh}>Lab Tests</p>
    <ul className={classes.list}>
      <li>Labs in Karachi</li>
      <li>Labs in Lahore</li>
      <li>Labs in Islambad</li>
      <li>Labs in Quetta</li>
      <li>Labs in Peshawar</li>
    </ul>
    </div>
    <div>
    <p className={classes.bh}>Top Cities</p>

    <ul className={classes.list}>
      <li>Karachi</li>
      <li>Lahore</li>
      <li>Islambad</li>
      <li>Quetta</li>
      <li>Peshawar</li>
    </ul>
    </div>
    <div>
    <p className={classes.bh}>Top Hospitals</p>

<ul className={classes.list}>
  <li>Agha Khan University Karachi</li>
  <li>Liaquat Nationa Hospital</li>
  <li>Indus Hospital</li>
  <li>Shifa International Hospital</li>
  <li>Jinnah Hospital</li>
  <li>North West General Hospital</li>
  <li>JCivil Hospital Quetta</li>
  <li>Ziauddin Hospital</li>
  <li>Mayo Hospital</li>
  <li>Lady Reading Hospital</li>
  <li style={{display:"flex",alignItems: "center",gap:"10px",marginLeft:"30px"}}>View All  <ArrowForwardIcon sx={{color:"gray",fontSize:"20px"}}/></li>
</ul>
    </div>
    <div>
    <p className={classes.bh}>Top Specialites</p>

<ul className={classes.list}>
  <li>Cardiologist</li>
  <li>Pulmonologist</li>
  <li>Cancer Specialist</li>
  <li>Eye Specialist</li>
  <li>Dermatologist</li>
  <li>Cosmetologist</li>
  <li style={{display:"flex",alignItems: "center",gap:"10px",marginLeft:"14px"}}>View All  <ArrowForwardIcon sx={{color:"gray",fontSize:"20px"}}/></li>
</ul>
    </div>
    </div >
    <div className={classes.bottomFooter} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <div class="mr-3 footer-icon">
                            <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1868 0L0 5.83333V14.5833C0 22.6771 5.62635 30.2458 13.1868 32.0833C20.7472 30.2458 26.3735 22.6771 26.3735 14.5833V5.83333L13.1868 0ZM10.2564 23.3333L4.39559 17.5L6.46151 15.4437L10.2564 19.2062L19.912 9.59583L21.9779 11.6667L10.2564 23.3333Z" fill="white"></path>
                            </svg>
                        </div>
                        <div class="icon-content">
                            <p class="mb-0 text-white text-md font-weight-normal">PMC Verified Doctors</p>
                            <p class="mb-0 text-base text-white font-weight-normal">Authentic &amp; updated information</p>
                        </div>
      </div>

      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <div class="mr-2 footer-icon mr-lg-3 mr-md-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="pt-1 bi bi-cash-stack text-light" viewBox="0 0 16 16">
                                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"></path>
                            </svg>
                        </div>
                        <div class="icon-content">
                            <p class="mb-0 text-white text-md font-weight-normal">Money back guarantee</p>
                            <p class="mb-0 text-base text-white font-weight-normal">We return money within 48 hours</p>
                        </div>
                    </div>
      
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <div class="mr-3 footer-icon">
                            <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5635 0C6.07345 0 0 6.045 0 13.5V24C0 26.49 2.01946 28.5 4.52118 28.5H9.04235V16.5H3.01412V13.5C3.01412 7.695 7.73121 3 13.5635 3C19.3958 3 24.1129 7.695 24.1129 13.5V16.5H18.0847V28.5H24.1129V30H13.5635V33H22.6059C25.1076 33 27.1271 30.99 27.1271 28.5V13.5C27.1271 6.045 21.0536 0 13.5635 0Z" fill="white"></path>
                            </svg>
                        </div>
                        <div class="icon-content">
                            <p class="mb-0 text-white text-md font-weight-normal">12/7 customer support</p>
                            <p class="mb-0 text-base text-white font-weight-normal">Well-trained &amp; Supportive team</p>
                        </div>
                    </div>
      
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                        <div class="mr-3 footer-icon">
                            <svg width="29" height="37" viewBox="0 0 29 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.375 12.3333H23.5625V8.80952C23.5625 3.94667 19.5025 0 14.5 0C9.4975 0 5.4375 3.94667 5.4375 8.80952V12.3333H3.625C1.63125 12.3333 0 13.919 0 15.8571V33.4762C0 35.4143 1.63125 37 3.625 37H25.375C27.3687 37 29 35.4143 29 33.4762V15.8571C29 13.919 27.3687 12.3333 25.375 12.3333ZM14.5 28.1905C12.5063 28.1905 10.875 26.6048 10.875 24.6667C10.875 22.7286 12.5063 21.1429 14.5 21.1429C16.4937 21.1429 18.125 22.7286 18.125 24.6667C18.125 26.6048 16.4937 28.1905 14.5 28.1905ZM20.1188 12.3333H8.88125V8.80952C8.88125 5.79667 11.4006 3.34762 14.5 3.34762C17.5994 3.34762 20.1188 5.79667 20.1188 8.80952V12.3333Z" fill="white"></path>
                            </svg>
                        </div>
                        <div class="icon-content">
                            <p class="mb-0 text-white text-md font-weight-normal">Secure online payment</p>
                            <p class="mb-0 text-base text-white font-weight-normal">We possess SSL / Secure сertificate</p>
                        </div>
                    </div>
        

                   </div>
 </div>
  )
}

export default Footer