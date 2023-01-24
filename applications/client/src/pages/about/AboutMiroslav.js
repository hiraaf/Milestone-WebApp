import React from 'react';
import miroslavPic from '../../images/pictureOfMiroslav.jpg'

const AboutMiroslav = () => {
    return (
        <div style={{ padding: "0 1% 0 1%", marginTop: '40px', marginBottom: '40px' }}>
            <img src={miroslavPic} width="250px" height="250px" alt="default"/>

            <h1>Miroslav Stavrev</h1>
            <h2>Role: Scrum Master</h2>
            <p>Hello, my name is Miroslav Stavrev and I'm currently a senior at SFSU.<br/>
            My main hobby is gaming of any kind and I also enjoy reading, anime, and analysis.
            </p>
        </div>
    );
}

export default AboutMiroslav;