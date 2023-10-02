import React from 'react'

function NewBlog() {
  const handleClick = (e)=>{
    console.log('request to add new blog titles')
  }
  return (
    <div>
      <div>
    <article className='border-2 shadow-md shadow-slate-800 border-purple-600 rounded-md p-4 h-96 flex flex-col justify-center ' onClick={handleClick}  style={{cursor:'pointer'}}>
            <p className='text-center text-9xl'>+</p>
    </article>
    </div>
    </div>
  )
}

export default NewBlog
