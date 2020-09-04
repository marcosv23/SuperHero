import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Global from './../../global.css';
import Styles from './styles.css'
import {FaLongArrowAltLeft}  from 'react-icons/fa';
import Logo from './../../assets/logo.svg';
import api from './../../services/api';


export default function Register()
{

const [name,setName]=useState('');
const [email, setEmail]= useState('');
const [whatsapp, setWhatsapp]= useState('');
const [city, setCity]= useState('');
const[password,setPassword]=useState('');
const [uf, setUf]= useState('');

const history = useHistory(); 
  async function handleRegister(e)
  {
     
    try
    {
        e.preventDefault();
        if(name===''||email===''||whatsapp===''||city===''||password===''||uf===''){
          alert('Há campos não preenchidos!')
          return
        }

        const data=
        {
          name, 
          email,
          whatsapp,
          city,
          uf, 
          password,
        }
        const response =  await api.post('/ong',data);
      
        alert(`Email: ${response.data.email} password:${response.data.password} id:${response.data.id}`)
        localStorage.setItem('userId',data.id);
        localStorage.setItem('userNamer',data.name);
        history.push('/');
      
    }  
    catch(e)
    {
      alert(` We couldn't register your account, please try again`);
    }  
  }

return(
    <div className="container">
      <div className="d-flex column d-none ">
        <div className=" row  ">
          <section className="d-none  d-lg-block p-4 m-2">
              <img  src={Logo}></img>
                          
                          <h2>Register!</h2>
                            <br/><br/>
                          <p className="d-none d-md-block">
                            Vestibulum dolor risus, faucibus et ipsum suscipit
                          </p>
                          <br/><br/>
                          <Link className="link d-none d-md-block" to="/">
                              <FaLongArrowAltLeft/> 
                              Go Back
                          </Link>
                  
            </section>
          </div>

          <div className=" row justify-content-center pr-3 mr-2">
             {/*Visibleonly on Sm*/} <h2 className="d-sm-none d-md-block">Register!</h2>
            {/*Visibleonly on Md*/} <h2 className="d-none d-md-block d-lg-none">Register!</h2>
             
             <form  onSubmit={handleRegister} className="row  mt-5 ml-5 ">
                <input 
                value={name}
                placeholder="Name"
                onChange={e=> setName(e.target.value)}/>

                <input  
                value={email}
                type="email"
                placeholder="Email"
                onChange={e=> setEmail(e.target.value)}/>

                  <input 
                  value={password}
                  placeholder="Password"
                  onChange={e=> setPassword(e.target.value)}
                    />

                  <input 
                  value={whatsapp}
                  type="text"
                  placeholder="WhatsApp"
                  onChange={e=> setWhatsapp(e.target.value)}/>
                  
                  
                    <div className="input-group" >
                      <input 
                      value={city}   
                      placeholder="City" 
                      onChange={e=>setCity(e.target.value)}/>

                      <input 
                      value={uf}
                      placeholder="UF"
                      style={{width:80 }}
                      onChange={e=> setUf(e.target.value)}
                    />

                    </div>

                  <button  type ="submit" className=" button" > Register!</button>
              </form>
          </div>
        </div>
        </div>


)

}