import { Route, Routes } from "react-router-dom"
import NavbarComponents from "./components/NavbarComponents"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import ExportProcess from "./pages/ExportProcess"
import Contact from "./pages/Contact"
import FooterComponents from "./components/FooterComponents"


const App = () => {
  return (
    <div className="overflow-hidden">
      <NavbarComponents/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/products" element={<Products/>} exact/>
        <Route path="/process" element={<ExportProcess/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
      </Routes>
      <FooterComponents/>
    </div>
  )
}

export default App
