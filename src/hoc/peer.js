import { useEffect } from "react";
export const peer = new RTCPeerConnection({
  iceServers: [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:google.stun.twilio.com:3478",
      ],
    },
  ],
});

export const CreateOffer = async () => {
  const offer = await peer.createOffer();
  await peer.setLocalDescription(offer);
  return offer;
};

export const CreateAnswer = async (offer) => {
  await peer.setRemoteDescription(offer);
  const answer = await peer.createAnswer();
  await peer.setLocalDescription(answer);
  return answer;
};

export const SetRemoteAnswer = async (ans) => {
  await peer.setRemoteDescription(ans);
};

export const SendStream = async (stream) => {
  const tracks = stream.getTracks();
  console.log(tracks);
  tracks.forEach((track) => {
    peer.addTrack(track, stream);
  });
};
// export const SendStream = async (stream) => {
//   const tracks = stream.getTracks();
//   // Check if the track is already added before adding it
//   tracks.forEach((track) => {
//     if (!isTrackAdded(track)) {
//       peer.addTrack(track, stream);
//       // Mark the track as added
//       markTrackAsAdded(track);
//     }
//   });
// };

// // Helper functions to keep track of added tracks
// const addedTracks = new Set();

// const isTrackAdded = (track) => {
//   return addedTracks.has(track.id);
// };

// const markTrackAsAdded = (track) => {
//   addedTracks.add(track.id);
// };
