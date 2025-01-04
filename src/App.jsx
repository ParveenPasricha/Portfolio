import "./App.css";
import Menu from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact";
import Project from './Components/Project'
import Blog from "./Components/Blog"
import Footer from "./Components/Footer";
import Hire from "./Components/Hire";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/frontend'/>
        <Route path='/backend'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
