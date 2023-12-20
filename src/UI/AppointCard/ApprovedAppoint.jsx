import React, { useEffect, useState } from "react";
import classes from "./style.module.css";
import IconButton from "../Buttons/IconButton/IconButton";
import icon from "../../assets/Icons/videoCon2.png";
import doc111 from "../../assets/images/docImgs/doc_111.png";
import doc44 from "../../assets/images/docImgs/doc44.png";
import doc33 from "../../assets/images/docImgs/doc33.png";
import { Link, useNavigate } from "react-router-dom";
import pat1 from "../../assets/images/pat1.avif";
import pat2 from "../../assets/images/pat2.avif";
import pat3 from "../../assets/images/pat3.avif";
import axios from "axios";
import { VideoCall } from "@mui/icons-material";
import { socket } from "../../hoc/socket";
// import { useSocket } from "../../Context/Context";
const DocSec = ({ data }) => {
  // const { socket } = useSocket();
  const [PatData, setPatData] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    socket.on("joined-room", ({ roomId }) => {
      Navigate(`/meeting-room/${roomId}`);
    });
  }, [socket]);

  const handleJoinRoom = async () => {
    let roomId = Math.floor(100000 + Math.random() * 900000);
    socket.emit("join-room", {
      roomId: roomId,
      Name: "Dr Talal",
    });
    const res = await axios.post(
      "http://localhost:5000/onlineBooking/UpdateRoomId",
      { roomId, id: data?.onlineConsultId }
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getPatientById/${data?.patId}`)
      .then((res) => {
        console.log(res.data.data);
        setPatData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [data]);
  console.log(data, PatData);
  return (
    <div className={classes.DocSec}>
      <div className={classes.DocSecInfo}>
        <div className={classes.Image}>
          <img
            src={
              PatData?.img == "pat1"
                ? pat1
                : PatData?.img == "pat2"
                ? pat2
                : pat3
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
            <h1 style={{ fontSize: "22px" }}>{PatData?.name}</h1>
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
            <div>
              <h3>Contact</h3>
              <p>{PatData?.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.ButtonSec}>
        <IconButton
          id="none"
          clicked={() => handleJoinRoom()}
          passedClass={classes.ProfileButton3}
        >
          <VideoCall />
          Start Meeting
        </IconButton>
      </div>
    </div>
  );
};

export default DocSec;
