import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    // states for changing thr default value of thr forms
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading,setIsLoading]=useState(false);

  const hist=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();

    setIsLoading(true)
    const blog={title,body,author};
    // console.log(blog);
    // post request to our json db
    fetch("http://localhost:8000/blogs/",{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    })
    .then(()=>{
        console.log("Added a new blog");
        setIsLoading(false)
        // hist.go(-1)
        hist.push('/') // after adding it will redirect to home page
    })

    
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;