import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Layout from './components/Layout';
import Cyber from './Cybersecurity';
import MobileApp from './MobileApp';
import CustomEnterprise from './CustomEnterprise';
import Support from './Support';
import WebsiteDev from './WebsiteDev';
import CustomSoftware from './CustomSoftware';
import WhatWeDo from './WhatWeDo';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/cybersecurity" element={<Cyber/>}></Route>
          <Route path="/MobileApp" element={<MobileApp/>}></Route>
          <Route path="/softwaresolution" element={<CustomEnterprise/>}></Route>
          <Route path="/support" element={<Support/>}></Route>
          <Route path="/websitedevelopment" element={<WebsiteDev/>}></Route>
          <Route path="/customsoftware" element={<CustomSoftware/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/what-we-do" element={<WhatWeDo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
