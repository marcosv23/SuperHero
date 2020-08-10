import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import mainImg from './../../assets/heroes.png'
import logo from './../../assets/logo.svg';
import signIn from './../../assets/log-in.svg'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
import { Row, Col, Container } from 'reactstrap'
import './styles.css';

export default function Logon() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(event) {

        try {
            if (email == '' || password == '') {
                alert('There are any empty fields!');
                return;
            }

            event.preventDefault();
            const response = await api.post('/session', { email, password });


            const { name, id } = response.data;
            localStorage.setItem('userName', name);
            localStorage.setItem('userId', id);
            console.log('Login succeed');
            console.log(response.data);
            history.push('/profile');

        } catch (err) {
            // alert(`Couldn't did login! Please try again! ${err}`)
            alert('email or password incorrect, please try again');
        }
    }

    return (< div className="logon-container" >


        { /*<section className="form">*/}
        <div className="container">
                <div className="form  justify-content-center" >
                        <img src={logo} className="" 
                            z alt="SuperHero" />
                        <form className=" borda m-5" onSubmit={handleLogin}
                            className="frm_logon" >
                            < h2 > Sign in </h2>
                            <input type="text"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                placeholder="Email" />

                            < input type="text"
                                className=""
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                placeholder="Password" />
                            <div className="mr-5">
                                <button className="button "
                                    type="submit" > Login
                                </button>
                                <Link className=" link"
                                     style={{marginLeft:10}}
                                    to="/register" > < FiLogIn color="#cc0000" /> 
                                    Não tem cadastro ? 
                                </Link>
                            </div>
                        </form>
            </div>
        </div>


        <img className="d-none d-md-block" src={mainImg}
            alt="Save the Day" />
    </div>
    );

}