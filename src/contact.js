import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

export default function Contact() {
  const [showSuccessMessage, setSuccessMessage] = React.useState(false);
  const [showButtonSendRequest, setShowButtonSendRequest] = React.useState(true);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  function InputNameChange(event) {
    const name = event.target.value;
    if (name.length < 2)
    {setNameError("Le nom doit comprendre au moins 2 caractères");}
    else if(/\d/.test(name)) 
    {setNameError("Le nom ne doit comprendre que des caracteres alphabetique");}
    else if (!/^[a-zA-Z '-]+$/.test(name)) 
    {setNameError("Le nom ne peux pas contenir de caracteres speciaux");}
    else
    {setNameError("");}
  }

  function InputEmailChange(event) {
    const email = event.target.value;
    if (email.length < 5)
    {setEmailError("L'adresse courriel doit comprendre au moins 5 caracteres");}
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
    {setEmailError("L'adresse courriel entrée n'est pas dans un format valide");}
    else
    {setEmailError("");}
  }

  function InputMessageChange(event) {
    const message = event.target.value;
    const INAPPROPRIATE_WORDS = ['Bâtard', 'Câlice', 'Calvaire', 'Calvaire', 'Ciboire', 'Crisse', 'Ostie', 'estie', 'osti', 'esti', 'asti', 'Sacrament', 'Simonaque', 'Tabarnak', 'tbk', 'TBK', 'Tbk', 'Gros colon', 'Suce ma graine', 'Ostie d’mongol', 'Criss de tarla', 'Mangeux de marde', 'Câlice de chien sale', 'Ciboire'];
    if (INAPPROPRIATE_WORDS.some(word => message.includes(word))) 
    {setMessageError("Le message ne peux pas contenir de mot innapropriées");}
    else if (message.length < 5)
    {setMessageError("Le message doit comprendre au moins 5 caractères");}
    else if(message.length > 500) 
    {setMessageError("Le message ne doit pas comprendre plus de 500 caractères");}
    else if (/[$\\\/<>*^()%#|\[\]]/.test(message))
    {setMessageError("Le message ne doit pas contenir des caractères spéciaux");}
    else
    {setMessageError("");}
  }

  function BtnValidateBeforeSend() {
    if (nameError = "" && emailError == "" && messageError == "")
    {setShowButtonSendRequest(true);}
    else
    {setShowButtonSendRequest(false);}
  }

  function SendData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const requesttype = document.getElementById("requesttype").value;
    const message = document.getElementById("message").value;
    if (nameError == "" && emailError == "" && messageError == "" && name.length != 0 && email.length != 0 && message.length != 0)
    {
        const data = {
          name: name,
          email: email,
          requesttype: requesttype,
          message: message,
        };
        axios
          .post("http://localhost:3001/newrequest", data)
          .then(function (response) {
            const name = (document.getElementById("name").value = "");
            const email = (document.getElementById("email").value = "");
            const requesttype = (document.getElementById("requesttype").value = "");
            const message = (document.getElementById("message").value = "");
            setSuccessMessage(true);
            setTimeout(() => {
              setSuccessMessage(false);
            }, 15000); // 15 secondes en millisecondes
          });
    }
  }

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Nous contacter
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Enfin décider à nous laisser votre projet pour lui refaire une beautée
          ? Ne tardez plus et demandez votre soumission dès maintenant ! Encore
          hésitant ? Faite-nous part de vos préoccupations et nous saurons
          répondre à vos questions
        </p>
        <form class="space-y-8">
          <div>
            {showSuccessMessage && <div id="success_alert" class="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                        <svg aria-hidden="true"  class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" ></path>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                          <span class="font-medium">Votre demande a été envoyée avec succès.</span>{" "}Nous la traiterons dans un délai de 48 heures ouvrables.
                        </div>
                      </div>
            }
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre nom</label>
            <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Votre nom" onChange={InputNameChange} required/>
            {<span id="name-validation-message">{nameError}</span>}
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Adresse courriel
            </label>
            <input
              type="email"
              id="email"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="test@test.com"
              onChange={InputEmailChange}
              required
            />
            {<span id="email-validation-message">{emailError}</span>}
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Type de demande
            </label>
            <select
              id="requesttype"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            >
              <option>Automobile</option>
              <option>Bateau</option>
              <option>Véhicule récréatif (VR)</option>
              <option>Autre</option>
            </select>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Votre message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Décrivez-nous la nature de votre demande et/ou besoins"
              onChange={InputMessageChange}
              required
            ></textarea>
            {<span id="message-validation-message">{messageError}</span>}
          </div>

          {/*<div class="sm:col-span-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Photo(s) ou fichier(s)</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" multiple/>
        <small class="text-gray-900 dark:text-white">Il est recommandé pour des demandes de renseignements concernant nos services d'automobile et de bateaux de mettre une photo intérieur et une photo extérieur afin d'avoir une meilleure idée du travail à accomplir par notre équipe</small>
          </div>
        */}

          <button id = "btnsend" type="button" onClick={SendData} class="btn py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-200 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer</button>
        </form>
      </div>
      <footer class="px-4 py-12 mx-auto max-w-7xl bottom">
        <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p class="mb-6 text-sm text-left md:mb-0">
            © Copyright 2023 SoClean Esthétique. Tout droit réservé.
          </p>
          <div class="flex justify-center space-x-2"></div>
        </div>
      </footer>
    </section>
    
  );
}
