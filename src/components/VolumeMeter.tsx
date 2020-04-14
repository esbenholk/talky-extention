import React from "react";
import styled from "styled-components";

interface Props {
  buckets: number;
  volume: number;
  speaking: boolean;
}

interface ContainerProps {
  buckets: number;
}

const Container = styled.div(({ buckets }: ContainerProps) => ({
  width: "100px",
  "@media (max-width: 420px)": {
    width: "25px"
  },
  display: "grid",
  gridTemplateRows: `repeat(${buckets}, 1fr)`,
  gridRowGap: "20px"
}));

interface BucketProps {
  filled: boolean;
  speaking: boolean;
}

const Bucket = styled.div(({ filled, speaking }: BucketProps) => ({
  // border: "2px solid white",
  minHeight: "20px",
  borderRadius: "10px",
  // backgroundColor: filled ? (speaking ? "red" : "yellow") : "",
  backgroundImage: filled
    ? speaking
      ? "url('https://i.pinimg.com/originals/31/b2/11/31b2113befba348aa559a4ef1068d8b2.png')"
      : "red"
    : ""
}));

const VolumeMeter: React.SFC<Props> = ({ buckets, volume, speaking }) => {
  const bucketSize = 100 / buckets;
  return (
    <Container buckets={buckets}>
      {Array.from(Array(buckets)).map((_, i) => (
        <Bucket
          key={i}
          filled={volume >= (buckets - i) * bucketSize}
          speaking={speaking}
        />
      ))}
    </Container>
  );
};

export default VolumeMeter;
