import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    let isMounted = true;

    setIsPending(true);
    setError(null);

    fetch(url, { signal: abortController.signal })
      .then(response => {
        if (!isMounted) return;
        if (!response.ok) {
          throw new Error('Could not fetch the data for that resource');
        }
        return response.json();
      })
      .then(result => {
        if (isMounted) {
          setData(result);
          setIsPending(false);
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError' && isMounted) {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => {
      abortController.abort();
      isMounted = false;
    };
  }, [url]);

  // Function to handle POST request
  const postData = useCallback(async (postData) => {
    setIsPending(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      const result = await response.json();
      setData(prevData => (Array.isArray(prevData) ? [...prevData, result] : result));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  }, [url]);

  // Function to handle DELETE request
  const deleteData = useCallback(async (id) => {
    setIsPending(true);
    setError(null);
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      setData(prevData => (Array.isArray(prevData) ? prevData.filter(item => item.id !== id) : null));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  }, [url]);

  return { data, isPending, error, postData, deleteData };
};

export default useFetch;
