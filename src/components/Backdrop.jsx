import React from "react";

function Backdrop() {
  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 z-40 bg-black opacity-10"></div>
      <div className="fixed w-full h-full top-0 left-0 z-40 backdrop-blur-2xl"></div>
    </div>
  );
}

export default Backdrop;
