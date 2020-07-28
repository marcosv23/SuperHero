import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import Logo from '../../assets/logo.svg';
import { FaPowerOff, FaTrashAlt } from 'react-icons/fa';
import Styles from './styles.css';
import { useHistory, Link } from 'react-router-dom';


export default function Profile() {
  const [campaigns, setCampaigns] = useState([]);
  const userName = localStorage.getItem('userName');
  const userId = localStorage.getItem('userId');

  async function handleDeleteCampaign(id)
  { //console.log(id);
    try
    {
        const response = await api.delete(`/campaign/${id}`, 
        {
          headers:{auth: userId}
        }) //then( response=>{
          //setCampaigns(campaigns.filter(campaign=>id!==campaigns.id))
        setCampaigns(campaigns.filter(campaign=> campaign.id!== id));
        console.log('Campanha excluida');
      
    }
    catch(err){
      alert("Was not possible delete this item, please try again. If this error"+
      +"persists, please reload the page");
    }
  }


  const history = useHistory();


  function handleLogout() {
  
    localStorage.clear();
    history.push('/');
    console.log(campaigns);
  }

  function handleCreateCampaign() {

    history.push('/createCampaign');
  }

  //tentar com '' dentro de useState()

  useEffect(() => {
    api.get('/profile', {
      headers: {
        auth: userId
      }
    }).then(response => {
      setCampaigns(response.data);
    })
  }, [userId]);

  console.log(campaigns)
  if (campaigns.length == 0) {
    return (
      <>
        <div className="navBar">
          <img src={Logo} width="120" />
          <h1>{`Bem Vindo, ${userName} `}</h1>
          <button onClick={handleCreateCampaign} type="button" class="button" style={{ width: '20%', marginLeft: 450 }}>Create a new Campaign</button>
          <FaPowerOff onClick={handleLogout} className="logoutIcon" color="#e02041" size={25} />
        </div>

        <div style={{ marginTop: 150, marginLeft: 150 }}>
          <h1>There aren't anyone campaign registered,
           <Link className="link" to="/createCampaign" style={{ fontSize:30, textDecoration: 'none', color: '#cc0000' }}>create a new Campaign!</Link>
          </h1>
        </div>
      </>
    )
  }
  return (

    <>

      <div className="navBar">
        <img src={Logo} width="120" />
        <h1>{`Bem Vindo, ${userName} `}</h1>
        <button onClick={handleCreateCampaign} type="button" class="button" style={{ width: '20%', marginLeft: 450 }}>Create a new Campaign</button>
        <FaPowerOff onClick={handleLogout} className="logoutIcon" color="#e02041" size={25} />
      </div>

      <div className="campaigns">
        <h2>Registered Campaigns </h2>
        <div className="containerBox">

          {campaigns.map(item => (
            <ul key={item.id} className="box">
              <li>
                <span  onClick={()=>handleDeleteCampaign(item.id)} className="deleteIcon">
                  <FaTrashAlt  color="#8c8c8c" size={20} />
                </span>

                <div>
                  <h3>CAMPAIGN</h3>
                  <p>{item.title}</p>
                </div>
                <div>
                  <h3>DESCRIPTION</h3>
                  <p>{item.description}
                  </p>
                </div>

                <div>
                  <h3>VALOR:</h3>
                  <p>${item.value}</p>
                </div>

              </li>
            </ul>
          ))}

        </div>
      </div>

    </>
  )
}