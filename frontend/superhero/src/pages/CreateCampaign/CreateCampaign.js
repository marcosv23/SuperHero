import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Styles from './styles.css';
import { Rol, Col } from 'reactstrap'
import logo from './../../assets/logo.svg';
import { FaArrowLeft } from 'react-icons/fa'
import api from '../../services/api';

export default function CreateCampaign() {
    const userId = localStorage.getItem('userId');
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    async function handleCreateCampaign(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        const response = await api.post('/campaign', data, {
            headers: { auth: userId }
        });
        if (response.data !== undefined) {
            alert('Campaign has been registered!');
            history.push('/profile');
        }
    }

    return ( <
        div className = "createContainer row m-3" >
        <
        section className = "labelContainer" >
        <
        img className="d-none d-md-block" src = { logo }
        /> <
        h2 > Create a new Campaign < /h2> 
    
        <p className="d-none d-md-block "> Describe tou new campaign,
        we 'll  find a SuperHero to 
        settle this up!
        </p> 
        <
        Link to = "/"
        className = "link" > < FaArrowLeft size = { 15 } > < /FaArrowLeft> Go back to Home</Link >
        <
        /section>

        <
        form onSubmit = { handleCreateCampaign }
        className = "createForm" >
        <
        input value = { title }
        onChange = { event => setTitle(event.target.value) }
        placeholder = "Name for Campaign"
        type = "text" / >

        <
        input value = { value }
        onChange = { event => setValue(event.target.value) }
        placeholder = "Value"
        type = "text" / >

        <
        textarea value = { description }
        onChange = { event => setDescription(event.target.value) }
        placeholder = "Description, outline this new campaign!"
        type = "text" / >

        <
        button type = "submit"
        class = "button" > Create! < /button> < /
        form >

        <
        /div>


    )
}