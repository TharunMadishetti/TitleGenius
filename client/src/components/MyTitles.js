import React from 'react'
import Blog from './Blog';
import NewBlog from './NewBlog';
import {motion} from 'framer-motion'
const blogs = [
  {
    content:"Importing the necessary libraries Building the Machine Learning Model for Title Generation,Importing libraries before we start working on them. Here, I have used Keras and TensorFlow as the main libraries for our model as it is a highly productive interface for solving such problems, with a deep learning approach.pandas as pd"+
    "from keras.preprocessing.sequence import pad_sequences"+
    "from keras.layers import Embedding, LSTM, Dense, Dropout"+
    "from keras.preprocessing.text import Tokenizer"+
    "from keras.callbacks import EarlyStopping",
    title:"a"
  },
  {
    content:"",
    title:"v"
  },
  {
    content:"",
    title:"b"
  },
  {
    content:"",
    title:"b"
  },
  {
    content:"",
    title:"b"
  },
];
function MyTitles({theme}) {
  return (
    <motion.div className={`${!theme?"bg-black":""} p-12 pt-0 h-auto flex flex-col justify-evenly items-start md:items-center`}>
      <h1 className='font-bold text-base mb-8'>Your previous work</h1>
        <main className='w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-4'>
            {blogs ? (blogs.map((blog,index) => (
                <Blog key={index} blog={blog}
                />
            ))):(<h1>Loading...</h1>)}
            {/* <NewBlog/> */}
        </main>
    </motion.div>
  )
}

export default MyTitles