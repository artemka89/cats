import { useCallback, useEffect, useRef, useState } from "react";
import { fetchData } from "../api/api";

interface FetchOptions {
  url: string;
  fetchOptions?: RequestInit;
}

export function useFetch<T>({ url, fetchOptions = {} }: FetchOptions) {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const isMounted = useRef(true);
  const intervalRef = useRef<number | undefined>(undefined);
  const timeoutRef = useRef<number | undefined>(undefined);

  const executeFetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchData<T>(url, fetchOptions);
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const start = (interval?: number) => {
    stop();
    timeoutRef.current = setTimeout(() => {
      executeFetch();
      intervalRef.current = setInterval(executeFetch, interval);
    }, interval);
  };

  const stop = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const refetch = useCallback(async () => {
    executeFetch();
  }, [executeFetch]);

  useEffect(() => {
    if (!isMounted.current) return;

    executeFetch();

    isMounted.current = true;

    return () => {
      stop();
      isMounted.current = false;
    };
  }, [executeFetch]);

  return { data, isLoading, error, refetch, start, stop };
}
