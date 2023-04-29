import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import socleanlogo from './Pictures/thumbnail_SoClean_vitre_arriere_FINAL-120copie.png'
import hamburger from './Pictures/hamburger.png'
import "animate.css";
import axios from "axios";
import { useRef } from 'react';


export default function Header() {
  const bodyRef = useRef(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showMenuMobile, setShowMenuMobile] = React.useState(false);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const onClick = () => {
    setEmailError("");
    setNameError("");
    setShowModal(!showModal);};

    function menuOpenMobile()
    {
      setShowMenuMobile(!showMenuMobile);
    }
  function InputNameChange(event) {
    const name = event.target.value;
    if (name.length < 2)
    {setNameError("Le prénom/nom doit comprendre au moins 2 caractères");}
    else if(/\d/.test(name)) 
    {setNameError("Le prénom/nom ne doit comprendre que des caracteres alphabetique");}
    else if (!/^[a-zA-Z '-]+$/.test(name)) 
    {setNameError("Le prénom/nom ne peux pas contenir de caracteres speciaux");}
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
  
  function BeExcluseMember()
  {
    const firstname = document.getElementById("firstnameexclusivemember").value;
    const lastname = document.getElementById("lastnameexclusivemember").value;
    const email = document.getElementById("emailexclusivemember").value;

    const data = {
      firstname: firstname,
      email: email,
      lastname: lastname,
    };

    axios.post("http://localhost:3001/beexclusive", data).then(function (response) {
          document.getElementById("firstnameexclusivemember").value = "";
          document.getElementById("lastnameexclusivemember").value = "";
          document.getElementById("emailexclusivemember").value = "";
          setShowModal(!showModal);
          });
  }
  return (
    <div>
      <header>
      <nav class="text-center text-black text-xl py-5 px-1 navbar">
            <img class="logo"src={socleanlogo}></img>
            <ul className={`menu ${showMenuMobile? 'open' : ''}`}>
              <li><Link to="/" className="liens">Accueil</Link></li>
              <li><Link to="/realisations" className="liens">Réalisations</Link></li>
              <li><Link to="/contact" className="liens">Nous contacter</Link></li>
            </ul>
            <button id="hamburgermenu" className={showMenuMobile? 'open' : ''} onClick={menuOpenMobile}><img src={hamburger}></img></button>
          </nav>
        <img src="https://cdn.discordapp.com/attachments/1062539451215130764/1066564418697166919/Turquoise_Ocean_Water_Seascape_Hello_Summer_Photo_Collage_Facebook_Cover_1492_842_px_2.jpg" class="bg"></img>
          <div class="text-center text-black-400 py-20 px-6 arrow">
            <span class="animated bounce"></span>
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
            id = "firstnameexclusivemember"
              onChange={InputNameChange}
              class="inputInscriptionName"
              type="text"
              placeholder="Votre prenom"
            />
            <input
              onChange={InputNameChange}
              id = "lastnameexclusivemember"
              class="inputInscriptionName"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          {<span id="firstname-validation-message">{nameError}</span>}
          <input
            onChange={InputEmailChange}
            id = "emailexclusivemember"
            class="inputInscription"
            type="text"
            placeholder="Votre adresse courriel"
          />
          {<span id="email-validation-message">{emailError}</span>}
          <button class="btnInscription" onClick={BeExcluseMember}> M'inscrire</button>
        </div>
      </form>
        </div>
      </div>}
    </div>
  );
}
