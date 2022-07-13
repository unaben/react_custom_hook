import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((resData) => {
        setFetchedData(resData);
      });
  }, [URL]);
  return fetchedData;
};

export default useFetch;
