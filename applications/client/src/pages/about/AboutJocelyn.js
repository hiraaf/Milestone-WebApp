import React from 'react';
import jocelynPic from '../../images/pictureOfJocelyn.JPG'

const AboutJocelyn = () => {
    return (
        <div style={{ padding: "0 1% 0 1%", marginTop: '40px', marginBottom: '40px'}}>
            <img src={jocelynPic} width="250px" height="250px" alt="default"/>

            <h1>Jocelyn Guzman</h1>
            <h2>Role: Team Lead</h2>
            <p>Hello World, My name is Jocelyn Guzman,<p>
            </p> I am currently a senior at San Francisco State University.
                I love to shop, socialize, binge watch shows, cook, exercise, hike, and dance.</p>
                 <p>I currently am interested in embedded systems. </p>
        </div>
    );
}

export default AboutJocelyn;