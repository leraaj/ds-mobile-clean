import { useState, useEffect } from "react";

const useFetch = (API) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.warn(err);
      }
    };

    fetchData();
  }, [API]);

  return { data, error };
};

export default useFetch;
