
import Header from './components/Header'
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Ass1 from'./pages/Ass1'
import Ass2 from "./pages/Ass2";
import Footer from'./components/Fotter'
import { Route, Routes } from "react-router-dom";
 


export default function App(){
  return(
    
    <div className=" min-h-screen bg-gray-100">
      <Header />
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/ass1' element={<Ass1/> }/>
      <Route path='/ass2' element={<Ass2/> }/>

    </Routes>
     


      <Footer />
    </div>
  )
}
