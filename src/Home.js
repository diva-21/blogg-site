import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);
      const handleDelete=(id)=>{
        // remove the id from blogs copy
        const newblogs=blogs.filter(blog=> blog.id !== id);
        // set this newblogs from usestate hook
        setBlogs(newblogs);
      }
    return (
        <div className="home">
        {/* props as => variable=data_value */}
        <BlogList blogs={blogs} title="Our Blogs" handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((item)=>item.author==="mario")} title="Mario's Blogs" handleDelete={handleDelete}/> 
        </div>
    );
}
 
export default Home;