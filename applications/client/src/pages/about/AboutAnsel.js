import React from 'react';
import anselPic from '../../images/picture of ansel.PNG'

const AboutAnsel = () => {
    return (
        <div style={{ padding: "0 1% 0 1%", marginTop: '40px', marginBottom: '40px'}}>
            <img src={anselPic} width="250px" height="250px" alt="picture of ansel"/>

            <h1>Ansel Ngai</h1>
            <h2>Role: None</h2>
            <p>
                Hello. I like playing video games. 
                At the moment, I'm particularly enamored with the North American release of Lost Ark, 
                and I am excited for the global release of Elden Ring.
                I often watch Twitch and odd videos on YouTube.
            </p>
        </div>
    );
}

export default AboutAnsel;
