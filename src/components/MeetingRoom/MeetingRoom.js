import React, { useState } from "react";
import "./meetingroom.css";
import Button from "@mui/material/Button";
import VideoCall from "./VideoCall";

const MeetingRoom = () => {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="meeting-room">
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setInCall(true);
          }}
        >
          Join Meeting
        </Button>
      )}
    </div>
  );
};

export default MeetingRoom;
