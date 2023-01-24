import React from 'react';
import anthonyPic from '../../images/picture of anthony.jpg'

const AboutAnthony = () => {
    return (
        <div style={{ padding: "0 1% 0 1%", marginTop: '40px', marginBottom: '40px' }}>
            <img src={anthonyPic} width="250px" height="250px" alt="Anthony's profile picture"/>

            <h1>Anthony Zhang</h1>
            <h2>Role: Back End Lead</h2>
            <p>
            Hi, I'm Anthony. I like anime, Japan, and video games.
            One of my favourite games and animes is Steins;Gate. <br/>
            I am also interested in drama and gossip about Virtual YouTubers a.k.a. VTubers. <br/>
            Please feel free to talk to me about any of the aforementioned topics.
            </p>
        </div>
    );
}

export default AboutAnthony;