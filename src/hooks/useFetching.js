import { useState } from "react"

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.code);
    } finally {
      setIsLoading(false);
      setIsLoaded(true)
    }
  }

  return [fetching, isLoading, isLoaded, error];
}