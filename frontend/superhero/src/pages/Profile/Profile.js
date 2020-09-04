import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import Logo from '../../assets/logo.svg';
import { FaPowerOff, FaTrashAlt, FaHandsHelping, FaCopy, FaMoneyCheckAlt, FaPlus} from 'react-icons/fa';
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

    function handleAddCampaign()
    {
      history.push('/createCampaign')
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
        <div className="row justify-content-between">

          <img className="col-3" src={Logo} width="120" />
          <h3 className="col-2 d-none d-lg-block d-xl-none" >{`Bem Vindo, ${userName} `}</h3>
          <p className="mt-5"><strong> {`Bem Vindo, ${userName} `}</strong></p>
      
          <button className="col-1 "  className="d-none  d-md-block button" onClick={handleCreateCampaign} type="button"  >Create a new Campaign</button>
          <FaPowerOff className="col-2 mt-2 logoutIcon" size={30} onClick={handleLogout}  color="#e02041"  />
          <FaPlus className="col-2 mt-2" color="#cc0000" size={30} onClick={handleAddCampaign}/>
        </div>

        <div className="mt-5 ml-5 m-xl-5  mr-5 row align-items-center justify-content-center" >
          <h1>There aren't anyone campaign registered,
           <Link className="link" to="/createCampaign" style={{ fontSize:30, textDecoration: 'none', color: '#cc0000' }}>create a new Campaign!</Link>
          </h1>
        </div>
      </>
    )
  }
  return (

    <div className="container-fluid">

      {/*hidden only on sm*/}
      <div className="d-sm-none d-md-block">
        <div className="navBar row ">
          <img src={Logo} width="120" />
          <h1 className="d-none d-md-block">{`Bem Vindo, ${userName} `}</h1>
          <h3 className="pt-5 d-block d-sm-none link" onClick={handleCreateCampaign}>Create  new campaign</h3>
          <button className="d-none d-md-block button " onClick={handleCreateCampaign} type="button" style={{ width: '20%', marginLeft: 450 }}>Add campaign</button>
          <FaPowerOff onClick={handleLogout} className="logoutIcon " color="#e02041" size={25} />
        </div>
      </div>


      {/** visible only on sm */}
      <div className="  container-fluid border  d-none d-sm-block d-md-none">
        <div>
          <FaPowerOff onClick={handleLogout} className="logoutsmIcon mb-5" color="#e02041" size={25} />
        </div>
        <div className="navBar row border  d-sm-block d-md-none">
          <img className="col-sm-1 border " src={Logo} width="120" />
          <h1 className="d-none d-md-block border ">{`Bem Vindo, ${userName} `}</h1>
          <h3 className="pt-5 d-block d-sm-none link border " onClick={handleCreateCampaign}>Create  new campaign</h3>
          <button className="d-none d-md-block button border " onClick={handleCreateCampaign} type="button" style={{ width: '20%', marginLeft: 450 }}>Add campaign</button>
        </div>
      </div>

      <div className="row justify-content-center"><h2 >Registered Campaigns </h2></div>
      
      <div className="row justify-content-center">
          {campaigns.map(item => (
            <ul key={item.id} className="box  col-lg-4 col-md-6">
              <li className="col-md">
                <span className="d-flex mt-1 justify-content-end deleteIcon"  onClick={()=>handleDeleteCampaign(item.id)} >
                  <FaTrashAlt  color="#8c8c8c" size={20} />
                </span>

                <div >
                  <h3 className="redTitle"><FaHandsHelping size={20} />&nbsp;Campaign&nbsp;</h3>
                  <p className="ml-3">{item.title}</p>
                </div>
                <div>
                  <h3 className="redTitle"><FaCopy size={18}/>&nbsp;Description&nbsp;</h3>
                  <p className="ml-3">{item.description}
                  </p>
                </div>

                <div>
                  <h3 className="redTitle"><FaMoneyCheckAlt size={20}/>&nbsp;Value</h3>
                  <p className="ml-3">${item.value}</p>
                </div>

              </li>
            </ul>
          ))}

        </div>
    

    </div>
  )
}