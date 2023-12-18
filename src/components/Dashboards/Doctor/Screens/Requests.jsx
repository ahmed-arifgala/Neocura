import React from "react";
import AppointCard from "../../../../UI/AppointCard";

const Requests = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "20px",
        backgroundColor: "inherit",
      }}
    >
      <h1>Appointment Requests</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppointCard />
        <AppointCard />
        <AppointCard />
        <AppointCard />
      </div>
    </div>
  );
};

export default Requests;
