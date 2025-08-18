
import Header from './components/Header'
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Ass1 from'./pages/Ass1'
import Active from './pages/Active';
import Footer from'./components/Fotter'
import './styles/App.css'
import { Route, Routes } from "react-router-dom";
 


export default function App(){
  return(
    
    <div className=" flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/ass1' element={<Ass1/> }/>
      <Route path='/active' element={<Active/> }/>
    </Routes>
      <Footer />
    </div>
  )
}
