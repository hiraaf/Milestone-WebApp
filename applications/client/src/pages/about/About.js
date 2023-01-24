import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: '40px', marginBottom: '40px'}}>
            <h1>Meet our team!</h1>
            <br/>
            <h2>
            We are Team 01 in <br/>
            Software Engineering Class @ SFSU <br/>
            Spring 2022 <br/>
            </h2>

            <br/>
            
            <button style={{marginRight: '20px', width: '20%'}} onClick={() => navigate('jocelyn')}>Jocelyn Guzman</button> 
            <button style={{marginRight: '20px', width: '20%'}}onClick={() => navigate('edel')}>Edel Jhon Cenario</button>
            <br/><br/>
            <button style={{marginRight: '20px', width: '15%'}}onClick={() => navigate('miroslav')}>Miroslav Stavrev</button>
            <button style={{marginRight: '20px', width: '15%'}}onClick={() => navigate('hira')}>Hira Afzal</button>
            <button style={{marginRight: '20px', width: '15%'}}onClick={() => navigate('ansel')}>Ansel Ngai</button>
            

        </div>
    );
}

export default About;