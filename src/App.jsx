import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './compontent/Register.jsx'
import Reset from './compontent/Reset.jsx'
import Resetrequest from './compontent/Resetrequest.jsx'
import Login from './compontent/Login'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register/>}></Route>
    <Route path='/reset' element={<Reset/>}></Route>
    <Route path='/resetpassword/:token' element={<Resetrequest/>}></Route>
    <Route path='/login' element={<Login/>}></Route>


   </Routes>
   </BrowserRouter>
  
   </>
  )
}

export default App