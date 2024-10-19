import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/Project/LandingPage'
import AboutUs from './Pages/Aboutus'
import Carrers from './Pages/Carrers'
import ContactUs from './Pages/ContactUs'
import CMDdesk from './Pages/CMDdesk'
import Help from './Pages/Help'
import Login from './Components/Login/Login'
// import Register from './Components/register/Register'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/signinsignup' element={<Login/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/carrers' element={<Carrers/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/CMDdesk' element={<CMDdesk/>}/>
      <Route path='/help' element={<Help/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
