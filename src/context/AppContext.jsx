import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"


export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    

    const value = {
        loading,
        setLoading,
        posts,
        setPost,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
        
    };

   
    // data filling 

     async function fetchBlogPosts(page=1){
        setLoading(true);
        let url= `${baseUrl}?page=${page}`
        try{
            const result= await fetch(url);
            const data= await result.json();
            console.log(data)
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages)
        } catch(error){
            console.log('error in fetching data');
            setPage(1)
            setPost([])
            setTotalPages(null)
        }
        setLoading(false)
    }
       function handlePageChange(page){
          setPage(page);
          fetchBlogPosts(page);
       }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}
 
