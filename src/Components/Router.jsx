import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Carrer from "./Carrer"
import Contact from "./Contact"
import Review from './Review'


function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/carrer" element = {<Carrer/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/review" element = {<Review/>}/>
    </Routes>
    </>
  )
}

export default Router