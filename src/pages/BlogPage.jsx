import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl="https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log(url);
        try {
           const res= await fetch(url);
           const data = await res.json();
           setBlog(data.blog);
           setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log ( "there is an error in error blog ")
            setRelatedBlogs([]);
            setBlog(null)

        }
        setLoading(false)
    } 

    useEffect( ()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])
    
    return (
        <div>
            <Header/>
            <div>
                <button
                 onClick={()=>navigation(-1)}>
                    Back
                </button>
            </div>
            {
                loading ? <p>loading</p>:
                blog ? 
                (
                <div>
                  <BlogDetails post={blog}/>
                  <h2>Pelated Blogs</h2>
                  {
                    relatedBlogs.map((post) =>(
                        <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    ))
                  }
                   
               </div>): 
                <p> No Blog Found</p>
                
            }

        </div>
    )
}

export default BlogPage
