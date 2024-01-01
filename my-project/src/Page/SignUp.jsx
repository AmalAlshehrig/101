import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'
function SignUp() {
    const[UserName,setUserName]=useState('')
    const[Password,SetPassword] = useState('')
    const[Email,setEmail]=useState('')
    const[PhoneNumber,setPhoneNumber]=useState('')
    const[ShowAlrt,setShow]=useState(false)
    const[EmailAlrt,setEmailAlrt]=useState(false)
    const[passAlrt,setpassAlrt]=useState(false)
    const[data,setdata]=useState([])
    const nav=useNavigate()
    const handelSignUp =()=>{
        if(UserName === '' || Password === '' || Email === '' || PhoneNumber === ''){
            setShow(true)
        }else if(!/^[A-Za-z]+@[a-z]+\.[a-z]{2,4}$/.test(Email)){
            setEmailAlrt(true)
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password)){
            setpassAlrt(true)
        }else{
            axios.post('https://6572ffb0192318b7db415faf.mockapi.io/user',{
                UserName:UserName,
                Password:Password,
                Email:Email,
                PhoneNumber:PhoneNumber
            })
            .then(res=>{
                setdata(res.data)
                localStorage.setItem('Username',UserName)
                console.log(res.data)
                nav(`/101/${UserName}`)
            })
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
                        <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Sign Up</h2>

                        <form action="#">
                            <div class="mt-4">
                            <input 
                            class="block w-full px-4 py-2 mt-4 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                            placeholder="Name"
                            value={UserName}
                            onChange={(e)=>(setUserName(e.target.value))}/>
                                <input 
                                class="block w-full px-4 py-2 mt-4 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                                type="password" 
                                placeholder="Password" 
                                aria-label="Password"
                                value={Password}
                                onChange={(e) => SetPassword(e.target.value)} />
                                <input 
                                class="block w-full px-4 py-2 mt-4 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                                placeholder="Email address" 
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)} />
                                <input 
                                class="block w-full px-4 py-2 mt-4 text-white-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring" 
                                placeholder="Phone Number"
                                value={PhoneNumber}
                                onChange={(e)=>(setPhoneNumber(e.target.value))}/>
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">Forget Password?</a>

                                <button 
                                class="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                                onClick={handelSignUp}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    {ShowAlrt&&(
                         <div className="w-full text-white bg-blue-500">
                         <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                             <div className="flex">
                                 <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                     <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                     </path>
                                 </svg>
                     
                                 <p className="mx-3">The information is incorrect</p>
                             </div>
                     
                             <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                                 <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                             </button>
                         </div>
                     </div>
                    )}
                    {EmailAlrt&&(
                        <div class="w-full text-white bg-yellow-400">
                        <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                            <div class="flex">
                                <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                    </path>
                                </svg>
                    
                                <p class="mx-3">The email is incorrect</p>
                            </div>
                    
                            <button class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    )}
                    {passAlrt&&(
                        <div class="w-full text-white bg-yellow-400">
                        <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                            <div class="flex">
                                <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                                    </path>
                                </svg>
                    
                                <p class="mx-3">The password is incorrect</p>
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

export default SignUp