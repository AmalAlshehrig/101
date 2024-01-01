import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import '../App.css'
function Home() {
const nav =useNavigate()
const [UserName,setUaerName]=useState('')
const [Password,SetPassword]=useState('')
const [data,setdata]=useState([])
const [showAlrt,setAlrt]=useState(false)
useEffect(() => {
  axios.get('https://6572ffb0192318b7db415faf.mockapi.io/user')
  .then(res=>setdata(res.data))
}, [])
const handelSignIn=()=>{
let user=data.find(user=>user.UserName==UserName&&user.Password==Password)
if(user){
    nav(`/101/${UserName}`)
    localStorage.setItem('Username',UserName)
}else{
    setAlrt(true);
}
}

  return (
    <div>
<header class="bg-gray-900 pattern">
    <div class="container px-6 mx-auto">
        <nav class="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
            <a href="#">
                <img class="w-auto h-6 sm:h-7" src="" alt=""/>
            </a>

            <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                <Link to={'/'} class="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">Sign In</Link>
                <Link to={'/SignUp'} class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">Sign Up</Link>
            </div>
        </nav>

        <div class="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
            <div class="lg:w-1/2">
                <h2 class="text-3xl font-semibold text-gray-100 lg:text-4xl">101</h2>

                <h3 class="mt-2 text-2xl font-semibold text-gray-100">
                    Hello <span class="text-blue-400">Guest</span>
                </h3>

                <p class="mt-4 text-gray-100">This is a platform that allows the user to register and express what he wants. I hope you have a good time :)</p>
            </div>

            <div class="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
                <div class="w-full max-w-md bg-white rounded-lg dark:bg-gray-800">
                    <div class="px-6 py-8 text-center">
                        <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign In</h2>

                        <form action="#">
                            <div class="mt-4">
                                <input
                                value={UserName}
                                onChange={(e)=>{setUaerName(e.target.value)}} 
                                class="block w-full px-4 py-2 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                                placeholder="Name"/>
                                <input
                                value={Password}
                                onChange={(e)=>{SetPassword(e.target.value)}} 
                                class="block w-full px-4 py-2 mt-4 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                                type="password" 
                                placeholder="Password"/>
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                <button 
                                onClick={handelSignIn}
                                class="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">Sign In</button>
                            </div>
                        </form>
                    </div>
                    {showAlrt&&(
                        <div class="w-full text-white bg-blue-500">
                        <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                            <div class="flex">
                                <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                    </path>
                                </svg>
                    
                                <p class="mx-3">The information is incorrect</p>
                            </div>
                    
                            <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
  )
}

export default Home