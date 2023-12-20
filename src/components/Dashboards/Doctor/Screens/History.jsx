import React, { useEffect, useState } from "react";
import nodataGif from "../../../../assets/images/NoData.gif";
const History = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
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
      <h1>Appointment Accepted</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <img src={nodataGif} alt="gif" height={300} width={300} />
          <h2>You got no history :)</h2>
        </div>
      </div>
    </div>
  );
};

export default History;
