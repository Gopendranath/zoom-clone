"use client";
import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ( { setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void; }) => {
  const [MicCamToggledOn, setMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) throw new Error("Call not found");

  useEffect(() => {
    if (MicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [MicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">MeetingSetup</h1>
      <VideoPreview />
      <div className="flex gap-3 h-16 items-center justify-center">
        <label
          className="flex items-center justify-center gap-2 font-medium  cursor-pointer"
        >
          <input
            type="checkbox"
            checked={MicCamToggledOn}
            onChange={(e) => setMicCamToggledOn(e.target.checked)}
          />
          Join with Microphone and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded-md bg-green-500 px-4 py-2.5 hover:bg-green-600" onClick={() => {call?.join(); setIsSetupComplete(true);}}>
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
