import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "1b493330d4b14aeaa2a96d9d392314b4"; //ENTER APP ID HERE
const token = null;

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "video-chat";
