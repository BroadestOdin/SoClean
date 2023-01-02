import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
<header>
    <div class="bg">
    <nav class="text-center text-black text-xl py-5 px-1 navbar">
        
    <img class="logo" src="https://socleanesthetique.com/images/thumbnail_SoClean_vitre_arriere_FINAL-1%20copie.png"></img>
        <ul>
            <li>Accueil</li>
            <li>Nos réalisations</li>
            <li>À propos de nous</li>
            <li>Nous contacter</li>
        </ul>
    </nav>
    <div class="text-center text-black-400 py-20 px-6">
    <h1 class="text-6xl font-bold mt-7 mb-1">SoClean Esthétique</h1>
    <h3 class="text-2xl font-bold mb-8">La perfection dans la précision</h3>
    <a class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">En savoir plus</a>
  </div>
    </div>
</header>
    );
  }

