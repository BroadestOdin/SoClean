import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import Header from "./header";

function getEmailFromInput() {
  const input = document.getElementById('emailvalue');
  const value = input.value;
  axios.get('http://localhost:3001/remove_exclusive_members', {
    params: {
      email: value
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}

export default function Unsubscribe() {

  return (
    <div>
      <Header />
      <div>
        <>
          <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
            <div className="lg:flex items-center justify-between">
              <div>
                <h1
                  role="heading"
                  className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
                >
                  {" "}
                  Vous partez déjà ?
                </h1>
                <p
                  role="contentinfo"
                  className="text-base leading-5 mt-5 text-gray-600"
                  id="textservice"
                >
                  Nous sommes tristes de voir que vous souhaitez vous désabonner
                  de notre liste de membres exclusif. <br />
                  <br /> Si jamais vous changez d'avis, n'hésitez pas à vous
                  réinscrire pour continuer à recevoir nos informations et
                  promotions.
                </p>
              </div>
              <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6"></div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="emailvalue"
                    >
                      Adresse courriel
                    </label>
                    <input
                      class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="emailvalue"
                      type="email"
                      placeholder="email@test.com"
                    />
                    <p class="text-gray-600 text-xs italic">
                      Il s'agit de l'adresse courriel à laquelle les courriels
                      de SoClean Esthetique vous sont envoyés
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <button type="button" class="btn_unsub block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={getEmailFromInput}>Me désinscrire de l'infolettre </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
