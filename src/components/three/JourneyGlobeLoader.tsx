"use client";

import dynamic from "next/dynamic";

export default dynamic(() => import("./JourneyGlobe"), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-[#140b09]" />,
});
