import React from "react";
import "./meetingroom.css";
import { AgoraVideoPlayer } from "agora-rtc-react";

const Video = (props) => {
  const { users, tracks } = props;

  return (
    <div className="video-container">
      <div className="video">
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div className="video">
                <AgoraVideoPlayer
                  key={user.uid}
                  videoTrack={user.videoTrack}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default Video;
