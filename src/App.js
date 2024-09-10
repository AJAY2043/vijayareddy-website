import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './Components/Project/LandingPage'
// import AboutMe from './Pages/AboutMe'
// import CollabrateWithMe from './Pages/CollabrateWithMe'
// import ContactMe from './Pages/ContactMe'
// import MyBlog from './Pages/MyBlog'
import AboutMe from './Pages/AboutMe/AboutMe'
import CollabrateWithMe from './Pages/Collabration/CollabrateWithMe'
import ContactMe from './Pages/ContactMe/ContactMe'
import MyBlog from './Pages/MyBlog/MyBlog'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/collabrationsWithMe'element={<CollabrateWithMe/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
      <Route path='/myblogs' element={<MyBlog/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
