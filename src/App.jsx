import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Footer/Footer'
import HouseMenuPage from './HouseMenu/Housemenu'
import Nav from './Nav/Nav'
import Frontpage from './frontpage/Frontpage'
import HomeDetails from './Homedetails/Homedatails'
import Services from './Services/Services'
import Testonomials from './Testonomials/Testonimals'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Frontpage/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Reviews' element={<Testonomials/>}/>
        <Route path='/menupage' element={<HouseMenuPage/>} />
        <Route path='/menupage/:homeId' element={<HomeDetails/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
