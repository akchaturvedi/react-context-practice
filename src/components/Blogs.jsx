import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
  const{posts, loading}=useContext(AppContext)
  console.log("printing inside blog component")
  console.log(posts)
  return (
    <div className='w-11/12  max-w-[670px] py-7 flex flex-col gap-y-6 mt-[66px] mb-[66px] justify-center items-center' >
      {
        loading? 
        <div className="flex justify-center items-center h-screen ">
        <Spinner />
      </div>:        
        ( posts.length===0 ?
          <div>
            <p>Post Not Found</p>
          </div> :
          (posts.map((post)=> (
              <BlogDetails post={post} key={post.id}/>
          )) )
        )
      }
    </div>
  )
}

export default Blogs
