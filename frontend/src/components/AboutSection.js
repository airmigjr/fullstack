import React from 'react'

import {About, Description, Image} from '../styles'

const AboutSection = () =>{
    return (
        <About>
            <Description>
            <h2>Airton Miguel Jr</h2>
            <h2>Software Engineer</h2>
            
            <p>
                I´m a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and PHP.
            </p>
            <button>Contact US</button>
            </Description>
            
            <Image>
            <img src = "https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao-768x403.jpg"/>
            </Image>
        </About>
    )
}


export default AboutSection