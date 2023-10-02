import React from 'react'

function Blog({blog}) {
  const handleClick = (e)=>{
    console.log(blog.title+" clicked");
  }
  return (
    <div onClick={handleClick}>
    <article  style={{cursor:'pointer'}} className='border-2 shadow-md shadow-slate-800 border-purple-600 rounded-md p-4 h-96 flex flex-col justify-between'>
        <div>
            {/* <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>{blog.title}</h3> */}
            <p className='text-sm mb-4'>{blog.content.substring(0,500)}...</p>
        </div>
        <span>
            <p className='text-center underline decoration-green-400'>Chosen title: {blog.title}</p>
        </span>
    </article>
</div>
  )
}

export default Blog