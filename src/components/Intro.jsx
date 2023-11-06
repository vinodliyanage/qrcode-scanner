import React, { useState } from "react";
import images from "../constants/images";

function Intro({ onScanButtonClick }) {
  const [registrationNumber, setRegistrationNumber] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img className="w-32" src={images.qrcode} alt="qrcode" />

      <h1 className="text-3xl font-bold">Scan QR Code</h1>
      <p className="text-gray-500 text-sm">Scan the QR code on your phone to sign in.</p>
      <p className="text-gray-500 text-md">or</p>

      <div className="flex items-center gap-3">
        <input
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="p-2 border-2 outline-none rounded-md border-slate-200"
          placeholder="Registration Number"
          type="text"
          name="registerNumber"
        />
        <button
          onClick={() => onScanButtonClick(registrationNumber)}
          disabled={!registrationNumber.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded cursor-pointer"
        >
          Scan
        </button>
      </div>
    </div>
  );
}

export default Intro;
