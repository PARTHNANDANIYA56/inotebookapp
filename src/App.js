import React from 'react';
import './App.css';
import Navbar from './componet/Navbar';
import About from './componet/About';
import Testimonial from './componet/Testimonial';
import Ourservice from './componet/Ourservice';
import Contacts from './componet/Contacts';
import Footer from './componet/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componet/Home';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/Ourservice' element={<Ourservice />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
