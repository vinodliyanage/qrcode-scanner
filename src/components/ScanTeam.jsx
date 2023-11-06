import React from "react";
import QRScanner from "./QRScanner";
import Intro from "./Intro";

function ScanTeam({ onResult, onError, onScanButtonClick }) {
  return (
    <div className="fixed w-3/4 sm:w-4/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white p-6 rounded-lg m-auto shadow-sm ">
        <div className="grid gap-10 grid-col-1 sm:grid-cols-2 sm:gap-0">
          <div>
            <QRScanner onResult={onResult} onError={onError} />
          </div>
          <Intro onScanButtonClick={onScanButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default ScanTeam;
