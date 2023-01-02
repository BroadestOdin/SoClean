import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Stats()
{
    return(
<div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
<h2 class="text-4xl font-bold title">SoClean Esthétique en chiffre, c'est..</h2>
    <div class="sm:flex sm:space-x-4">
        
        <div class="stat">
        <div><h2>Projets réalisés</h2><h2 class="number">+50</h2></div>
        <div><h2>Clients satisfait</h2><h2 class="number">+35</h2></div>
        <div><h2>Taux de satisfaction</h2><h2 class="number">100%</h2></div>
        </div>
    </div>
</div>
    );
}