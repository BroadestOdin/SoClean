import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Contact()
{
    return(
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-3xl tracking-tight text-center text-gray-900 dark:text-white">Outil d'estimation</h2>
              <small class="dark:text-white">Cet outil d'estimation permet d'obtenir des estimations de prix en fonction des valeurs fournis par le client. Toute demande qui sera envoyé via cet outils pourrait faire l'objet de modification tarifaire lors de la soumission officielle selon l'état du véhicule</small>
          </div>
          <form class="w-full">
        <div class="personnal_info">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-first-name">Votre nom</label>
                <input class="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe"/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-last-name">Votre adresse courriel</label>
                <input class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="test@test.com"/>
                </div>
            </div>
        </div>
        <div class="personnal_info">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-first-name">Type d'estimation</label>
                <select class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Automobile</option>
                    <option>Bateau</option>
                    <option>Véhicule récréatif</option>
                </select>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-last-name">Type de véhicule</label>
                <select class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Voiture standard</option>
                    <option>VUS</option>
                    <option>Camionnette et mini-fourgonette</option>
                </select>
                </div>
            </div>
        </div>
        <div class="personnal_info">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-first-name">État du véhicule</label>
                <select class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <optgroup label="Lavage"/>
                <option>Lavage mineur </option>
                <option>Lavage modéré </option>
                <option>Lavage en profondeur </option>
                <optgroup label="Polissage"/>
                <option>Véhicule a l'état neuf</option>
                <option>Légère imperfection</option>
                <option>Imperfection modéré</option>
                <option>Quelque rayures profondes</option>
                </select>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-5 dark:text-white" for="grid-last-name"></label>
                <button type="submit" class="btn py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-200 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Obtenir mon estimation maintenant</button>
                </div>
            </div>
        </div>
<section
  class="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[50px] lg:pb-[50px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-10">
          <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">Vos forfaits personnalisé</h2>
        </div>
      </div>
    </div>

    <div class="our">

        <div class="copper border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
          <span class="text-copper mb-4 block text-lg font-semibold">Forfait de base</span>
          <h2 class="text-dark mb-5 text-[28px] font-bold">Forfait à partir de X$</h2>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">Option 1</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 2</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 3</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 4</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 5</p>
          </div>
          <a href="javascript:void(0)" class="text-copper hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white">Prendre rendez-vous</a>
        </div>


        <div class="silver border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
          <span class="text-silver mb-4 block text-lg font-semibold">Forfait milieu de gamme</span>
          <h2 class="text-dark mb-5 text-[28px] font-bold">Forfait à partir de X$</h2>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">Option 1</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 2</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 3</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 4</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 5</p>
          </div>
          <a href="javascript:void(0)" class="text-silver hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white">Prendre rendez-vous</a>
        </div>

        <div class="gold border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
          <span class="text-gold mb-4 block text-lg font-semibold">Forfait haut de gamme</span>
          <h2 class="text-dark mb-5 text-[28px] font-bold">Forfait à partir de X$</h2>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">Option 1</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 2</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 3</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 4</p>
            <p class="text-body-color mb-1 text-base leading-loose">Option 5</p>
          </div>
          <a href="javascript:void(0)" class="text-gold hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white">Prendre rendez-vous</a>
        </div>

    </div>
  </div>
</section>
</form>
<br></br>
</section>
);
}