import axios from 'axios';
import React, { useState } from 'react'

export default function Home() {
  const [data,setData] = useState("");
  const [title,setTitle] = useState(null);
  
  async function query() {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/TusharJoshi89/title-generator",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    console.log(result[0].summary_text)

    if(result[0].summary_text)
    setTitle(result[0].summary_text);
    else
    query();
  }
  
  
  
 return (
    <div className='flex flex-col justify-between items-center' >
    <div className=" my-3 flex flex-col items-center justify-center ">
       <textarea class="  border-black   border-2 rounded-xl text-center text-3xl "
          onChange={(e)=>setData(e.target.value)}
          rows="3"
          placeholder="Enter The Text">
        </textarea>
    </div>
    <div className="flex items-center justify-center">
       <button class="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full" onClick={(e)=>query()}>
         Generate
       </button>
    </div>
    <div className='p-4'>{title && <p>{title}</p>}</div>
    </div>
  )
}
