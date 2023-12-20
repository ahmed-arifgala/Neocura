import React, { useEffect, useState } from "react";
import classes from "./BookAppointment.module.css";
import Wrapper from "../shared/Wrapper/Wrapper";
import { Box, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoBox from "./InfoBox";
import { dates, weekdays, months } from "../../data/BookingAppoint/data";
// import VideoCon from '../../assets/images/GeneralImages/'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const BookAppointment = (props) => {
  const location = useLocation();

  const Data = location.state && location.state;
  console.log("state", location);
  const ComingData = {
    name: `Dr. ${Data?.docInfo?.name}`,
    img: Data?.docInfo?.docImg,
    speciality:
      Data?.docInfo?.specialization &&
      Data?.docInfo?.specialization.map((sp, i) =>
        i != Data?.docInfo?.specialization.length - 1 ? sp + ", " : sp
      ),
    phone: "0334779229",
    workingDetails: [
      ...Data?.locData?.hospital,
      ...Data?.locData?.onlineConsultation,
    ],
    //   {
    //     name: "Dow Medical Center",
    //     location: "ColumbiaDoctors - 1244 Amsterdam Avenue",
    //     fees: "2000",
    //   },
    //   {
    //     name: "Mount Sinai Hospital",
    //     location: "One Gustave L. Levy Place",
    //     fees: "2500",
    //   },
    //   { name: "Mayo Clinic", location: "200 First Street SW", fees: "3000" },
    //   {
    //     name: "Video Consultaion",
    //     location: "Video Consultaion",
    //     fees: "6000",
    //   },
    timingDetails: [
      { day: "Monday", openingTime: "4:00 AM", closingTime: "10:00 AM" },
      { day: "Tuesday", openingTime: "6:20 PM", closingTime: "8:00 PM" },
      { day: "Wednesday", openingTime: "3:00 AM", closingTime: "6:00 AM" },
      { day: "Thursday", openingTime: "4:30 PM", closingTime: "8:00 PM" },
      { day: "Friday", openingTime: "6:10 PM", closingTime: "9:00 PM" },
      { day: "Saturday", openingTime: "6:20 PM", closingTime: "8:00 PM" },
      { day: "Sunday", openingTime: "9:40 AM", closingTime: "11:00 AM" },
    ],
  };
  const [selectedLocation, setSelectedLocation] = useState(
    ComingData.workingDetails[0].name
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );

  const places = ComingData.workingDetails.map((e, i) => e.name);

  const address = ComingData.workingDetails.filter(
    (e) => e.name === selectedLocation
  );

  const [times, setTimes] = useState([]);

  const [modal, setModal] = useState({
    docId: "221",
    patientId: "223",
    appointmentlocation: address[0]?.location,
    appointmentPlace: selectedLocation,
    docFees: address[0]?.fees,
    appointmentDate: selectedDate + selectedMonth,
    appointmentTime: selectedTime,
    BookingDate: `${new Date().getDate()} ${months[new Date().getMonth()]}`,
    BookingTime:
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds(),
  });

  useEffect(() => {
    const selectedDay =
      dates.find((date) => date.date === selectedDate)?.day === "Today"
        ? weekdays[new Date().getDay() % 7]
        : dates.find((date) => date.date === selectedDate)?.day;

    const selectedTiming = ComingData.timingDetails.find(
      (timing) => timing.day.toLowerCase() === selectedDay.toLowerCase()
    );

    if (selectedTiming) {
      const openingTime = Number(selectedTiming.openingTime.split(":")[0]);
      const openingMinutes = Number(
        selectedTiming.openingTime.split(":")[1].split(" ")[0]
      );

      const closingTime = Number(selectedTiming.closingTime.split(":")[0]);
      const closingMinutes = Number(
        selectedTiming.closingTime.split(":")[1].split(" ")[0]
      );
      const ShiftTime = selectedTiming.closingTime.split(":")[1].split(" ")[1];

      const interval = 15;
      let timesArray = [];

      let currentTime = new Date();
      currentTime.setHours(openingTime);
      currentTime.setMinutes(openingMinutes);

      while (
        currentTime.getHours() < closingTime ||
        (currentTime.getHours() === closingTime &&
          currentTime.getMinutes() <= closingMinutes)
      ) {
        const hours = currentTime.getHours().toString().padStart(2, "0");
        const minutes = currentTime.getMinutes().toString().padStart(2, "0");
        const time = hours + ":" + minutes + " " + ShiftTime;
        timesArray.push(time);

        currentTime.setMinutes(currentTime.getMinutes() + interval);
      }

      setTimes(timesArray);
      setSelectedTime(timesArray[0]);
    } else {
      setTimes([]);
      setSelectedTime("");
    }
  }, [selectedDate]);

  useEffect(() => {
    setModal({
      docId: "221",
      patientId: "223",
      appointmentlocation: address[0]?.location,
      appointmentPlace: selectedLocation,
      docFees: address[0]?.fees,
      appointmentDate: selectedDate + selectedMonth,
      appointmentTime: selectedTime,
      BookingDate: `${new Date().getDate()} ${months[new Date().getMonth()]}`,
      BookingTime:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    });
  }, [selectedLocation, selectedTime, selectedDate]);
  const Submit = () => {
    if (!localStorage.getItem("accessToken")) {
      toast.error("You need to be logged in !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    console.log("object,Data?.docId", Data?.docId);
    axios
      .post("http://localhost:5000/onlineBooking", {
        docId: Data?.docId,
        patId: localStorage.getItem("userId"),
        date: `${selectedDate} ${selectedMonth}, ${new Date().getFullYear()}`,
        time: selectedTime,
        status: "pending",
      })
      .then((res) => {
        toast.success("Appointment Booked !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((res) => {
        toast.error("Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    console.log(modal);
  };

  return (
    <div className={classes.bg}>
      <Wrapper>
        <div className={classes.container}>
          <InfoBox
            img={ComingData.img}
            name={ComingData.name}
            spec={ComingData.speciality}
            fees={address[0]?.fees}
            loc={address[0]?.location}
            phone={ComingData.phone}
          />
          <div className={classes.bookingBox}>
            {/* Location Portion */}
            <div className={classes.selectLoc}>
              <h3>Select Clinic/Hospital</h3>
              <div className={classes.LocBoxContainer}>
                {places.map((e, i) => (
                  <div className={classes.LocCard}>
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedLocation(e);
                      }}
                      className={
                        selectedLocation === e
                          ? classes.SelectedLocBox
                          : classes.LocBox
                      }
                    >
                      <p>{e}</p>
                    </div>

                    {/* <p className={classes.Heading}> */}
                    {/* <img src={ImgIndex == 0 ? videoConIcon : ImgIndex == 1 ? hospitalIcon : clinicIcon } /> */}
                    {/* {e} */}
                    {/* </p> */}

                    {/* <div>
                      <div className={classes.Info}>
                          <span className={classes.CircleIcon}> </span>
                          {
                          isAvailableNow? (<p>Available Now</p>) 
                          : (
                              <p>
                                  <span>Available {nextAvailableDay === currentDay ? 'Today' : ' on ' + nextAvailableDay}</span>
                              </p>
                          )
                          }
                          <p>Rs. {locData.fees}</p>
                      </div> */}

                    {/* <div className={classes.Timing}>
                       { 
                          !isAvailableNow ? (<p style={{fontSize: '12px', marginLeft: '18px'}}>{nextAvailableTime}</p>) : null
                       }
                      </div> */}

                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>

            {/* DATE Portion */}
            <div className={classes.selectLoc}>
              <h3>Date</h3>
              <div className={classes.ScrollDateBox}>
                {dates.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedDate(e.date);
                      setSelectedMonth(e.month);
                    }}
                    className={
                      selectedDate === e.date
                        ? classes.SelectedDateBox
                        : classes.DateBox
                    }
                  >
                    <p>{e.day}</p>
                    <div style={{ display: "flex", gap: "4px" }}>
                      <p>{e.date}</p>
                      <p>{e.month}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings Portion */}
            <div className={classes.selectLoc}>
              <h3>Time</h3>
              <div className={classes.TimeBoxContainer}>
                {times.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedTime(e);
                    }}
                    className={
                      selectedTime === e
                        ? classes.SelectedTimeBox
                        : classes.TimeBox
                    }
                  >
                    <p>{e}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className={classes.btn}>
              <Button
                startIcon={<CalendarMonthIcon />}
                onClick={Submit}
                color="success"
                sx={{ padding: "10px" }}
                size="large"
                variant="contained"
              >
                Book Appointment
              </Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BookAppointment;
