import { Media, Video, VolumeMeter } from "@andyet/simplewebrtc";
import MicIcon from "material-icons-svg/components/baseline/Mic";
import React from "react";
import styled from "styled-components";
import mq from "../styles/media-queries";
import { default as Meter } from "./VolumeMeter";

const Container = styled.div({
  height: "100vh",
  width: "80vw",
  position: "relative",

  "& video": {
    zIndex: "4",
    width: "350px",
    height: "auto",
    objectFit: "contain",
    position: "fixed",
    left: "610px",
    top: "570px",
    borderRadius: "10px",
    "@media (max-width: 420px)": {
      width: "50%",
      left: "100px",
      top: "330px"
    }
  }
});

const BlankVideo = styled.div({
  width: "100%",
  height: "100%",
  color: "pink",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& p": {
    margin: 0
  }
});

const Volume = styled.div({
  position: "fixed",
  left: "350px",
  top: "-300px",
  "@media (max-width: 420px)": {
    left: "0px",
    bottom: "0px",
    width: "10%"
  },
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "8px",

  "& svg": {
    fontSize: "50px",
    fill: "white",
    marginTop: "8px"
  },
  "& div": {
    flex: 1
  }
});

const NoVideo = () => (
  <BlankVideo>
    <p></p>
  </BlankVideo>
);

interface MediaPreviewProps {
  audio?: Media;
  video?: Media;
}

// MediaPreview displays a camera feed if video is provided, and a VolumeMeter
// if audio is provided.
const MediaPreview: React.SFC<MediaPreviewProps> = ({ audio, video }) => (
  <Container>
    {audio ? (
      <VolumeMeter
        media={audio}
        render={({ volume, speaking }) => (
          <Volume>
            <Meter buckets={20} volume={volume + 100} speaking={speaking} />
            <img src="https://stayvirtual.s3.amazonaws.com/verticaljoint.png" />
          </Volume>
        )}
      />
    ) : null}
    <img
      className="teletubby"
      src="https://stayvirtual.s3.amazonaws.com/teletubby.png"
    />
    {video && video.loaded ? <Video media={video} /> : <NoVideo />}
  </Container>
);

export default MediaPreview;
