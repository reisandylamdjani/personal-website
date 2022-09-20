import logo from './logo.svg';
import './App.scss';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Layout from './components/Layout/layout'
import Project from './components/Project/project'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
