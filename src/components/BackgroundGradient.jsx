import React from "react";

function BackgroundGradient() {
  return (
    <div
      style={{
        background: "linear-gradient(300deg, #3b82f6, #a855f7, #3b82f6) 0% 0% / 180% 180%",
      }}
      className="fixed top-0 left-0 w-full h-[100vh] animate-background-gradient-animation"
    ></div>
  );
}

export default BackgroundGradient;
