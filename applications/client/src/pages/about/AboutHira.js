import React from 'react';
import hiraPic from '../../images/default about picture.png'

const AboutHira = () => {
    return (
        <div style={{ padding: "0 1% 0 1%", marginTop: '40px', marginBottom: '40px'}}>
            <img src={hiraPic} width="250px" height="250px" alt="default"/>

            <h1>Hira Afzal</h1>
            <h2>Role: Github Master</h2>
            <p>Hi, My name is Hira. I am a senior at SFSU. <br/>
                I like reading, watching old movies and doing projects on photoshop.
            </p>
        </div>
    );
}

export default AboutHira;