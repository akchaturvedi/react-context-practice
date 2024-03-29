import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext)
  return (
    <div className='w-full  flex justify-center items-center border fixed bottom-0 bg-white'>
      <div className=' w-11/12 flex justify-between max-w-[670px] py-2' > 
      
      <div className='flex gap-x-2'>
      {
        page > 1 &&
        (<button 
        className='rounded border bg-slate-200 px-2 py-1 '
        onClick={() => handlePageChange(page - 1)}>
          Previous
        </button>)
      }

        {
          page < totalPages &&
          (<button 
            className='rounded border bg-slate-200 px-2 py-1 '
          onClick={() => handlePageChange(page + 1)} >
            next
          </button>)
        }
      </div>
      
        <p className='font-bold text-sm'>
          page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination
