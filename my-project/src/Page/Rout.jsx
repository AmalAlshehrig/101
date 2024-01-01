import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Error from './Error'
import Home from './Home'
import SignUp from './SignUp'
import Home101 from './Home101'
import Profile from '../components/Profile'
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/101/:UserName' element={<Home101/>}/>
            <Route path='/Profile/:UserName' element={<Profile/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default Rout