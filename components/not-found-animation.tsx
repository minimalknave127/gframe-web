"use client";

import Lottie from "react-lottie";
import * as animationData from "@/assets/radar.json";

export default function NotFoundAnimation() {
  return (
    <Lottie
      height={300}
      width={300}
      options={{
        animationData: animationData,
        loop: true,
        autoplay: true,
      }}
    />
  );
}
