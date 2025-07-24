import { useState } from "react";
import { toast } from "sonner";

export default function useFetch(fn) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const wrappedFn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn(...args);
      setData(result);
      return result;
    } catch (err) {
        toast.error("An error occurred while fetching data.");
      setError(err);
      throw err;
    } finally {
      setLoading(false);
      
    }
  };

  return { loading, data, error, fn: wrappedFn };
}
