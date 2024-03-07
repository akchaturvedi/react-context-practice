import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'

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
            <div key={post.id}>
                <p className='font-bold text-lg'>{post.title}</p>
                <p className='text-sm'>
                   By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                </p>
                <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                <p className='text-md mt-[14px]'> {post.content}</p>
                <div className='flex gap-x-3' >
                  {post.tags.map((tag,index) => {
                    return <span key={index} className='text-blue-800 text-xs mt-[4px] underline'>{`#${tag}  `}</span>
                  } )}
                </div>
            </div>
          )) )
        )
      }
    </div>
  )
}

export default Blogs
