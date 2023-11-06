import { useState, useRef } from "react";

import WelcomeTeam from "./components/WelcomeTeam";
import BackgroundGradient from "./components/BackgroundGradient";
import ScanTeam from "./components/ScanTeam";
import { getTeam } from "./services/service";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";

const team = {
  name: "brocode",
  members: ["vinod", "thushan", "sachin", "sachith"],
};

function App() {
  const resultRef = useRef("test");
  const { data, error, loading, sendRequest } = useFetch({ maxDelay: 5000 });

  function handleSuccess(result) {
    if (resultRef.current === result) return;
    resultRef.current = result;
    sendRequest(getTeam(result));
  }

  function handleError() {}

  function handleScanButtonClick(value) {
    resultRef.current = value;
    sendRequest(getTeam(value));
  }

  function handleClose() {
    resultRef.current = null;
  }

  return (
    <>
      <Loading loading={loading} />
      <WelcomeTeam
        team={team}
        open={Boolean(!loading && (data || error))}
        error={error}
        onClose={handleClose}
      />
      <BackgroundGradient />
      <ScanTeam
        onResult={handleSuccess}
        onError={handleError}
        onScanButtonClick={handleScanButtonClick}
      />
    </>
  );
}

export default App;
