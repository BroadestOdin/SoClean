import React from 'react';
import ReactDOM from 'react-dom/client';
import './header.css';
import './home.css';
import './gallery.css'
import './contact.css'
import './stats.css'
import './estimation_tools.css'
import Footer from './footer';
import Contact from './contact';
import Home from './home';
import Header from './header';
import Pricing from './pricing';
import Gallery from './gallery';
import Stats from './stats'
import Estimation_tools from './estimation_tools';
export default function Main()
{
    return (
    <div>
      <Header/>
      <div id='content'>
        <Home/>
        <Pricing/>
        <Gallery/>
      </div>
      <Estimation_tools/>
      <Stats/>
      <Contact/>
    </div>
    );
}