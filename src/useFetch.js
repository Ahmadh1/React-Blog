import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      setTimeout(() => {
        fetch(url)
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
            // console.log(err.message);
            setLoading(false);
            setError(err.message);
          });
      }, 2000);
    }, [url]);
    return {data, error, loading}
}
export default useFetch;