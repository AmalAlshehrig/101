import React from 'react'
import SideBAr from './SideBAr'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const nav =useNavigate()
    if(!localStorage.getItem('Username')){
        nav('/')
    }
    const [user, setUser] = useState([])
    const [Like,setLike]=useState([])
    const [Islike,setIsLike]=useState(false)
    console.log(typeof Like);
    let NameUser=localStorage.getItem('Username')
    useEffect(() => {
    getData()
    }, [])
    const getData=()=>{
        axios.get('https://6572ffb0192318b7db415faf.mockapi.io/X')
        .then(res=>{
           const matchingUser= res.data.filter(user=>user.UserName===NameUser)
        if(matchingUser.length>0){
           setUser(matchingUser)
           console.log(matchingUser);
        }else{
           console.log("LOL");
        }
       })
    }
    const handelDelete=(id)=>{
        axios.delete(`https://6572ffb0192318b7db415faf.mockapi.io/X/${id}`)
        .then(()=>{
            getData()
        })
    }
    const handelLike=(id)=>{
        axios.put(`https://6572ffb0192318b7db415faf.mockapi.io/X/${id}`,{
            Islike:true
        })
        .then((res)=>{
            setLike((prevLike)=>[...prevLike,res.data])
            setIsLike(true)
            console.log(res.data);
            getData()
            })
    }
  return (
    <div className='flex justify-between'>
        <SideBAr/>
        <div>
        {user.map((item,index)=>(
        <div key={index} class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-6">
            {item.Text.map((m)=>(
                <div key={m.id}>
    <div class="flex items-center justify-between">
        <button 
        class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform rounded cursor-pointer hover:bg-gray-500" 
        tabindex="0" 
        role="button"
        onClick={() => handelDelete(item.id)}
        >...</button>
    </div>
    <div>   
        <p class="mt-2 text-gray-600 dark:text-gray-300">{m.Post}</p>
<button 
onClick={()=>{
    handelLike(item.id)}}
class="px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    Like
</button>
    </div>
    </div>
    ))}
</div>
))}
        </div>
        <div>
            {Like.map((itemLike,indexLike)=>(
                <div key={indexLike}>
                    <h1>Like</h1>
                    {itemLike.Text.map((mLike, iLike)=>(
                        <div key={iLike}>
                            <p>{mLike.Post}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Profile