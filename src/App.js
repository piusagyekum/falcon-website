import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Home';
import { BrowserRouter,Route } from 'react-router-dom';
import { Routes } from 'react-router';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
  <BrowserRouter>  
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/About" element={<About/>}></Route>

        <Route path="/Projects" element={<Projects/>}></Route>

        <Route path="/Services" element={<Services/>}></Route>

        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes> 
    </div>   
  </BrowserRouter>
  );
}

export default App;
