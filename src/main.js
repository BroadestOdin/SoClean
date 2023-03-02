import React from 'react';
import ReactDOM from 'react-dom/client';
import './header.css';
import './home.css';
import './gallery.css'
import './contact.css'
import './estimation_tools.css'
import './cie.css'
import './before_after_slider.css'
import Footer from './footer';
import Contact from './contact';
import Home from './home';
import Header from './header';
import Pricing from './pricing';
import Gallery from './gallery';
import Cie from './cie'
import Estimation_tools from './estimation_tools';
import BeforeAfterSlider from './before_after_slider';
export default function Main()
{
    return (
    <div>
      <Header/>
      <div id='content'>
        <Home/>
        <Pricing/>
        <Gallery/>
        <BeforeAfterSlider/>
        <Cie/>
      </div>
      <Contact/>
    </div>
    );
}