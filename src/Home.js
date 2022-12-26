import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      // returns a promise object
    fetch("http://localhost:8000/blogs")
    .then((res) => {
      // convert that response from above to a json
      return res.json();
    })
    .then((data) => {
      //taking the above data as json
      // console.log(data);
      //and also mark loading flag as false
      setIsLoading(false)
      setBlogs(data)
    });
    },1000)
  }, []);
  return (
    <div className="home">
      {/* props as => variable=data_value */}

      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Our Blogs" />}
    </div>
  );
};

export default Home;
