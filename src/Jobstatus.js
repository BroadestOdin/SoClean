import Header from "./header"
import React, { useState, useEffect } from "react";
import axios from "axios";
import RetrieveJobStatus from "./RetrieveJobStatus"

export default function JobStatus()
{

  const [showDetail, setShowDetail] = React.useState(false);
  function getSCEValue() {
    const input = document.getElementById('SCEJobID');
    const value = input.value;
    sessionStorage.setItem("SCEvalue", "");
    sessionStorage.setItem("SCEvalue", value);
    setShowDetail(false);
    setTimeout(() => {
      setShowDetail(true);
    }, 0);
  }
    return(
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
                    Restez informé en temps réel !
                  </h1>
                  <p
                    role="contentinfo"
                    className="text-base leading-5 mt-5 text-gray-600"
                    id="textservice">
                   En utilisant notre outil, vous pouvez facilement suivre l'avancement de votre véhicule en temps réel. Il vous suffit de saisir votre numéro de travail et vous aurez instantanément accès à toutes les informations importantes, y compris le statut de votre véhicule et les prochaines étapes à venir.
                  </p>
                  <br></br>
                  <p>Chez SoClean Esthétique, nous comprenons que chaque véhicule est important pour vous, c'est pourquoi nous avons développé cet outil de recherche d'avancement de travail en cours pour rendre le processus aussi transparent et efficace que possible.</p>
                </div>
                <form class="w-full max-w-lg">
                  <div class="flex flex-wrap -mx-3 mb-6"></div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="SCEJobID"
                      >
                        Numéro de travail SoClean
                      </label>
                      <input
                        class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="SCEJobID"
                        type="email"
                        placeholder="SCE1681758008"
                      />
                      <p class="text-gray-600 text-xs italic">
                        Il s'agit du numéro fournit dans votre confirmation de rendez-vous qui commence par SCE...
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <button type="button" id="searchSCE" onClick={() => {getSCEValue()}} class="btn_unsub block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Rechercher</button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
              {showDetail && <RetrieveJobStatus></RetrieveJobStatus>}
          </div>
            </div>
          </>
        </div>
      </div>
    );
}