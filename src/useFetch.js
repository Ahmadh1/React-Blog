import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Something went wrong with Server :( ");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setLoading(false);
            setError(err.message);
          }
        });
    }, 2000);
    return () => abortCont.abort();
  }, [url]);
  return { data, error, loading };
};
export default useFetch;
