import { useState } from "react";

const useFetch = ({ maxDelay = 10000 }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async (promise) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await Promise.race([
        promise,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), maxDelay)
        ),
      ]);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
 
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, sendRequest };
};

export default useFetch;
