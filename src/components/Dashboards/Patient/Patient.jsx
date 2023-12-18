import React, { useState } from "react";
import classes from "./Doctor.module.css";
import pic from "../../../assets/images/patient.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventIcon from "@mui/icons-material/Event";
import DuoIcon from "@mui/icons-material/Duo";
import { Button } from "@mui/material";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SettingsIcon from "@mui/icons-material/Settings";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Setting from "./Screens/Setting";
import ApprovedAppoints from "./Screens/ApprovedAppoints";
import History from "./Screens/History";
import Profile from "./Screens/Profile";
import TodaysAppointment from "./Screens/TodaysAppointment";
import Welcome from "./Screens/Welcome";
import logo from "../../../assets/images/HomeImages/logo.png";
import Requests from "./Screens/Requests";

import pat1 from "../../../assets/images/pat1.avif";
import pat2 from "../../../assets/images/pat2.avif";
import pat3 from "../../../assets/images/pat3.avif";
const Patient = () => {
  const [selected, setSelected] = useState(0);
  const Navigate = useNavigate();
  const data = localStorage.getItem("userData");
  const UserData = JSON.parse(data);

  const NavItems = [
    { name: "Profile", icon: <AccountCircleIcon />, path: "profile" },
    // {
    //   name: "Todays Appointment",
    //   icon: <EventIcon />,
    //   path: "todayAppointments",
    // },
    {
      name: "Requested Appoint",
      icon: <DuoIcon />,
      path: "appoint-requests",
    },
    {
      name: "Approved Appoints",
      icon: <ReviewsIcon />,
      path: "approved-appointments",
    },
    {
      name: "Appointment History",
      icon: <CalendarMonthIcon />,
      path: "appoint-history",
    },

    { name: "Settings", icon: <SettingsIcon />, path: "settings" },
  ];
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.leftMain}>
          <div>
            <Link to={"/"} className={classes.logoBox}>
              <img src={logo} className={classes.logo} />{" "}
            </Link>
            <div className={classes.InfoBox}>
              <img
                src={
                  UserData?.img == "pat1"
                    ? pat1
                    : UserData?.img == "pat2"
                    ? pat2
                    : pat3
                }
                className={classes.img}
              />
              <p>{UserData.name}</p>
            </div>
            <div className={classes.NavBox}>
              {NavItems.map((e, i) => (
                <Button
                  size="small"
                  startIcon={e.icon}
                  onClick={() => {
                    setSelected(i);
                    Navigate(`${e.path}`);
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    marginTop: "4px",
                    width: "100%",
                    backgroundColor:
                      selected == i ? "aliceblue" : "transparent",
                    color: selected == i ? "black" : "white",
                    fontFamily: "Helvetica",
                  }}
                >
                  {e.name}
                </Button>
              ))}
            </div>
          </div>

          <Button
            size="small"
            sx={{ color: "white", width: "100%", fontFamily: "Helvetica" }}
            startIcon={<LogoutIcon />}
            onClick={() => {
              localStorage.clear();
              Navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>

        <div className={classes.RightMain}>
          <Routes>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="profile" element={<Profile />} />
            <Route path="todayAppointments" element={<TodaysAppointment />} />
            <Route path="appoint-history" element={<History />} />
            <Route path="appoint-requests" element={<Requests />} />
            <Route
              path="approved-appointments"
              element={<ApprovedAppoints />}
            />
            <Route path="settings" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Patient;
