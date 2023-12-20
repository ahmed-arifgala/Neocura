import React, { useState } from "react";
import classes from "./DocSec.module.css";
import LocCard from "./LocCard/LocCard";
import IconButton from "../../../../UI/Buttons/IconButton/IconButton";
import icon from "../../../../assets/Icons/videoCon2.png";
import doc111 from "../../../../assets/images/docImgs/doc_111.png";
import doc44 from "../../../../assets/images/docImgs/doc44.png";
import doc33 from "../../../../assets/images/docImgs/doc33.png";
import { Link } from "react-router-dom";

const DocSec = ({ docInfo, locData }) => {
  console.log(docInfo);
  console.log(locData);

  return (
    <div className={classes.DocSec}>
      <div className={classes.DocSecInfo}>
        <div className={classes.Image}>
          <img
            src={
              docInfo.docImg == "doc33"
                ? doc33
                : docInfo.docImg == "doc44"
                ? doc44
                : doc111
            }
            alt="Doctor's Image"
          />
        </div>

        <div className={classes.Info}>
          <div>
            <h1>
              <Link to={docInfo.docId}>{docInfo.name}</Link>
            </h1>

            <h3>
              {docInfo.specialization &&
                docInfo.specialization.map((sp, i) =>
                  i != docInfo.specialization.length - 1 ? sp + ", " : sp
                )}
            </h3>
            <h3>
              {docInfo.education &&
                docInfo.education.map((edu, i) =>
                  i != docInfo.education.length - 1
                    ? edu.eduDegree + ", "
                    : edu.eduDegree
                )}
            </h3>
          </div>

          <div className={classes.ExtraInfo}>
            <div>
              <h3>Waiting Time</h3>
              <p>{docInfo.waitTime}</p>
            </div>
            <div>
              <h3>Experience</h3>
              <p>{docInfo.experience}</p>
            </div>
            <div>
              <h3>Satisfied Patients</h3>
              <p>{docInfo.satisfiedPatients + "% " + "( 5 )"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* {console.log(docInfo.name)}; */}

      <div className={classes.LocCardSec}>
        {/* {console.log(Object.keys(locData))} */}
        {Object.keys(locData)
          .slice(1, 4)
          .map((obj, ki) => {
            {
              console.log(locData[obj]);
            }
            return locData[obj]?.map((sObj, i) => (
              <LocCard key={sObj + i} ImgIndex={ki} locData={sObj} />
            ));
          })}
        ;
      </div>

      <div className={classes.ButtonSec}>
        <Link to={docInfo.docId}>
          <IconButton id="profile" passedClass={classes.ProfileButton}>
            View Profile
          </IconButton>
        </Link>

        <Link
          to={{
            pathname: `/${docInfo.name}/booking`,
          }}
          state={{ docInfo, locData, docId: docInfo.docId }}
        >
          <IconButton id="consultation" passedClass={classes.Button2}>
            Book Appointment
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default DocSec;
