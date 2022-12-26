import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]=useState(null);
  useEffect(() => {
    setTimeout(() => {
      // returns a promise object
      fetch("http://localhost:8000/blogss")
        .then((res) => {
          if(!res.ok){
            throw Error('could not fetch the data for that resource')
          }
          // convert that response from above to a json
          return res.json();
        })
        .then((data) => {
          //taking the above data as json
          // console.log(data);
          //and also mark loading flag as false
          setIsLoading(false);
          setBlogs(data);
          setError(null)
        })
        .catch(err=>{
          // console.log(err.message);
          setIsLoading(false);
          setError(err.message)
        })
        
    }, 1000);
  }, []);
  return (
    <div className="home">
      {/* props as => variable=data_value */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Our Blogs" />}
    </div>
  );
};

export default Home;
