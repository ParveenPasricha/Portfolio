import "./App.css";
import Menu from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact";
import Project from './Components/Project'
import Blog from "./Components/Blog"
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/frontend'></Route>
        <Route path='/backend'></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
