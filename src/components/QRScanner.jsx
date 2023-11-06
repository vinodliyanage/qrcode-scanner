import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";

function QRScanner({ onResult = () => {}, onError = () => {}, ...props }) {
  const previewRef = useRef(null);
  const scannerRef = useRef(null);
  const scannerPromiseRef = useRef(null);

  useEffect(() => {
    if (!previewRef.current) return;

    const scanner = new Html5Qrcode(previewRef.current.id);
    scannerRef.current = scanner;

    const startScanner = () => {
      if (scannerPromiseRef.current) return;

      scannerPromiseRef.current = scannerRef.current
        .start({ facingMode: "environment" }, { fps: 10 }, onResult, onError)
        .then(() => {
          scannerRef.current = scanner;
          return true;
        });
    };

    startScanner();
  }, [previewRef]);

  return <div id="preview" ref={previewRef} {...props} />;
}

export default QRScanner;
