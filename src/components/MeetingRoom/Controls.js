import React, { useState } from "react";
import "./meetingroom.css";
import { useClient } from "./agoraConfig";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Controls = (props) => {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [tracksState, setTracksState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!tracksState.audio);
      setTracksState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!tracksState.video);
      setTracksState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };
  return (
    <>
      <button
        className="meeting-btn"
        onClick={() => {
          mute("audio");
        }}
      >
        {tracksState.audio ? <MicIcon /> : <MicOffIcon />}
      </button>
      <button
        className="meeting-btn"
        onClick={() => {
          mute("video");
        }}
      >
        {tracksState.video ? <VideocamIcon /> : <VideocamOffIcon />}
      </button>
      <button
        className="meeting-btn"
        onClick={() => {
          leaveChannel();
        }}
      >
        <ExitToAppIcon />
        Leave
      </button>
    </>
  );
};

export default Controls;
