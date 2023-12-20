import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
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

const RoomMeeting = () => {
  const params = useParams();
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [remoteName, setRemoteName] = useState(null);

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
  return (
    <div
      className="bg-blue-800"
      style={{
        height: "100vh",
        paddingTop: "70px",
        width: "100%",
        color: "black",
      }}
    >
      <h1>Roome Meeting-{params.id}</h1>
      <h2>You are CONNECTED To {remoteName}</h2>
      <Button onClick={() => sendStreams}>Send My Video</Button>
      <ReactPlayer url={myStream} playing muted />
      {/* <ReactPlayer url={myStream} playing muted /> */}
      <ReactPlayer url={remoteStream} playing muted />
      <ToastContainer />
    </div>
  );
};

export default RoomMeeting;
