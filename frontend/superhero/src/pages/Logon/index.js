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

        <Container className="form" >
            <Row style={{ borderWidth: 1 }}>
                <Col>
                <img src={logo}
                    z alt="SuperHero" />
                <form onSubmit={handleLogin}
                    className="frm_logon" >
                    < h2 > Sign in </h2>
                    <input type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email" />

                    < input type="text"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="Password" />

                    <button className="button"
                        type="submit" > Login </button>
                    <Link className="link"
                        to="/register" > < FiLogIn color="#cc0000" /> Não tem cadastro ? </Link>
                </form>
            </Col>
        </Container>


        <img src={mainImg}
            alt="Save the Day" />
    </div>
    );

}