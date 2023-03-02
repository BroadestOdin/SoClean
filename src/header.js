import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import socleanlogo from './Pictures/thumbnail_SoClean_vitre_arriere_FINAL-120copie.png'
import hamburger from './Pictures/hamburger.png'
import "animate.css";

export default function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const onClick = () => setShowModal(!showModal);
  
  return (
    <div>
      <header>
        <div class="bg">
          <nav class="text-center text-black text-xl py-5 px-1 navbar">
            <img class="logo"src={socleanlogo}></img>
            <span className="menu-icon"><img id="hamburger_menu" src={hamburger}></img></span>
            <ul class="menu">
              <li>Accueil</li>
              <li>Nos réalisations</li>
              <li>À propos de nous</li>
              <li>Nous contacter</li>
            </ul>
          </nav>
          <div class="text-center text-black-400 py-20 px-6">
            <span class="animated bounce"></span>
          </div>
        </div>

        <div id="mybutton">
          <button class="feedback" onClick={onClick}>
            Devenir membre exclusif
          </button>
        </div>
      </header>
      {showModal && <div id="background_modal_blur">
        <div id="background_modal">
        <form class="newsletter_subscription">
        <div class="form_newsletter">
        <button class="CloseModal" onClick={onClick}>
            X
          </button>
          <img
              class="logo_modal"
              src={socleanlogo}
            ></img>
            <br/>
          <h3 class="text_newsletter_promotional">
            Devenir membre exclusif vous donne accès à des <ins><big>rabais</big></ins> privilégiés et
            nous vous tiendront informés des nouveautés.
          </h3>
          <br/>
          <div className="form_newsletter_name">
            <input
              class="inputInscriptionName"
              type="text"
              placeholder="Votre prenom"
            />
            <input
              class="inputInscriptionName"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          <input
            class="inputInscription"
            type="text"
            placeholder="Votre adresse courriel"
          />
          <button class="btnInscription"> M'inscrire</button>
        </div>
      </form>
        </div>
      </div>}
    </div>
  );
}
