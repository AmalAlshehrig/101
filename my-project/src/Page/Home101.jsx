import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBAr from '../components/SideBAr'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function Home101() {
    const{UserName}=useParams();
    const nav=useNavigate()
    if(!localStorage.getItem('Username')){
        nav('/')
    }
    const [Post,setPost]=useState('')
    const[Allpost,setAllpost]=useState([])
    const [Show,setShow]=useState([])
    useEffect(() => {
      axios.get(`https://6572ffb0192318b7db415faf.mockapi.io/X`)
      .then(res=>{
        setShow(res.data)
        console.log(res.data);
      })
    }, [])
    
    const handelPost =()=>{
        const newPost={
            Post:Post
        }
        setAllpost(Posts=>[...Posts, newPost])
        setPost('')
        axios.post('https://6572ffb0192318b7db415faf.mockapi.io/X',{
            UserName:UserName,
            Text:[...Allpost,newPost]
        })
        .then(res=>console.log(res))
    }
  return (
    <div className='flex flex-row justify-between'>
        <SideBAr/>
        <div>
        <div>
        <div class="relative mt-6">
  <input
  value={Post}
  onChange={(e)=>{setPost(e.target.value)}}
    placeholder="What comes to your mind?"
    class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
  />
  <div class="absolute inset-y-1 right-1 flex justify-end">
    <button
    onClick={handelPost}
      type="submit"
      aria-label="Submit"
      class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
    >
      <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        ></path>
      </svg>
    </button>
  </div>
</div>

</div>
{Show.map((item,index)=>(
<div key={index} class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-2">
    <div class="mt-2">
        {item.Text.map((m,i)=>(
        <p key={i} class="mt-2 text-gray-600 dark:text-gray-300">{m.Post}</p>
        ))}
    </div>
    <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
            <img class="hidden object-cover w-8 h-8 mx-2 rounded-full sm:block" src="https://static.thenounproject.com/png/4851855-200.png" alt="avatar"/>
            <a class=" text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link">{item.UserName}</a>
        </div>
    </div>
</div>
))}
</div>
<div>

</div>
    </div>
  )
}

export default Home101