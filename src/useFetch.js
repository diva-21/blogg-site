import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont=new AbortController();
    setTimeout(() => {
      fetch(url,{signal: abortCont.signal})
      //return a promise object
      .then(res => {
        //coverts into json
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      //wit the above json , do the floowing
      //set data as json, isloading to flase, and error to flase
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if(err.name==='AbortError'){
          console.log('fetch aborted');
        }
        else{
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);}
      })
    }, 1000);
    return ()=>abortCont.abort();
     
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;