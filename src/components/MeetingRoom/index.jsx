import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { socket } from "../../hoc/socket";
import {
  CreateOffer,
  peer,
  CreateAnswer,
  SetRemoteAnswer,
  SendStream,
} from "../../hoc/peer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPlayer from "react-player";
import { Button } from "antd";
import { Phone } from "@mui/icons-material";

const RoomMeeting = () => {
  const Navigate = useNavigate();
  const params = useParams();
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [remoteName, setRemoteName] = useState(null);
  const [showRemote, setShowRemote] = useState(false);
  setTimeout(() => {
    setShowRemote(true);
  }, 8000);
  const handleNewUserJoined = useCallback(
    async (data) => {
      const { Name } = data;
      toast.success(`${Name} Joined the Room !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      const offer = await CreateOffer();
      socket.emit("call-user", { offer, Name });
      setRemoteName(Name);
    },
    [socket, CreateOffer]
  );
  const sendStreams = useCallback(() => {
    if (myStream) {
      console.log("inside");
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    } else {
      console.log("no stream");
    }
  }, [myStream]);
  const handleIncomingCall = useCallback(async ({ offer, from }) => {
    console.log("Incoming Call From", from, offer);
    const ans = await CreateAnswer(offer);
    socket.emit("call-accepted", { from, ans });
    setRemoteName(from);
  }, []);

  const handleCallAccepetd = useCallback(
    async ({ ans }) => {
      console.log("call get accepted");
      await SetRemoteAnswer(ans);
      sendStreams();
    },
    [sendStreams]
  );

  const getUserMediaScreen = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setMyStream(stream);
  }, [SendStream]);

  const handleTrackEvent = (ev) => {
    const streams = ev.streams;
    console.log(streams, ev);
    setRemoteStream(streams[0]);
  };

  const handleNegotiation = useCallback(() => {
    // console.log("negotionat needed");
    const localOffer = peer.localDescription;
    // const localOffer = peer.createOffer();
    socket.emit("call-user", { Name: remoteName, offer: localOffer });
  }, [peer, remoteName, socket]);

  useEffect(() => {
    socket.on("user-joined", handleNewUserJoined);
    socket.on("incominig-call", handleIncomingCall);
    socket.on("call-accepted", handleCallAccepetd);
    return () => {
      socket.off("user-joined", handleNewUserJoined);
      socket.off("incominig-call", handleIncomingCall);
      socket.off("call-accepted", handleCallAccepetd);
    };
  }, [socket, handleNewUserJoined, handleIncomingCall]);

  useEffect(() => {
    getUserMediaScreen();
  }, [getUserMediaScreen]);

  useEffect(() => {
    peer.addEventListener("negotiationneeded", handleNegotiation);
    return () => {
      peer.removeEventListener("negotiationneeded", handleNegotiation);
    };
  }, [peer]);

  useEffect(() => {
    peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);
  console.log("myStream", myStream);
  console.log("remoteName", remoteStream);
  const HandleCancel = () => {
    const token = localStorage.getItem("accessToken");
    const type = localStorage.getItem("userType");
    if (type == "doctor") {
      Navigate(`/doctor/${token}/dashboard/profile`);
    } else {
      Navigate(`/patient/${token}/dashboard/profile`);
    }
  };
  return (
    <div
      className="bg-blue-800"
      style={{
        height: "100vh",
        paddingTop: "100px",
        width: "100%",
        background: "#2c2c31",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Room Meeting-{params.id}</h1>
      <h2 style={{ marginTop: "10px", marginBottom: "49px" }}>
        You are in meeting with {remoteName}
      </h2>
      {/* <Button onClick={() => sendStreams}>Send My Video</Button> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "40px",
        }}
      >
        <ReactPlayer url={myStream} playing muted />
        {showRemote && <ReactPlayer url={myStream} playing muted />}
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          style={{
            backgroundColor: "red",
            color: "white",
            marginTop: "30px",
            padding: "20px",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={HandleCancel}
        >
          <Phone />
          End Call
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RoomMeeting;
