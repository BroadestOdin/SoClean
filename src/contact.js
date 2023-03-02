import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Contact()
{
    return(
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nous contacter</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Enfin décider à nous laisser votre projet pour lui refaire une beautée ? Ne tardez plus et demandez votre soumission dès maintenant ! Encore hésitant ? Faite-nous part de vos préoccupations et nous saurons répondre à vos questions</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre nom</label>
              <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Votre nom" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresse courriel</label>
              <input type="email" id="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="test@test.com" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type de demande</label>
              <select class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                <option>Automobile</option>
                <option>Bateau</option>
                <option>Véhicule récréatif (VR)</option>
                <option>Autre</option>
              </select>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Décrivez-nous la nature de votre demande et/ou besoins"></textarea>
          </div>

          <div class="sm:col-span-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Photo(s) ou fichier(s)</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" multiple/>
        <small class="text-gray-900 dark:text-white">Il est recommandé pour des demandes de renseignements concernant nos services d'automobile et de bateaux de mettre une photo intérieur et une photo extérieur afin d'avoir une meilleure idée du travail à accomplir par notre équipe</small>
          </div>

          <button type="submit" class="btn py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-200 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer</button>
      </form>
  </div>
  <footer class="px-4 py-12 mx-auto max-w-7xl bottom">
  <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
    <p class="mb-6 text-sm text-left md:mb-0">© Copyright 2023 SoClean Esthétique. Tout droit réservé.</p>
    <div class="flex justify-center space-x-2">
</div>
  </div>
</footer>
</section>

    );
}