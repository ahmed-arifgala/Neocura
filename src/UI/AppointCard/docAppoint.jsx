import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import IconButton from "../Buttons/IconButton/IconButton";
import icon from "../../assets/Icons/videoCon2.png";
import doc111 from "../../assets/images/docImgs/doc_111.png";
import doc44 from "../../assets/images/docImgs/doc44.png";
import doc33 from "../../assets/images/docImgs/doc33.png";
import { Link } from "react-router-dom";
import pat1 from "../../assets/images/pat1.avif";
import pat2 from "../../assets/images/pat2.avif";
import pat3 from "../../assets/images/pat3.avif";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DocSec = ({ data, setFresh, fresh }) => {
  console.log(data, "jkbkb");
  const [DocData, setDocData] = useState();
  const DeleteBooking = () => {
    axios
      .delete(
        `http://localhost:5000/onlineBooking/deleteBooking/${data?.onlineConsultId}`
      )
      .then((res) => {
        toast.error("Appointment Deleted !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFresh(!fresh);
        console.log(res.data.data);
        // setPatData(res.data.data);
      })
      .catch((err) => {
        toast.error("Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getDoctorById/${data?.platDocId}`)
      .then((res) => {
        console.log(res.data.data);
        setDocData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div className={classes.DocSec}>
      <div className={classes.DocSecInfo}>
        <div className={classes.Image}>
          <img
            src={
              DocData?.docImg == "doc33"
                ? doc33
                : DocData?.docImg == "doc44"
                ? doc44
                : doc111
            }
            alt="Doctor's Image"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            gap: "60px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "22px" }}>Dr. {DocData?.name}</h1>
          </div>

          <div className={classes.ExtraInfo}>
            <div>
              <h3>Date</h3>
              <p>{data?.Date}</p>
            </div>
            <div>
              <h3>Time</h3>
              <p>{data?.Time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ButtonSec}>
        <IconButton
          clicked={() => {
            DeleteBooking();
          }}
          id="cross"
          passedClass={classes.Button3}
        >
          Cancel
        </IconButton>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DocSec;
