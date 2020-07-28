import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogOut} from 'react-icons/all';
import logo from './../../assets/logo.svg';
import Styles from './styles.css'

export default function CreateCampaign()
{
  return(
    <>
    <div className="newAccountContainer">
       <div className="panel1">
          <img src={logo}/>
          <section>
            <h2>Create an account!</h2>
            <p>Cras est nisl, bibendum ac lacus eget, rutrum finibus magna. 
              Proin quis lacinia est, ac ultrices tortor. </p>
            <Link className="link1"><FiLogOut className="back-icon" size={20}/>Haven't an account?</Link>
            
          </section>
      </div>
      
      <form className="panel2">
          <input placeholder="New Ong's name" />
          <input placeholder="ong@ong.com"/>
          <input placeholder="(XX) Your phone"/>
          <input placeholder="Your city"/>
          <input placeholder="UF" />
          <button  className="button">Login!</button>
      </form>

    </div>

</>
  )
}